# Svelte Todo List

The ultimate Todo List.

- [x] Add new todos
- [x] Mark High priorities
- [x] Mark complete
- [x] Delete todos

## Use

If you're seeing this, you've probably already done this step. Congrats!

```bash
# install the component
npm install github:douganderson444/listavelte
```

See src/routes/index.svelte for Demo usage:

```js
<script>
	import { Todo } from '@douganderson444/listavelte';
	let uid = 1;

	let todos = [
		{ id: uid++, done: false, high: true, description: 'install the component' },
		{ id: uid++, done: false, high: false, description: 'pass in some todos' },
	];
</script>

<Todo {todos} />
```

## Developing

Issues, pull requests, and forks are welcome
