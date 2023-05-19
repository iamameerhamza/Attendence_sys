// JavaScript code

function changeColor() {

    var box = document.querySelector('.box');

    box.style.backgroundColor = getRandomColor();

}

function getRandomColor() {

    var letters = '0123456789ABCDEF';

    var color = '#';

    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

function toggleVisibility() {

    var box = document.querySelector('.box');

    box.classList.toggle('hidden');

}

function displayGreeting() {

    var nameInput = document.getElementById('nameInput');

    var greeting = document.getElementById('greeting');

    var name = nameInput.value;

    if (name.trim() !== '') {

        greeting.textContent = 'Hello, ' + name + '!';

    } else {

        greeting.textContent = 'Please enter a valid name.';

    }

    nameInput.value = '';

}

function displayCurrentTime() {

    var time = new Date().toLocaleTimeString();

    var currentTime = document.getElementById('currentTime');

    currentTime.textContent = 'Current Time: ' + time;

}

// Update time every second

setInterval(displayCurrentTime, 1000);

// JavaScript code
function changeColor() {
    var box = document.querySelector('.box');
    box.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleVisibility() {
    var box = document.querySelector('.box');
    box.classList.toggle('hidden');
}

function displayGreeting() {
    var nameInput = document.getElementById('nameInput');
    var greeting = document.getElementById('greeting');

    var name = nameInput.value;
    if (name.trim() !== '') {
        greeting.textContent = 'Hello, ' + name + '!';
    } else {
        greeting.textContent = 'Please enter a valid name.';
    }
    nameInput.value = '';
}

function displayCurrentTime() {
    var time = new Date().toLocaleTimeString();
    var currentTime = document.getElementById('currentTime');
    currentTime.textContent = 'Current Time: ' + time;
}

// Update time every second
setInterval(displayCurrentTime, 1000);
