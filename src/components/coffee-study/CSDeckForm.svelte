<script>
    import {createEventDispatcher} from 'svelte';
    import Deck from '../../model/Deck';
    import InputText from '../InputText.svelte';
    import Button from '../Button.svelte';

    const dispatch = createEventDispatcher();
    export let name = "";
    export let desc = "";
</script>

<style>
    .buttons{
        margin-top: 1rem;
    }
</style>
<section>
    <form on:submit|preventDefault="{()=> dispatch('save', new Deck(name, desc))}">
        <InputText id="nome" labelText="Nome do deck" value={name}  
        on:input={(evt)=> name = evt.target.value }/>

        <InputText type="textarea" id="descricao" labelText="Descreva o deck" bind:value={desc}/>

        <div class="buttons">
            <Button evt="cancel" on:cancel modifier="space-right modal rounded">Cancelar</Button>
            <Button type="submit" modifier="modal rounded">Salvar</Button>
        </div>
    </form>
</section>