export default class Difference {
    constructor (Officer,  items) {
        this.Officer = document.querySelector(Officer);
        this.items = items;
    }

    hideItems() {
        this.Officer.querySelectorAll(this.items).forEach((item, i, arr) => {
            if ( i !== arr.length -1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        this.hideItems();
    }
    
}