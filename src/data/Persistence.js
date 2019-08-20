export default class Persistence{

    static cleanStorage(){
        localStorage.clear();
    }
    /**
     * salva o deck no localstorage
     * @param {Deck} decks o deck a ser salvo
     */
    static saveDecks(decks){
        // localStorage.setItem("decks", JSON.stringify(decks));
    }
    
    /**
     * @returns {Array} retorna um array de decks
     */
    static getDecks(){
        const decks = localStorage.getItem('decks');
        return decks ? JSON.parse(decks) : []; 
    }

    /**
     * salva o deck no localstorage
     * @param {Config} config
     */
    static saveConfig(config){
        // localStorage.setItem("config", JSON.stringify(config));
    }

    /**
     * @returns {Array} retorna o objecto de configuração.
     */
    static getConfig(){
        const config = localStorage.getItem('config');
        return config ? JSON.parse(config) : {}; 
    }

    /**
     * salva o state no localstorage
     * @param {state} state
     */
    static saveState(state){
        // localStorage.setItem("state", JSON.stringify(state));
    }

    /**
     * @returns {Array} retorna o objecto de com o state do app.
     */
    static getState(){
        const state = localStorage.getItem('state');
        return state ? JSON.parse(state) : {}; 
    }

    /**
     * @returns {Array} retorna todos objectos do localstorage.
     */
    static getAllStorages(){
        const storages = [];
        for (let i = 0; i < localStorage.length; i++) {
            storages.push(localStorage.getItem(localStorage.key(i)));
        }
        return storages;
    }

    /**
     * restaura os dados do local strorage
     * @param {Array} restoredData Um array com todos os dados do backup
     */
    static restoreAllStorage(restoredData){
        const keys = ['config', 'decks', 'state'];
        for (let i = 0; i < restoredData.length; i++) {
            localStorage.setItem(keys[i], restoredData[i]);
        }
    }
}