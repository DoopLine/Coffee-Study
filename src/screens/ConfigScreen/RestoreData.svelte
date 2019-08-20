<script>
    //electron
        const { ipcRenderer } = require('electron');
    //--------
    import Persistence  from "../../data/Persistence";
    //Componets
    import Modal from "../../components/Modal.svelte";
    import Popup from "../../components/Popup.svelte";
    import InputText from "../../components/InputText.svelte";
    import Button from "../../components/Button.svelte";
    import CSConfigItem  from "../../components/coffee-study/CSConfigItem.svelte";

    let popupAlert = {
            content: '',
            title: ''
    };

    let isRestoredDataAlertOpened = false;

    const backups = ipcRenderer.sendSync('config:get-backups');

    function restoreData(fileName) {
        const data = ipcRenderer.sendSync('config:restore', fileName);
        if(!data) return;
        Persistence.restoreAllStorage(JSON.parse(data));
        popupAlert = {
            content: 'Os dados foram restaurados com sucesso!',
            title: 'Restauração concluida'
        };
        isRestoredDataAlertOpened = true;
    }

    function closeApp() {
        ipcRenderer.send('win:actionBar', 'clo');
    }
</script>

<style>
    .list{
        overflow: hidden;
        overflow-y: overlay;
        padding-right: 1rem;
    }
    .buttons{
        margin-top: .5rem;
    }
</style>


<Modal on:closemodal title="Restaurar Backup">
    <div class="list">
        {#each backups as bcp}
            <CSConfigItem title={bcp} 
            on:click={()=> restoreData(bcp)} className="bg-sec"/>
        {:else}
            <CSConfigItem title="Sem backups feitos" className="bg-sec"/>
        {/each}
    </div>
    <div class="buttons">
        <Button evt="cancel" on:cancel modifier="space-right modal rounded">Cancelar</Button>
    </div>
</Modal>

<!-- popup alert -->
{#if isRestoredDataAlertOpened}
    <Popup content={popupAlert.content} title={popupAlert.title} 
    on:closepopup={()=> isRestoredDataAlertOpened}>
        <Button modifier="modal rounded" evt="finish" on:finish={closeApp}>OK</Button>
    </Popup>
{/if}