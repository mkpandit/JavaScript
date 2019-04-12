/** 
 * Get root DOM and create container
 */

const app = document.getElementById('root')
const container = document.getElementById('container')

const divList = container.getElementsByClassName('box')

for (let item of divList) {

    item.style.backgroundColor = getRandomColor()
    item.innerHTML = -1
    item.addEventListener(
        'click',
        (e) => {
            if (-1 == this.innerHTML) {
                this.innerHTML = 'O'
                let secondElem = document.getElementsByClassName(`d-${getRandomInt(0, 9)}`)
                console.log(item)
                console.log(secondElem[0])
                secondElem[0].innerHTML = 'X'
            }
        },
        false
    )
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}