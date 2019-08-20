import {
    writable
} from 'svelte/store';

// import Deck from "../model/Deck";
// import Lesson from "../model/Lesson";
import Persistence from "./Persistence";

// const fs = require('fs');

// Não apagar este codigo;
// function reqDeck() {
//     const deck = JSON.parse(fs.readFileSync('ingles.txt'));
//     const newDeck = new Deck(deck.info._nome, deck.info._descricao);
//     deck.lessons.forEach(l => {
//         const newLesson = new Lesson(l.sentence, l.resposta);
//         newLesson.setLearnCount(l.learnCount);
//         customDecksStore.addLesson(newDeck, newLesson);
//     });
// }

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
    addLesson: (deckIndex, deck, lesson) => decks.update(allDecks => {
        deck.lessons.push(lesson);
        allDecks.splice(deckIndex, 1, deck);
        Persistence.saveDecks(allDecks);
        return allDecks;
    }),
    editLesson: (deck, lesson) => decks.update(allDecks => {
        const allDecksWorking = [...allDecks];
        const deckIndex = allDecksWorking.findIndex(d => d.id === deck.id);
        const lessonIndex = deck.lessons.findIndex(l => l.id === lesson.id);
        deck.lessons.splice(lessonIndex, 1, lesson);
        allDecksWorking.splice(deckIndex, 1, deck);
        Persistence.saveDecks(allDecksWorking);
        return allDecksWorking;
    }),
    deleteLesson: (deck, id) => decks.update(allDecks => {
        const allDecksWorking = [...allDecks];
        const deckIndex = allDecksWorking.findIndex(d => d.id === deck.id);
        deck.lessons = deck.lessons.filter(l => l.id !== id);
        allDecksWorking.splice(deckIndex, 1, deck);
        Persistence.saveDecks(allDecksWorking);
        return allDecksWorking;
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