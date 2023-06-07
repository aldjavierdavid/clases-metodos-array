/**
 * Implementa el cuerpo de las funciones addBook y findBook
 */
class Library {
  constructor() {
    this.books = [];
  }

  addBook(bookTitle) {
    // Ejercicio 1: implementa está función para añadir un nuevo libro al array this.books.
    this.books.push(bookTitle);
  }

  findBook(bookTitle) {
    //Ejercicio 2. Usa un método de array adecuado para devolver true o false en función de si existe el libro en this.books. NOTA: NO ES filter ni map.
    return this.books.includes(bookTitle);
  }
}

const fnac = new Library();
fnac.addBook("React 101");
fnac.addBook("Aprende JavaScript en 1 mes (false)");
fnac.addBook("Aires acondicionados que se apagan solos");

console.log("[Ejercicio1]: Libros presentes en la librería: ", fnac.books);
// ["React 101"], "Aprende JavaScript en 1 mes (false)", "Aires acondicionados que se apagan solos"];

console.log("[Ejercicio2-A]: ", fnac.findBook("React 101")); // true
console.log("[Ejercicio2-B]: ", fnac.findBook("El Principito")); // false
