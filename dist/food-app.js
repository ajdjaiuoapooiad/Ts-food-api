"use strict";
class Score {
}
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler);
    }
    clickEventHandler() {
        this.element.classList.toggle('food--active');
    }
}
class Foods {
    constructor() {
        this.elements = document.querySelectorAll('.food');
        this.elements.forEach(element => {
        });
    }
}
const foods = new Foods();