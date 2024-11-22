const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9e6adfc8b6mshe736177f701b195p13af22jsn62eed22b7c04',
        'x-rapidapi-host': 'omdb-api4.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

const fetchMovies = (query) => {
    const url = `https://omdb-api4.p.rapidapi.com/?s=${encodeURIComponent(query)}`;

    return fetch(url, options)
        .then(response => response.json())
        .then(data => data.Search)
        .catch(err => {
            console.error(err);
            return null;
        });
};

export default fetchMovies;