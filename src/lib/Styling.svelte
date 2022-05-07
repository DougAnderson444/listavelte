<div>
	<slot />
</div>
<!-- global: https://github.com/sveltejs/svelte-preprocess/blob/5db27a3ce4b54a33270320e25b9110f47358b327/docs/preprocessing.md#globalstyle  -->

<!-- @import via postcss-import as defined at ./postcss.config.cjs -->

<!-- global  -->
<style lang="postcss">
	@import './stylesheet.scss';
</style>
