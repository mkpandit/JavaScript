/** 
 * Get root DOM and create container
 */

const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

/**
 * Start API request
 */

var request = new XMLHttpRequest()
// Use JSON placeholder API
var url = 'https://jsonplaceholder.typicode.com/posts'
request.open('GET', url, true)

request.onload = function() {
    
    var data = JSON.parse(this.response)
    /**
     * If valid response returned
     * process the data, create
     * DOM element and populate 
     */

    if (request.status >= 200 && request.status < 400) {
        data.forEach(item => {
            // Each item wrapper
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            // Header
            const h3 = document.createElement('h3')
            h3.textContent = item.title
            // Description
            const p = document.createElement('p')
            p.textContent = item.body
            // Add elements to DOM
            container.appendChild(card)
            card.appendChild(h3)
            card.appendChild(p)
        })
    } else {
        /**
         * Handle error
         */
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = 'API not working'
        app.appendChild(errorMessage)
    }
}

request.send()