import {
    writable
} from 'svelte/store';

// import Deck from "../model/Deck";
// import Lesson from "../model/Lesson";
import Persistence from "./Persistence";

const decks = writable(Persistence.getDecks());


const customDecksStore = {
    subscribe: decks.subscribe,
    addDeck: (deck) => decks.update(allDecks => {
        const newDecks = [deck, ...allDecks];
        Persistence.saveDecks(newDecks);
        return newDecks;
    }),
    deleteDeck: (id) =>decks.update(allDecks => {
        const newDecks = allDecks.filter(d => d.id !== id);
        Persistence.saveDecks(newDecks);
        return newDecks;
    }),
    editDeck: (deck) => decks.update(allDecks => {
        const allDecksWorking = [...allDecks];
        const deckIndex = allDecksWorking.findIndex(d => d.id === deck.id);
        allDecksWorking.splice(deckIndex, 1, deck);
        Persistence.saveDecks(allDecksWorking);
        return allDecksWorking;
    }),
    //*----------------->
    //*Lessons methods-->
    //*----------------->
    addLesson: (currentDeck, lesson) => decks.update(allDecks => {
        currentDeck.lessons.push(lesson);
        Persistence.saveDecks(allDecks);
        return allDecks;
    }),
    editLesson: (currentDeck, lesson) => decks.update(allDecks => {
        const lessonIndex = currentDeck.lessons.findIndex(l => l.id === lesson.id);
        currentDeck.lessons.splice(lessonIndex, 1, lesson);
        Persistence.saveDecks(allDecks);
        return allDecks;
    }),
    deleteLesson: (currentDeck, lessonId) => decks.update(allDecks => {
        currentDeck.lessons = currentDeck.lessons.filter(l => l.id !== lessonId);
        Persistence.saveDecks(allDecks);
        return allDecks;
    }),
    updateLearnCount: (deck, arrWillUpdateLessons) => decks.update(allDecks => {
        const allDecksWorking = [...allDecks];
        const deckIndex = allDecksWorking.findIndex(d => d.id === deck.id);
        arrWillUpdateLessons.forEach(upLesson => {
            allDecksWorking[deckIndex].lessons.find(l => l.id === upLesson.id).learnCount += upLesson.learnCount;
        });
        //Update Sessão de estudos
        allDecksWorking[deckIndex].studyCount ++;
        Persistence.saveDecks(allDecksWorking);
        return allDecksWorking;
    })
}
// reqDeck();
export default customDecksStore;