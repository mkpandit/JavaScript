/** 
 * Get root DOM and create container
 */

const app = document.getElementById('root')
const container = document.getElementById('container')

const divList = container.getElementsByClassName('box')

for (let item of divList) {

    item.style.backgroundColor = getRandomColor()
    item.innerHTML = -1 //getRandomInt(0, 9)
    item.addEventListener(
        'click',
        function(e) {
            if (-1 == item.innerHTML) {
                setItemValu(item)
                let secondElem = document.getElementsByClassName('d-'+getRandomInt(0, 9))
                console.log(item)
                console.log(secondElem[0])
                setItemValu(secondElem[0])
            }
        },
        false
    )
}

function setItemValu(item) {
    item.innerHTML = getRandomInt(0, 9)
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