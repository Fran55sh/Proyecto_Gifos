let formNav = document.getElementById('nav-search-form')
let navInput = document.getElementById('search-input-nav')
let searchInput = document.getElementById('searchInput')
let value

// Listener for search input in every html file but index.html.
// save term in localStorage and redirect to index.html for the search
function navSearchListener() {
    formNav.addEventListener('submit', (e) => {
        e.preventDefault()
        value = navInput.value
        localStorage.setItem('searchTerm', value)
        window.location.href = './index.html'
    })
}

/**
 * get term to search from localStorage and execute a function to get search results
 * @param {callback} callback - the function to execute, getSearchResults from index.js
 * @param {number} offset - the offset for the search
 */
function navSearch(callback, offset) {
    let searchTerm = localStorage.getItem('searchTerm')

    if(searchTerm) {
        localStorage.removeItem('searchTerm')
        window.scrollTo(0, 565);
        callback(searchTerm, offset)
        navInput.value = searchTerm
        searchInput.value = searchTerm
    }    
}

export {navSearchListener, navSearch}