class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = libros;
        this._mascotas = mascotas;;
    }

    getFullName() {
        return `${this._nombre} ${this._apellido}`;
    }

    addMascota(nombreMascota) {
        this._mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this._mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this._libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this._libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: "El señor de las moscas",
        autor: "William Golding"
    },
    {
        nombre: "Fundación",
        autor: "Isaac Asimov"
    }

]

const AltUser = new Usuario("Elon", "Musk", libros ,["Perro", "Gato"])

console.log(AltUser.getFullName()); // Elon Musk

console.log(AltUser.getBookNames()); // 'El señor de las moscas', 'Fundación'
AltUser.addBook("El jugador", "Fiódor Dostoyevski")
console.log(AltUser.getBookNames()); // 'Rebelión en la granja', 'Fundación', 'El jugador'

console.log(AltUser.countMascotas()); // 2
randomGuy.addMascota('Canario');
console.log(AltUser.countMascotas()); // 3