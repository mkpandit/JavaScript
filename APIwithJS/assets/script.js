var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(request.status)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie.title)
            console.log(movie.description)
        })
    } else {
        console.log('Error')
    }
}

request.send()