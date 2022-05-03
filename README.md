# List-a-Svelte Task List Tracker

The ultimate Task List?

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

[NPM](https://www.npmjs.com/package/@douganderson444/listavelte):

```cs
# install the component from npm
npm install @douganderson444/listavelte
```

See src/routes/index.svelte for Demo usage:

```js
<script>
	import { TaskList } from '@douganderson444/listavelte';
	let uid = 1;

	let todos = [
		{ id: uid++, done: false, high: true, description: 'install the component' },
		{ id: uid++, done: false, high: false, description: 'pass in some todos' },
	];
</script>

<TaskList {todos} />
```

## Developing

Issues, pull requests, and forks are welcome
