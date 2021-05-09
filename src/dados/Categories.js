export default class Categories {
    constructor() {
        this.categories = [];
        this._subscribers = [];
    }

    unsubscribe(func) {
        this._subscribers = this._subscribers.filter( f => f !== func);
    }

    subscribe(func) {
        this._subscribers.push(func);
    }

    notify() {
        this._subscribers.forEach(
            func => {
                func(this.categories);
            });
    }
    
    addCategory(category) {
        this.categories.push(category);
        this.notify();
    }


}