<script>
	import { page } from '$app/stores'
</script>

<style>
	pre {
		border: 1px solid var(--accent-color);
		border-radius: 3px;
		padding: 0 1em;
		overflow-y: scroll;
	}
</style>

<svelte:head>
	<title>Biblical Blueprints</title>
</svelte:head>

{#if $page.status === 404}
	<h1>Sorry, resource not found!</h1>
	<p>You can try searching for it, or contact us if you think this is an error.</p>
{:else if $page.status >= 500 && $page?.error}
	<h1>Error {$page.status}</h1>
	<p>Uh oh, this is not good. Could you copy this and send it to us?</p>
	<pre>{$page.error.message}</pre>
{:else}
	<h1>Error {$page.status}: {$page.error?.message}</h1>
{/if}
