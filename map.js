const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 },
];

console.log(
  "Sors un array qui ne contient que le prénom et le nom des entrepreneurs"
);

const entrepreneursFullName = entrepreneurs.map((entrepreneur) => `${entrepreneur.first} ${entrepreneur.last}`);

console.log(entrepreneursFullName);

console.log(
  "Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui."
);

const entrepreneursWithAge = entrepreneurs.map((entrepreneur) => ({
  first: entrepreneur.first,
  last: entrepreneur.last,
  age: (new Date()).getFullYear() - entrepreneur.year
}));

console.log(entrepreneursWithAge);

console.log(
  "Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName"
);

const entrepreneursWithLisibility = entrepreneurs.map((entrepreneur) => ({
      firstName: entrepreneur.first,
      lastName: entrepreneur.last,
      year: entrepreneur.year,
}));

console.log(entrepreneursWithLisibility);

console.log(
  "Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70"
);

const bornInSeventies = entrepreneurs.filter((entrepreneur) => 
      entrepreneur.year > 1969 &&
      entrepreneur.year < 1980
);

console.log(bornInSeventies);
