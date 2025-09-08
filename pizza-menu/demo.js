let books = [
  {
    id: 1,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publicationYear: 1979,
    genres: ["Science Fiction", "Comedy"],
    isAvailable: true,
    pageCount: 192,
    publisher: {
      name: "Pan Books",
      location: "London, UK",
    },
    reviews: [
      {
        reviewer: "John Doe",
        rating: 5,
        comment: "A hilarious and mind-bending classic!",
      },
      {
        reviewer: "Jane Smith",
        rating: 4,
        comment: "A fun read, though a bit chaotic at times.",
      },
    ],
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genres: ["Fiction", "Classic"],
    isAvailable: false,
    pageCount: 324,
    publisher: {
      name: "J. B. Lippincott & Co.",
      location: "Philadelphia, USA",
    },
    reviews: [
      {
        reviewer: "Alice Johnson",
        rating: 5,
        comment: "A timeless masterpiece with a powerful message.",
      },
    ],
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genres: ["Dystopian", "Political Fiction"],
    isAvailable: true,
    pageCount: 528,
    publisher: {
      name: "Secker & Warburg",
      location: "London, UK",
    },
    reviews: [
      {
        reviewer: "Robert Brown",
        rating: 5,
        comment: "Chilling and incredibly relevant today.",
      },
      {
        reviewer: "Emily Davis",
        rating: 4,
        comment: "A must-read for anyone interested in social commentary.",
      },
    ],
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
    genres: ["Romance", "Classic"],
    isAvailable: true,
    pageCount: 979,
    publisher: {
      name: "T. Egerton, Whitehall",
      location: "London, UK",
    },
    reviews: [
      {
        reviewer: "Michael Wilson",
        rating: 5,
        comment: "A delightful and witty story of love and social class.",
      },
    ],
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    publicationYear: 1965,
    genres: ["Science Fiction"],
    isAvailable: true,
    pageCount: 412,
    publisher: {
      name: "Chilton Books",
      location: "Philadelphia, USA",
    },
    reviews: [
      {
        reviewer: "Sarah Adams",
        rating: 5,
        comment: "An epic and complex world-building masterpiece.",
      },
      {
        reviewer: "David Miller",
        rating: 4,
        comment: "A bit dense, but the story is fantastic.",
      },
    ],
  },
];
function getBook(id) {
  return books.find((b) => b.id === id);
}

let book = getBook(5);

let data = books.map((book) => ({ title: book.title, author: book.author }));

console.log(data);

const updateBook = {
  ...book,
  usn: 201,
};

updateBook;
const z = ["book", "pen", "paper", "obj"];
const [ele1, ele2, ...ele3] = z;
ele3;

const { title, author, ...rem } = book;
title;
author;
rem;

let newz = ["new", ...z];
newz;

const longBooks = books
  .filter((book) => book.pageCount > 500)
  .map((book) => book.title);

longBooks;

const page = books.reduce((a, book) => book.pageCount + a, 0);
page;

const arr = books.map((book) => book.pageCount).sort((a, b) => a - b);
arr;
