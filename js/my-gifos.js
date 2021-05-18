// import modules
import {changeHeader} from './modules/header.js'
import {buttonDarkMode, toggleDarkMode} from './modules/dark-mode.js'
import {renderCard} from './modules/card.js'
import {getTrendingGifs, listenerButtons} from './modules/slider.js'
import {navSearchListener} from './modules/nav-search.js'
import {renderStorage} from './modules/render-storage.js'

let myGifosList = document.getElementById('my-gifs-list')

// Listener scroll for change header
window.addEventListener('scroll', changeHeader);
    
// Listener for dark mode button
buttonDarkMode.addEventListener('click', toggleDarkMode)

// Listener for slider buttons imported from slider.js
listenerButtons()

// Listener for nav input imported from nav-search.js
navSearchListener()

// render gifos from local storage imported from render-storage.js
renderStorage('myGifos', myGifosList, 'myGifo', renderCard)

// get and render trending gifs imported from slider.js
getTrendingGifs(renderCard)