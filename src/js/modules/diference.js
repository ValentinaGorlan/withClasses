export default class Difference {
    constructor (Officer,  items) {
        try {
            this.officer = document.querySelector(Officer);
            this.allItems = this.officer.querySelectorAll(items);
            this.counter = 0;
        } catch(e) {}
        
    }
     
    bindTriggers() {
        this.officer.querySelector('.plus').addEventListener('click', () => {
            if (this.counter !== this.allItems.length - 2) {
                this.allItems[this.counter].style.display = 'flex';
                this.allItems[this.counter].classList.add('animated', 'fadeIn');
                this.counter++;
            } else {
                this.allItems[this.counter].style.display = 'flex';
                this.allItems[this.allItems.length - 1].remove();
            }
        });
    }

    hideItems() {
        this.allItems.forEach((item, i, arr) => {
            if ( i !== arr.length -1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems();
            this.bindTriggers();
        } catch(e) {}
    }
    
}