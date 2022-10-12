const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0dfa63446msh4112f569f368f70p187009jsnbfc26509ad70',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=games', options)
	.then(response => response.json())
  .then(data => {
    const list = data.d
    list.map((item) => {
      const name = item.l
      const poster = item.i.imageUrl
      const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
      document.querySelector('.movies').innerHTML += movie
    })
  })
	.catch(err => console.error(err));


