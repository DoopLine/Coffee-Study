<script>
    import {createEventDispatcher} from 'svelte';
    import Lesson from '../../model/Lesson';
    import InputText from '../InputText.svelte';
    import Button from '../Button.svelte';

    const dispatch = createEventDispatcher();
    export let currentLesson = null;
    export let front = currentLesson ? currentLesson.front : "";
    export let back = currentLesson ? currentLesson.back : "";

    function onSubmit(){
        if(currentLesson){
            dispatch('edit', new Lesson(front, back));
        }else{
            dispatch('save', new Lesson(front, back));
        }
    }

</script>

<style>
    .buttons{
        margin-top: 1rem;
    }
</style>
<section>
    <form on:submit|preventDefault="{onSubmit}">
        <InputText id="front" type="textarea" labelText="Pergunta"  bind:value={front} />
        <InputText type="textarea" id="back" labelText="Resposta" bind:value={back}/>
        <div class="buttons">
            <Button evt="cancel" on:cancel modifier="space-right modal rounded">Cancelar</Button>
            <Button type="submit" modifier="modal rounded">Salvar</Button>
        </div>
    </form>
</section>