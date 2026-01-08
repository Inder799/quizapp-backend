import { v4 as uuid } from "uuid";

export const quizzes = {
  data: [
    // ========================= MARVEL =========================
    {
      id: uuid(),
      category: "marvel",
      image:
        "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1280&q=80",
      title: "Marvel Cinematic Universe",
      description: "Test your knowledge of Marvel movies and characters.",
      quiz: [
        {
          id: uuid(),
          question: "Black Panther is set in which fictional country?",
          options: [
            { id: uuid(), options: "Wakanda", isCorrect: true },
            { id: uuid(), options: "Genosha", isCorrect: false },
            { id: uuid(), options: "Latveria", isCorrect: false },
            { id: uuid(), options: "Sokovia", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who rescued Tony Stark and Nebula from space?",
          options: [
            { id: uuid(), options: "Captain Marvel", isCorrect: true },
            { id: uuid(), options: "Thor", isCorrect: false },
            { id: uuid(), options: "Nick Fury", isCorrect: false },
            { id: uuid(), options: "Rocket", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the name of Thor’s hammer?",
          options: [
            { id: uuid(), options: "Mjolnir", isCorrect: true },
            { id: uuid(), options: "Stormbreaker", isCorrect: false },
            { id: uuid(), options: "Gungnir", isCorrect: false },
            { id: uuid(), options: "Aegis", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Which Infinity Stone does Vision have?",
          options: [
            { id: uuid(), options: "Mind Stone", isCorrect: true },
            { id: uuid(), options: "Time Stone", isCorrect: false },
            { id: uuid(), options: "Reality Stone", isCorrect: false },
            { id: uuid(), options: "Power Stone", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who is the Winter Soldier?",
          options: [
            { id: uuid(), options: "Bucky Barnes", isCorrect: true },
            { id: uuid(), options: "Sam Wilson", isCorrect: false },
            { id: uuid(), options: "Clint Barton", isCorrect: false },
            { id: uuid(), options: "Scott Lang", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Which movie introduced Spider-Man to the MCU?",
          options: [
            {
              id: uuid(),
              options: "Captain America: Civil War",
              isCorrect: true,
            },
            { id: uuid(), options: "Spider-Man: Homecoming", isCorrect: false },
            {
              id: uuid(),
              options: "Avengers: Age of Ultron",
              isCorrect: false,
            },
            { id: uuid(), options: "Iron Man 3", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who killed Thanos in Avengers: Endgame?",
          options: [
            { id: uuid(), options: "Thor", isCorrect: true },
            { id: uuid(), options: "Iron Man", isCorrect: false },
            { id: uuid(), options: "Captain America", isCorrect: false },
            { id: uuid(), options: "Hulk", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What race is Loki?",
          options: [
            { id: uuid(), options: "Frost Giant", isCorrect: true },
            { id: uuid(), options: "Asgardian", isCorrect: false },
            { id: uuid(), options: "Eternal", isCorrect: false },
            { id: uuid(), options: "Celestial", isCorrect: false },
          ],
        },
      ],
    },

    // ========================= JAVASCRIPT =========================
    {
      id: uuid(),
      category: "javascript",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1280&q=80",
      title: "JavaScript Mastery",
      description: "Core JavaScript concepts for developers.",
      quiz: [
        {
          id: uuid(),
          question: "Which keyword creates a block-scoped variable?",
          options: [
            { id: uuid(), options: "let", isCorrect: true },
            { id: uuid(), options: "var", isCorrect: false },
            { id: uuid(), options: "static", isCorrect: false },
            { id: uuid(), options: "define", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What does Array.prototype.filter() return?",
          options: [
            { id: uuid(), options: "New array", isCorrect: true },
            { id: uuid(), options: "Boolean", isCorrect: false },
            { id: uuid(), options: "Object", isCorrect: false },
            { id: uuid(), options: "Index", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is a closure?",
          options: [
            {
              id: uuid(),
              options: "Function with preserved scope",
              isCorrect: true,
            },
            { id: uuid(), options: "Global variable", isCorrect: false },
            { id: uuid(), options: "Async function", isCorrect: false },
            { id: uuid(), options: "Promise handler", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Which method converts JSON to object?",
          options: [
            { id: uuid(), options: "JSON.parse()", isCorrect: true },
            { id: uuid(), options: "JSON.stringify()", isCorrect: false },
            { id: uuid(), options: "Object.parse()", isCorrect: false },
            { id: uuid(), options: "parse.JSON()", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What will typeof NaN return?",
          options: [
            { id: uuid(), options: "number", isCorrect: true },
            { id: uuid(), options: "NaN", isCorrect: false },
            { id: uuid(), options: "undefined", isCorrect: false },
            { id: uuid(), options: "object", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Which loop is best for iterating arrays?",
          options: [
            { id: uuid(), options: "forEach", isCorrect: true },
            { id: uuid(), options: "while", isCorrect: false },
            { id: uuid(), options: "do-while", isCorrect: false },
            { id: uuid(), options: "switch", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What does event.preventDefault() do?",
          options: [
            {
              id: uuid(),
              options: "Stops default browser behavior",
              isCorrect: true,
            },
            { id: uuid(), options: "Stops propagation", isCorrect: false },
            { id: uuid(), options: "Refreshes page", isCorrect: false },
            { id: uuid(), options: "Cancels promise", isCorrect: false },
          ],
        },
      ],
    },

    // ========================= SCIENCE =========================
    {
      id: uuid(),
      category: "science",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1280&q=80",
      title: "General Science",
      description: "Physics, chemistry and biology fundamentals.",
      quiz: [
        {
          id: uuid(),
          question: "What is the hardest natural substance?",
          options: [
            { id: uuid(), options: "Diamond", isCorrect: true },
            { id: uuid(), options: "Gold", isCorrect: false },
            { id: uuid(), options: "Iron", isCorrect: false },
            { id: uuid(), options: "Quartz", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Which organ purifies blood?",
          options: [
            { id: uuid(), options: "Kidney", isCorrect: true },
            { id: uuid(), options: "Heart", isCorrect: false },
            { id: uuid(), options: "Liver", isCorrect: false },
            { id: uuid(), options: "Lungs", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Speed of light is approximately?",
          options: [
            { id: uuid(), options: "300,000 km/s", isCorrect: true },
            { id: uuid(), options: "150,000 km/s", isCorrect: false },
            { id: uuid(), options: "1,000 km/s", isCorrect: false },
            { id: uuid(), options: "30,000 km/s", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Water boils at what temperature (°C)?",
          options: [
            { id: uuid(), options: "100", isCorrect: true },
            { id: uuid(), options: "90", isCorrect: false },
            { id: uuid(), options: "80", isCorrect: false },
            { id: uuid(), options: "120", isCorrect: false },
          ],
        },
      ],
    },

    // ========================= SPACE =========================
    {
      id: uuid(),
      category: "space",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1280&q=80",
      title: "Space & Cosmos",
      description: "Explore planets, stars, and galaxies.",
      quiz: [
        {
          id: uuid(),
          question: "Which planet is closest to the Sun?",
          options: [
            { id: uuid(), options: "Mercury", isCorrect: true },
            { id: uuid(), options: "Venus", isCorrect: false },
            { id: uuid(), options: "Earth", isCorrect: false },
            { id: uuid(), options: "Mars", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the largest planet?",
          options: [
            { id: uuid(), options: "Jupiter", isCorrect: true },
            { id: uuid(), options: "Saturn", isCorrect: false },
            { id: uuid(), options: "Neptune", isCorrect: false },
            { id: uuid(), options: "Earth", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who was the first human in space?",
          options: [
            { id: uuid(), options: "Yuri Gagarin", isCorrect: true },
            { id: uuid(), options: "Neil Armstrong", isCorrect: false },
            { id: uuid(), options: "Buzz Aldrin", isCorrect: false },
            { id: uuid(), options: "Alan Shepard", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is a supernova?",
          options: [
            { id: uuid(), options: "Explosion of a star", isCorrect: true },
            { id: uuid(), options: "Birth of a planet", isCorrect: false },
            { id: uuid(), options: "Black hole collision", isCorrect: false },
            { id: uuid(), options: "Asteroid impact", isCorrect: false },
          ],
        },
      ],
    },
  ],
};
