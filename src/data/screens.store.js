import {
    writable
} from 'svelte/store';

const screen = writable({
    current: 'home',
    screensStack: [],
    data: undefined
});

const customScreensStore = {
    subscribe: screen.subscribe,
    goTo: (screenName, screenData) => {
        screen.update(s => ({
            ...s, 
            current: screenName,
            data: screenData? screenData : undefined 
        }));
    }
}

export default customScreensStore;