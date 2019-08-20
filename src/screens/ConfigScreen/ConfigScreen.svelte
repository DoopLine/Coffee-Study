<script>
    const { ipcRenderer } = require('electron');
    import { onDestroy } from "svelte";
    //*Stores
    import configStore  from "../../data/config.store";
    import Persistence  from "../../data/Persistence";
    //*Components
    import CSConfigItem from '../../components/coffee-study/CSConfigItem.svelte';
    import Modal from '../../components/Modal.svelte';
    import InputText from '../../components/InputText.svelte';
    import Button from '../../components/Button.svelte';
    import HexDotsLoading from '../../components/HexDotsLoading.svelte';
    import Popup from '../../components/Popup.svelte';
    import RestoreData from './RestoreData.svelte';


    let metaModalState = false;
    let isPopupAlertOpened = false;
    let isPopupAlertOpened2 = false; 
    let isPopupSelectionOpened = false;
    let isRestoreDataModalOpened = false;

    let popupAlert = {
        content: '',
        title: ''
    };
    let temp ={
        metaDiaria: null
    };

    let config = {};
    const unsubscribe = configStore.subscribe( cf => config = cf);
    onDestroy(()=> unsubscribe());

    function makeBackup() {
        const storages = Persistence.getAllStorages();
        if(!storages.length) return;
        const saved = ipcRenderer.sendSync('config:backup', JSON.stringify(storages));
        if(saved){
            popupAlert = {
                content: 'O backup foi concluido com sucesso',
                title: 'Concluido com sucesso'
            };
        }else{
            popupAlert = {
                content: 'Erro ao fazer o backup',
                title: 'Ocorreu algum erro ao realizar o backup!'
            };
        }
        isPopupAlertOpened = true;
    };

    function clearAll(){
        popupAlert = {
            content: 'Antes de continuar certifique-se que realizou um backup.',
            title: 'Tem certeza?'
        };
        isPopupSelectionOpened = true;
    }

    function cleanStorage(){
        Persistence.cleanStorage();
        isPopupSelectionOpened = false;
        popupAlert = {
            content: 'Tudo foi reposto ao estado inicial.',
            title: 'Limpeza concluida'
        };
        isPopupAlertOpened2 = true;
    }

    const closeApp = () => ipcRenderer.send('win:actionBar', 'clo');

    function closeMetaModal(){
        temp.metaDiaria = null;
        metaModalState = false;
    }
    function updateMetaDiaria(){
        if(temp.metaDiaria && temp.metaDiaria !== config.metaDiaria){
            configStore.updateMetaDiaria(parseInt(temp.metaDiaria));
            temp.metaDiaria = null;
        }
        metaModalState = false;
    }

</script>

<style>
    section{
        height: 100vh;
        padding: 2rem;
        padding-top: 4rem;
    }

    /* .backdrop{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(32, 33, 36, .7);
        z-index: 9;
        transition: all .3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    .buttons{
        margin-top: 1rem;
    }
    
</style>


<!-- {#if loading}
    <div class="backdrop">
        <HexDotsLoading/>
    </div>
{/if} -->

<section>
    <CSConfigItem title="Meta diária" desc="A sua meta diaria é de {config.metaDiaria} lesson(s)"
    on:click={()=> metaModalState = true}/>

    <CSConfigItem title="Fazer backup local (offline)" 
    desc="Não esqueça de realizar backups frequentemente."
    on:click={makeBackup}/>

    <CSConfigItem title="Restaurar apartir do backup local (offline)" 
    desc="Selecione um dos seus backups para restaurar"
    on:click={()=> isRestoreDataModalOpened = true}/>

    <CSConfigItem title="Apagar tudo e voltar ao estado inicial" 
    desc="Todos os decks e configurações serão apagados permanentemente."
    on:click={clearAll}/>
</section>

<!-- Modals -->
{#if metaModalState}
    <Modal on:closemodal={closeMetaModal} title="Defina a sua meta">
        <InputText id="nome" labelText="Meta diária" value={config.metaDiaria}  
        on:input={(evt)=> temp.metaDiaria = evt.target.value }/>
        <div class="buttons">
            <Button evt="cancel" on:cancel={closeMetaModal} modifier="space-right modal rounded">Cancelar</Button>
            <Button evt="save" on:save={updateMetaDiaria} modifier="modal rounded">Salvar</Button>
        </div>
    </Modal>
{/if}

<!-- Restore data modal -->
{#if isRestoreDataModalOpened}
    <RestoreData  
        on:cancel={()=> isRestoreDataModalOpened = false}
        on:closemodal={()=> isRestoreDataModalOpened = false}
    />
{/if}

<!-- popup alert -->
{#if isPopupAlertOpened}
    <Popup content={popupAlert.content} title={popupAlert.title} 
    on:closepopup={()=> isPopupAlertOpened = false}>
        <Button modifier="modal rounded" evt="finish" on:finish={()=> isPopupAlertOpened = false}>OK</Button>
    </Popup>
{/if}

{#if isPopupAlertOpened2}
    <Popup content={popupAlert.content} title={popupAlert.title} 
    on:closepopup={closeApp}>
        <Button modifier="modal rounded" evt="finish" on:finish={closeApp}>OK</Button>
    </Popup>
{/if}

{#if isPopupSelectionOpened}
    <Popup content={popupAlert.content} title={popupAlert.title} 
    on:closepopup={()=> isPopupSelectionOpened = false}>
        <Button modifier="modal rounded" evt="finish" on:finish={()=> isPopupSelectionOpened = false}>Não</Button>
        <Button modifier="modal rounded space-left" evt="finish" on:finish={cleanStorage}>Sim</Button>
    </Popup>
{/if}