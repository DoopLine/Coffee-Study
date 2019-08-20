import {
    writable
} from 'svelte/store';
import Persistence from "./Persistence";
const state = writable(Persistence.getState());


const customStateStore = {
    subscribe: state.subscribe,
    selectCurrentDeck: (deckId) => state.update(s => {
        const st = {...s, currentDeckId: deckId};
        Persistence.saveState(st);
        return st;
    })
}

export default customStateStore;