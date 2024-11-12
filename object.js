

var person = {
    firstname : "saividya",
    lastname : "chitukula",
    age: 24
}
console.log(person.firstname)//o/p:-saividya

person.city = "newyork";
console.log(person)

//o/p:-{firstname: 'saividya', lastname: 'chitukula', age: 24, city: 'newyork'}


var product = {
    Name: "Tv",
    price: "1,00,000",
    instock:"true"
};
product.price = "95,000";

delete product.instock;
console.log(product);
//o/p:-{Name: 'Tv', price: '95,000'}


var library = {
    fiction: {
      genreName: "Fiction",
      books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
      ]
    },
    nonFiction: {
      genreName: "Non-Fiction",
      books: [
        { title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
        { title: "Educated", author: "Tara Westover", year: 2018 },
        { title: "Becoming", author: "Michelle Obama", year: 2018 }
      ]
    },
    fantasy: {
      genreName: "Fantasy",
      books: [
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
        { title: "A Game of Thrones", author: "George R.R. Martin", year: 1996 }
      ]
    },
    mystery: {
        genreName: "Mystery",
        books: [
          { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 },
          { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
          { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 }
        ]
      },
      scienceFiction: {
        genreName: "Science Fiction",
        books: [
          { title: "Dune", author: "Frank Herbert", year: 1965 },
          { title: "Ender's Game", author: "Orson Scott Card", year: 1985 },
          { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", year: 1969}]}
    };
    console.log(library.fiction)
    //o/p:-{genreName: 'Fiction', books: Array(3)}
    delete library.mystery;
    console.log(library);
    //fantasy: {genreName: 'Fantasy', books: Array(3)}
    // fiction: {genreName: 'Fiction', books: Array(3)}
    // nonFiction: {genreName: 'Non-Fiction', books: Array(3)}
    // scienceFiction: {genreName: 'Science Fiction', books: Array(3)}




var user = {
    username: "saividya chitukula",
email: "chsaividya180305@gmail.com",
address: "kamareddy,telangana,503110"
};
Object.freeze(user);
console.log(user);
// {username: 'saividya chitukula', email: 'chsaividya180305@gmail.com', address: 'kamareddy,telangana,503110'}
user.email="sharathchenna0406@gmail.com";
console.log(Object.isFrozen(user));//true
console.log(user)
//{username: 'saividya chitukula', email: 'chsaividya180305@gmail.com', address: 'kamareddy,telangana,503110'}
user.phone="9632581470"
console.log(user)
//{username: 'saividya chitukula', email: 'chsaividya180305@gmail.com', address: 'kamareddy,telangana,503110'}


var car = {
    make: "TATA",
    model:"TIAGO",
    price: "8,00,000"
}
Object.seal(car);
console.log(car)
//{make: 'TATA', model: 'TIAGO', price: '8,00,000'}
delete car.make;
console.log(car)
//{make: 'TATA', model: 'TIAGO', price: '8,00,000'}
console.log(Object.isSealed(car))/*true*/
car.price="7,50,000";
console.log(car)
//{make: 'TATA', model: 'TIAGO', price: '8,00,000'}
console.log(Object.isExtensible(car));/*false*/
console.log(car)
//{make: 'TATA', model: 'TIAGO', price: '8,00,000'}

const store = {
  name: "SuperMart",
  products: {
    electronics: {
      phones: {
        apple: {
          iPhoneX: { price: 999, stock: 20 },
          iPhone12: { price: 1099, stock: 15 },
        },
        samsung: {
          galaxyS21: { price: 799, stock: 25 },
          galaxyNote20: { price: 999, stock: 10 },
        },
      },
      laptops: {
        dell: {
          XPS13: { price: 1200, stock: 10 },
          Inspiron15: { price: 800, stock: 30 },
        },
        hp: {
          SpectreX360: { price: 1300, stock: 5 },
          Pavilion15: { price: 750, stock: 20 },
        },
      },
    },
    groceries: {
      fruits: {
        apples: { price: 2, stock: 100 },
        bananas: { price: 1, stock: 150 },
      },
      vegetables: {
        carrots: { price: 1.5, stock: 200 },
        spinach: { price: 1, stock: 100 },
      },
    },
  },
};
console.log(store.products.groceries.vegetables.spinach.stock);
//100
console.log(store.products.electronics.laptops.hp.Pavilion15.price); 
//750

