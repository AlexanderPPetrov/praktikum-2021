
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'ca3d69ee336e43d8099727f0d7ce3859';
const imageBaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';


function getMovies(params = {}) {

    const data = {...params, api_key: apiKey}
    const route = 'discover/movie';
    $.ajax({
        method: "GET",
        url: `${baseUrl}${route}`,
        data,
    })
    .done(response => {
        renderMovieList(response.results);
    })
    .fail(response => {
        console.log(response);
    })
    .always(() => {
        console.log('ajax completed');
    })
}

function renderMovieList(movies = []){
    $movieList = $('#movie-list');
    $movieList.empty();
    movies.forEach(movie => {
        const $template = getMovieTemplate(movie);
        $movieList.append($template);
    })
}

function getMovieTemplate(movie){
    const $template = $($('#movie-template').html());
    $template.find('.movie-title').text(movie.title);
    $template.find('.movie-poster').attr('src', `${imageBaseUrl}${movie.poster_path}`);
    
    const date = moment(movie.release_date).format('MMM Do YY');
    $template.find('.movie-release-date').text(date);
    $template.find('.movie-overview').text(movie.overview);
    $template.find('.movie-vote').text(movie.vote_average);
    return $template;
}

$('#get-movies').click(()=> {
    // Get selected year
    const year = $('#filter-year').val();

    // Get genres from checked checkboxes
    const genres = [];
    $('.genre-checkbox:checked').each((index, el) => {
        genres.push(el.value);
    })
    const with_genres = genres.join();

    getMovies({
        year,
        with_genres,
    })
})

getMovies({
    year: 2021,
})