const books = [
  { id: 133712, title: 'Gatsby le magnifique', rentedCount: 39 },
  { id: 237634, title: 'A la recherche du temps,perdu', rentedCount: 28 },
  { id: 873495, title: 'Orgueil & Préjugés', rentedCount: 67 },
  { id: 450915, title: 'Les frères Karamazov', rentedCount: 55 },
  { id: 837636, title: 'Dans les forêts de Sibérie', rentedCount: 15 },
  { id: 450911, title: 'Pourquoi j\'ai mangé mon père', rentedCount: 45 },
  { id: 675651, title: 'Et on tuera tous les affreux', rentedCount: 36 },
  { id: 888475, title: 'Le meilleur des mondes', rentedCount: 58 },
  { id: 364442, title: 'La disparition', rentedCount: 33 },
  { id: 635411, title: 'La lune seule le sait', rentedCount: 43 },
  { id: 465638, title: 'Voyage au centre de la Terre', rentedCount: 38 },
  { id: 748147, title: 'Guerre et Paix', rentedCount: 19 },
];


console.log("Sors-moi la liste des titres des livres du CDI");

const booksTitles = books.map((book) => ({
    title: book.title
}));

console.log(booksTitles);

console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?");

const isAllRented = (books.filter((book) => book.rented == 0)).length === 0;

console.log(isAllRented);

console.log("Quel est le livre le plus emprunté ?");

const mostRentedBook = (array) => {
  mostRented = array[0];
  array.map((book) => {
    if (book.rentedCount > mostRented.rentedCount) mostRented = book;
  });
  return mostRented;
};

console.log(mostRentedBook(books));

console.log("Quel est le livre le moins emprunté ?");

const leastRentedBook = (array) => {
  leastRented = array[0];
  array.map((book) => {
    if (book.rentedCount < leastRented.rentedCount) leastRented = book;
  });
  return leastRented;
};

console.log(leastRentedBook(books));

console.log("Supprime le livre avec l'ID 133712");

const deleteBook = (array) => {
  deleteIndex = array.indexOf(array.find((book) => book.id == 133712));
  array.splice(deleteIndex, 1);
};

deleteBook(books);
console.log(books);
