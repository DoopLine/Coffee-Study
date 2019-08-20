<script>
	import { onDestroy } from "svelte";
	//*Stores
	import screensStore from './data/screens.store.js';
	import stateStore from './data/state.store';
	//*Screens
	import HomeScreen from "./screens/HomeScreen.svelte";
	import DecksScreen from "./screens/DecksScreen.svelte";
	import DeckDetailScreen from "./screens/DeckDetailScreen.svelte";
	import LessonsScreen from "./screens/LessonsScreen/LessonsScreen.svelte";
	import StudyScreen from "./screens/StudyScreen.svelte";
	import ConfigScreen from "./screens/ConfigScreen/ConfigScreen.svelte";
	import AboutScreen from "./screens/AboutScreen.svelte";
	//--------
	//*Components
	import WindowBar from "./components/WindowBar.svelte";
	import SideBar from "./components/SideBar.svelte"; 
	import Popup from "./components/Popup.svelte"; 
	import Button from "./components/Button.svelte"; 
	//-----------
	let sideBarState = false;
	let popupState = true;
	let turnDark = false;
	let currentScreen = {};
	let currentDeckId = "";


	const unsubscribe = screensStore.subscribe( screen => currentScreen = screen);
	const unsubscribeStateStore = stateStore.subscribe( state => currentDeckId = state.currentDeckId);
	
	function closeSideBar(){
		sideBarState = false;
	}
	function openSideBar(){
		sideBarState = true;
	}

	function backToHome(){
		popupState = false;
		screensStore.goTo('decks');
		popupState = true;
	} 
	function turningDark(scroll){
		if(scroll.detail > 0 && turnDark === false) turnDark = true;
        if(scroll.detail <= 0) turnDark = false;
	}
	
	onDestroy(()=>{
		unsubscribe();
		unsubscribeStateStore();
	});
</script> 


{#if sideBarState} 
	<SideBar on:closesidebar={closeSideBar}/>
{/if}
<WindowBar on:opensidebar={openSideBar} {turnDark} ></WindowBar>
{#if currentScreen.current === 'home'}
	<HomeScreen />
{:else if currentScreen.current === 'decks'}
	<DecksScreen on:turndark={turningDark} />
{:else if currentScreen.current === 'config'}
	<ConfigScreen />
{:else if currentScreen.current === 'details'}
	<DeckDetailScreen currentDeckId={currentScreen.data}  />
{:else if currentScreen.current === 'about'}
	<AboutScreen  />
{:else if currentScreen.current === 'study' && currentDeckId ? currentDeckId : false}
	<StudyScreen {currentDeckId} />
{:else if currentScreen.current === 'lessons' && currentDeckId ? currentDeckId : false}
	<LessonsScreen {currentDeckId} on:turndark={turningDark} 
	on:destroy={()=> turnDark = false}/>
{:else}
	{#if popupState}
		<Popup on:closepopup={backToHome} 
		title="Selecione um deck!!" 
		content="Precisa selecionar um deck primeiro para continuar">
			<Button evt="closepopup" on:closepopup={backToHome}>Ok</Button>
		</Popup>
	{/if}
{/if}