import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';

/* * Global state of the app
    * Search Objects
    * Current Recipe object
    * Shopping list object
    * Liked Recipes
    */
const state = {};

/* Search Controller */

const controlSearch = async () => {
    // * Get query from view:
    const query = searchView.getInput();

    if (query) {
        // New search object and add to state
        state.search = new Search(query);

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);



        // Search for recipes
        await state.search.getResults()

        // render results in UI 
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


/* Recipe Controller */

const r = new Recipe(46956);
r.getRecipe();