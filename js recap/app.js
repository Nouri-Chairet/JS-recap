import fetchMovies from './utils/fetchMovies.js';

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('search').value.trim();
    if (!query) return alert("Please enter a movie name!");

    try {
        const movies = await fetchMovies(query);
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        if (movies.length === 0) {
            resultsDiv.innerHTML = '<p>No movies found.</p>';
            return;
        }
        console.log(movies)
        let sortedMovies=movies.sort((a, b) => b.Year - a.Year);
        sortedMovies.forEach(movie => {
            const movieElement = `
                <div class="movie">
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}" />
                    <h2>${movie.Title}</h2>
                    <p>${movie.Year}</p>
                    <p>Rating: ${movie.imdbRating}</p>
                </div>
            `;
            resultsDiv.innerHTML += movieElement;
        });
    } catch (error) {
        console.error(error);
        alert("Failed to fetch movies. Please try again later.");
    }
});
