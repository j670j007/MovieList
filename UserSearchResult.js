/* Team 17 - Brisa Andrade, 
* Project 3: MovieList , 581 Software Engineering II, 11.08.2024 -->
* UserSearchResult.js
* This file is made up of all javascript files involved with allowing a user to search through database and display on
* browser monitior.
*/


/*Basic API Info used in order to access movie api*/
const API_KEY = 'api_key=fea48a6957d44b738a88e326a9a710f9';
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
const SEARCH_URL = API_URL +'search/movie?'+API_KEY;

/*Creates url that populates discover page with trending movies*/
const TRENDING_URL = API_URL + 'trending/movie/week?'+API_KEY; 

const userSearch = document.getElementById('searchForm');
const searchBar = document.getElementById('searchingKey');


 
/* Retrieves movies from the TMDB api database and displays them in browser window
* @param url is the url needed to complete the search in the TMDB api
* @return void 
*/

createMovieList(TRENDING_URL);


function createMovieList(url){
fetch(url).then(res => res.json()).then(data => {
    console.log(data);
    displayMovies(data.results);
                                       })
    
}//end createMovieList


/* Displays the movies from TMDB api into browser window
* @param movieList is list of movie data retrieved from TMDB api
* @return void
*/

function displayMovies(movieList){
    document.getElementById('movieCatalog');
    movieCatalog.innerHTML = '';
    
    movieList.forEach(movie => {
        const {title, poster_path, release_date, id} = movie;
        const movieItem = document.createElement('div');

        movieItem.classList.add('movie');
        movieItem.innerHTML = `

        <img src="${IMAGE_URL+poster_path}" alt="${title}">

            <div class="movieInfo">
                <h1>${title}</h1>
                <p>${release_date}</p>
        
        `
        
        movieCatalog.appendChild(movieItem);
        
        
        })//end forEach
    
    
    }//end displayMovies



    /* showFilter() Hides and displays filter colapsible menu
            */
            function showFilters()
            {
                document.getElementById('filterContent');

                if (filterContent.style.display === "block") {
                    filterContent.style.display = "none";
                    }
                else {
                        filterContent.style.display = "block";
                    } 
            } //end showFilters

 
           








