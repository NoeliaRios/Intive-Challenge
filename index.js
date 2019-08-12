const urlApi = `https://randomuser.me/api/?results=10`;
const hName = document.querySelector('.name')

console.log(urlApi);

fetch(urlApi)
    .then(res => res.json())
    .then(data =>{
        const fotoPerfil = data.results.first;
        console.log(fotoPerfil);

        hName.innerHTML = fotoPerfil.map(movie => `<li class="movies_item" id="${movie.id}"><a href=""><div class="movies_poster"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/></div><div class="movies_content"><p class="movies_title">${movie.title}</p></div></a></li>`).join('');;



    })