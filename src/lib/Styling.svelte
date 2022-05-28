<div class="styling">
	<slot />
</div>
<!-- global: https://github.com/sveltejs/svelte-preprocess/blob/5db27a3ce4b54a33270320e25b9110f47358b327/docs/preprocessing.md#globalstyle  -->

<!-- @import via postcss-import as defined at ./postcss.config.cjs -->

<!-- <style global lang="scss">
	:global {
		.styling  {
			@import 'stylesheet.scss';
		}
	}
</style> -->

<!-- Works, but style applies outside of component children  -->
<style global lang="scss">
	@import './stylesheet.scss';
</style>
