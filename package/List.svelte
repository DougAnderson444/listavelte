<script>// import './app.css';
import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';
import { flip } from 'svelte/animate';
const uid = () => (((1 << 24) * Math.random()) | 0).toString(16);
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
export let todos = [
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
function add(input) {
    if (input == null)
        return;
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
function remove(todo) {
    todos = todos.filter((t) => t !== todo);
}
/**
 * @param {{ id: number; done: boolean; high: boolean; description: string; }} todo
 * @param {boolean} done
 */
function mark(todo, done) {
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
				class="flex flex-row items-center py-1 w-80"
			>
				<input type="checkbox" checked on:change={() => mark(todo, false)} class="mx-2 flex-none" />
				<div class="flex-grow text-gray-400">
					{todo.description}
				</div>

				<!-- <button
					on:click={() => remove(todo)}
					class="mx-2 flex-none px-4 py-1 text-xs text-red-400 font-semibold rounded-full hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
					>X</button
				> -->
			</label>
		{/each}
	</div>
</div>

<style>
	/* optional  */
	/* @tailwind base; */
	/* mandatory  */
	.m-1 {
    margin: 0.25rem
}
	.mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem
}
	.my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem
}
	.mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem
}
	.my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem
}
	.mb-1 {
    margin-bottom: 0.25rem
}
	.flex {
    display: flex
}
	.w-80 {
    width: 20rem
}
	.flex-none {
    flex: none
}
	.flex-grow {
    flex-grow: 1
}
	.transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
	.flex-row {
    flex-direction: row
}
	.flex-col {
    flex-direction: column
}
	.flex-nowrap {
    flex-wrap: nowrap
}
	.items-center {
    align-items: center
}
	.break-all {
    word-break: break-all
}
	.rounded-full {
    border-radius: 9999px
}
	.border {
    border-width: 1px
}
	.bg-green-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(74 222 128 / var(--tw-bg-opacity))
}
	.p-1 {
    padding: 0.25rem
}
	.p-3 {
    padding: 0.75rem
}
	.px-4 {
    padding-left: 1rem;
    padding-right: 1rem
}
	.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem
}
	.text-xs {
    font-size: 0.75rem;
    line-height: 1rem
}
	.font-semibold {
    font-weight: 600
}
	.text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.text-green-200 {
    --tw-text-opacity: 1;
    color: rgb(187 247 208 / var(--tw-text-opacity))
}
	.text-red-400 {
    --tw-text-opacity: 1;
    color: rgb(248 113 113 / var(--tw-text-opacity))
}
	.text-gray-400 {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity))
}
	.text-blue-600 {
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity))
}
	.blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
	.filter {
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
	.hover\:border-transparent:hover {
    border-color: transparent
}
	.hover\:bg-green-400:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(74 222 128 / var(--tw-bg-opacity))
}
	.hover\:bg-red-600:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(220 38 38 / var(--tw-bg-opacity))
}
	.hover\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}
	.focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
	.focus\:ring-purple-600:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(147 51 234 / var(--tw-ring-opacity))
}
	.focus\:ring-offset-2:focus {
    --tw-ring-offset-width: 2px
}</style>
