<script>
    export let title = '';
    export let desc = '';
    export let className='';
</script>

<style>
    .config-item{
        color: var(--contrast-color);
        border-bottom: 2px solid var(--primary-color);
        padding: 1rem;
        cursor: pointer;
        transition: all .3s ease;
        margin-bottom: 1rem;
    }
    .config-item:hover{
        background-color: var(--primary-transparent-color);
        /* border-color: var(--secondary-color); */
    }

    .config-item__title{
        margin-bottom: .5rem;
    }
    .config-item__desc{
        color: var(--tertiary-color);
    }
    .bg-sec{
        border-bottom: 2px solid var(--secondary-color);
        background-color: var(--secondary-transparent-color);
    }
    .bg-sec:hover{
        background-color: var(--secondary-color);
    }

</style>

<article class="config-item {className}" on:click>
    <h3 class="config-item__title">{title}</h3>
    <p class="config-item__desc">{desc}</p>
</article>