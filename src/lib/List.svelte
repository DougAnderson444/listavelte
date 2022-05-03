<script lang="ts">
	import '../app.css';

	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import { customAlphabet } from 'nanoid';
	import { nolookalikes } from 'nanoid-dictionary';

	const uid = customAlphabet(nolookalikes, 16);

	interface Todo {
		id: string | number;
		done: boolean;
		high: boolean;
		description: string;
	}

	/** Styles */
	let checkboxStyle = 'flex flex-row items-center w-80';
	let high = 'border bg-green-400';

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	export let todos: Todo[] = [
		{ id: uid(), done: false, high: true, description: 'write some docs' },
		{ id: uid(), done: false, high: false, description: 'start writing blog post' },
		{ id: uid(), done: true, high: false, description: 'buy some milk' },
		{ id: uid(), done: false, high: false, description: 'mow the lawn' },
		{ id: uid(), done: false, high: false, description: 'feed the turtle' },
		{ id: uid(), done: false, high: false, description: 'fix some bugs' }
	];

	/**
	 * @param {HTMLInputElement} input
	 */
	function add(input: HTMLInputElement) {
		if (input == null) return;
		// todos.sort((a, b) => (a.id < b.id ? 1 : -1));
		const todo = {
			id: uid(),
			done: false,
			high: false,
			description: input.value
		};

		todos = [todo, ...todos];
		input.value = '';
	}

	/**
	 * @param {{ id: number; done: boolean; high: boolean; description: string; }} todo
	 */
	function remove(todo: Todo) {
		todos = todos.filter((t) => t !== todo);
	}

	/**
	 * @param {{ id: number; done: boolean; high: boolean; description: string; }} todo
	 * @param {boolean} done
	 */
	function mark(todo: Todo, done: boolean) {
		todo.done = done;
		remove(todo);
		todos = todos.concat(todo);
	}
</script>

<div class="flex flex-col flex-nowrap  w-80">
	<div class="flex flex-col flex-nowrap m-1 w-80">
		<div>
			<input
				class="mx-1 flex flex-row items-center w-80 border p-1 my-1"
				placeholder="what needs to be done?"
				on:keydown={(e) =>
					e.key === 'Enter' &&
					// @ts-ignore
					add(e.target)}
			/>
		</div>
		{#each todos
			.filter((t) => !t.done)
			.sort((a, b) => (a.high < b.high ? 1 : -1)) as todo (todo.id)}
			<div
				in:receive={{ key: todo.id }}
				out:send={{ key: todo.id }}
				animate:flip={{ duration: 200 }}
				class="flex flex-row items-center mb-1 w-80"
			>
				<input type="checkbox" on:change={() => mark(todo, true)} class="mx-2 flex-none" />
				<div
					contenteditable
					class="flex-grow break-all"
					on:keydown={function (e) {
						if (e.key == 'Enter') {
							e.preventDefault();
							// @ts-ignore
							this.blur();
						}
					}}
				>
					{todo.description}
				</div>
				<button
					on:click={(e) => (todo.high = !todo.high)}
					class="{todo.high
						? 'bg-green-400 text-white'
						: 'text-green-200'} mx-1 flex-none px-4 py-1 text-xs  font-semibold rounded-full hover:text-white hover:bg-green-400 hover:border-transparent"
					>High</button
				>
				<button
					on:click={() => remove(todo)}
					class="mx-1 flex-none px-4 py-1 text-xs text-red-400 font-semibold rounded-full hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
					>X</button
				>
			</div>
		{/each}
	</div>

	<div class="flex flex-col flex-nowrap m-1 my-2 w-80">
		{#each todos.filter((t) => t.done) as todo (todo.id)}
			<label
				in:receive={{ key: todo.id }}
				out:send={{ key: todo.id }}
				animate:flip={{ duration: 200 }}
				class="flex flex-row items-center w-80"
			>
				<input type="checkbox" checked on:change={() => mark(todo, false)} class="mx-2 flex-none" />
				<div class="flex-grow text-gray-400">
					{todo.description}
				</div>

				<button
					on:click={() => remove(todo)}
					class="mx-2 flex-none px-4 py-1 text-xs text-red-400 font-semibold rounded-full hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
					>X</button
				>
			</label>
		{/each}
	</div>
</div>
