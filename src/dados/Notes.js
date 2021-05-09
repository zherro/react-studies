export default class Notes {
    constructor() {
        this.notes = [];
        this._subscribers = [];
    }
    
    addNote(title, text, category) {
        let newNote = new Note(title, text, category);
        this.notes.push(newNote);
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
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
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}