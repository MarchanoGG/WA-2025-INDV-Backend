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


// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});