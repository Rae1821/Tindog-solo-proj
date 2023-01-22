// Remember to import the data and Dog class!

import Dog from './Dog.js'
import dogsData from './data.js'

const likeBtn = document.getElementById('heart-btn');
const nopeBtn = document.getElementById('cross-btn');

function getNewDog() {
    const newDogData = dogsData.shift();
    return newDogData ? new Dog(newDogData) : false;

}

let dog = getNewDog()

function render() {
    document.getElementById('dog').innerHTML = dog.getDogHtml();
}
render();

let isWaiting = false;


const endMessage = `
    <div class="end-message">
    <p>Stay tuned for more dogs! 🐶</p>
    </div>     
`

nopeBtn.addEventListener('click', function() {
    if(!isWaiting) {
        dog = getNewDog()
        document.getElementById('nope-badge').classList.remove('hidden');
        isWaiting = true;
        if(dog) {
            setTimeout(() => {
                render();
                document.getElementById('nope-badge').classList.add('hidden');
                isWaiting = false;

            }, 1500);
        } else {
            setTimeout(() => {
                document.getElementById('nope-badge').classList.add('hidden');
                document.getElementById('main').innerHTML = endMessage;
            }, 1500);
        }
    }   
})



likeBtn.addEventListener('click', function() {
    if(!isWaiting) {
        dog = getNewDog();
        document.getElementById('like-badge').classList.remove('hidden');
        isWaiting = true;
            if(dog) {
                setTimeout(() => {
                    render()
                    document.getElementById('like-badge').classList.add('hidden');
                    isWaiting = false
                }, 1500);
            } else {
                setTimeout(() => {
                    document.getElementById('like-badge').classList.add('hidden');
                    document.getElementById('main').innerHTML = endMessage
                }, 1500);
            }
    }
})

