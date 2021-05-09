export default class Notes {
    constructor() {
        this.notes = [];
        this._subscribers = [];
    }
    
    addNote(title, text, category) {
        let newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.notify();
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
                func(this.notes);
            });
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}