<script>
	import { Todo } from '@douganderson444/listavelte';
	let uid = 1;

	let todos = [
		{ id: uid++, done: false, high: true, description: 'install the component' },
		{ id: uid++, done: false, high: false, description: 'pass in some todos' }
	];
</script>

<Todo bind:todos />

{@html JSON.stringify(todos, null, 2)}
