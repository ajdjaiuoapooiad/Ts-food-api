class Score { }
class Food { 
    constructor(public element: HTMLDivElement){
        element.addEventListener('click',this.clickEventHandler)
    }
    clickEventHandler(){
        this.element.classList.toggle('food--active')
    }
}
class Foods { 
    elements = document.querySelectorAll<HTMLDivElement>('.food')
    constructor(){
        this.elements.forEach(element => {

        })
    }
}

const foods = new Foods()
