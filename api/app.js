const express = require('express');
const cors = require('cors'); // Alvast voor opdracht 10
const app = express();
const port = 3000; // Start de server op poort 3000 (net zoals je Java-server, dan hoef ik niks te veranderen)

app.use(express.json());
app.use(cors());

/*
    Hardcoded book JS Array. Het was niet nodig om een database te gebruiken voor deze opdracht volgens de opdracht:
    "Voor deze opdracht een hard-coded implementatie van je data is voldoende (de data wordt 
    nog niet persistent opgeslagen in een database)." 
*/
let books = [
    { id: 1, title: "Broken Stars", author: "Ken Liu", image: "broken_stars.jpg", rating: 4.5 },
    { id: 2, title: "Children of Dune", author: "Frank Herbert", image: "dune_3.jpg", rating: 3.5 },
    { id: 3, title: "Children of Time", author: "Adrian Tchaikovsky", image: "children_of_time.jpg", rating: 1 },
    { id: 4, title: "Death's End", author: "Cixin Liu", image: "deaths_end.jpg", rating: 5 },
    { id: 5, title: "Dune", author: "Frank Herbert", image: "dune_1.jpg", rating: 4 },
    { id: 6, title: "Dune Messiah", author: "Frank Herbert", image: "dune_2.jpg", rating: 3.5 },
    { id: 7, title: "False Gods", author: "Graham McNeill", image: "false_gods.jpg", rating: 4 },
    { id: 8, title: "Galaxy in Flames", author: "Ben Counter", image: "galaxe_in_flames.jpg", rating: 3.5 },
    { id: 9, title: "Horus Rising", author: "Dan Abnett", image: "horus_rising.jpg", rating: 4.5 },
    { id: 10, title: "Project Hail Mary", author: "Andy Weir", image: "project_hail_mary.jpg", rating: 3 },
    { id: 11, title: "The Dark Forest", author: "Cixin Liu", image: "the_dark_forest.jpg", rating: 5 },
    { id: 12, title: "The Flight of the Eisenstein", author: "James Swallow", image: "the_flight_of_eisenstein.jpg", rating: 2 },
    { id: 13, title: "The Redemption of Time", author: "Baoshu", image: "the_redemption_of_time.jpg", rating: 4.5 },
    { id: 14, title: "The Supernova Era", author: "Cixin Liu", image: "the_supernova_era.jpg", rating: 3 },
    { id: 16, title: "The Space Between Worlds", author: "Micaiah Johnson", image: "the_space_between_worlds.jpg", rating: 4 }
];

// === GET ===

// GET /books: Alle boeken ophalen
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// GET /books/{id} Een specifieke boek ophalen
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});


// === POST ===

// POST /books: Een nieuw boek toevoegen
app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});


// === PUT ===

// PUT /books/{id} Een bestaand boek bijwerken
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookId);
    if (index !== -1) {
        books[index] = req.body;
        res.status(200).json(books[index]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});


// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});