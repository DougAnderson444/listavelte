<script>
	import { Todo } from '@douganderson444/listavelte';
	let uid = 1;

	let todos = [
		{ id: uid++, done: false, high: true, description: 'install the component' },
		{ id: uid++, done: false, high: false, description: 'pass in some todos' }
	];
</script>

<Todo bind:todos />

<div class="p-2">
	<h1 class="my-2 font-semibold text-blue-400">As you update the list, the data also updates:</h1>

	{@html JSON.stringify(todos, null, 2)}
</div>
