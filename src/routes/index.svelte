<script>
	import { TaskList, Styling } from '@douganderson444/listavelte';
	let uid = 1;

	let todos = [
		{ id: uid++, done: false, high: true, description: 'install the component' },
		{ id: uid++, done: false, high: false, description: 'pass in some todos' },
		{ id: uid++, done: true, high: false, description: 'mark them as done' }
	];
</script>

<TaskList bind:todos on:change={(e) => console.log('changed')} />

<TaskList on:change={(e) => console.log('changed')} />

<!-- 
<Styling>
	<TaskList />
</Styling> -->
<div class="p-2 text-gray-400">
	<h1 class="my-2 font-semibold text-blue-400">As you update the list, the data also updates:</h1>

	{@html JSON.stringify(todos, null, 2)}
</div>
