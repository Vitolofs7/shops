const express = require("express");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:8100" // podriamos permitir a todos con * (no ideal)
}

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models"); // importamos donde se encuentra la base de datos

// arrancamos la base de datos, y El then se pone porque es una operación asíncrona (mientras una peticion pasa no podemos dejar el dispositivo en espera)
db.sequelize.sync().then(() => {
    console.log("database alredy synced");
})
/** Existen 4 tipos fundamentales de métodos, get (pides datos de una base),
 * el post (envias datos), put (modificas datos), delete (borra datos)
 * 
 * (req, res) => {} anotacion arrow (arrow function)
 * 
 * function (req, res){
 *  esto es una función anónima (que es igual que la de arriba)
 * }
 */
app.get("/", (req, res) => {
    res.json({ message: "Welcome to shop application."});
    //return res.status(200).send({
    //    message: "Hola holita"
    //})
});



// Colocamos cuales van a ser las rutas
require("./routes/shop.routes.js")(app);

// process.env es para poder programar el entorno del servidor
const PORT = process.env.PORT  || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// RESTfull es un subconjunto del protocolo http que tiene 
//las funciones get, post, put y delete

// el ORM hace de puente entre el web server y el database (hace 
// un lenguaje de programación orientado a objeto se entienda con
// una base de datos que entiende SQL)
// y entre el cliente y el servidor es el restfull 