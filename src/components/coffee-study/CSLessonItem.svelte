<script>
    import { fade } from 'svelte/transition';
    import Button from '../Button.svelte';
    export let lesson;
</script>

<style>
    article{
        display: flex;
        margin-bottom: 1rem;
        background-color: var(--primary-color);
        padding: 1rem;
        border-radius: 5px;
        width: 100%;
        justify-content: space-between;
    }
    .info> *:not(:last-child){
        margin-bottom: .5rem;
    }
    h4{
        color: var(--tertiary-color);
    }
    .actions{
        display: flex;
        align-items: center;
    }
</style>

<article transition:fade>
    <div class="info">
        <h3>Pergunta: {lesson.front}</h3>
        <h4>Nivel de Aprendizado: {lesson.learnCount}</h4>
        <h4>Resposta:  {lesson.back}</h4>
    </div>
    <div class="actions">
        <Button evt="edit" on:edit modifier="modal rounded">
            <i class="fa fa-pencil-square"></i>
        </Button>
        <Button evt="delete" on:delete modifier="modal rounded space-left">
            <i class="fa fa-trash"></i>
        </Button>
    </div>
</article>