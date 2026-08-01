console.log("Welcome to the Community Portal");
// Class and objects
class Event {
    constructor(name, seats) { this.name = name; this.seats = seats; }
    checkAvailability() { return this.seats > 0; }
}
const events = [new Event("Music", 50), new Event("Art", 0)];

// Array methods & DOM
document.addEventListener("DOMContentLoaded", () => {
    const available = events.filter(e => e.checkAvailability());
    console.log("Available:", available.map(e => e.name));
});

// Async Fetch
async function loadEvents() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await res.json();
        console.log("Fetched:", data);
    } catch(err) { console.error(err); }
}
loadEvents();
