<script>
    import Button from '../../Button.svelte';
    export let value;
</script>

<style>
    /* your styles go here */
</style>

<Button evt="press" on:press >{value}</Button>

