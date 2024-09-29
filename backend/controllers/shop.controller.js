const db = require("../models");
const Shop = db.shops;

/*
El controlador va a pedir los datos al modelo. El controlador está entre el modelo y las rutas
La funcion que crea una nueva tienda, recibe la peticion, y crea
un objeto json con los datos que le llega, y los crea en la base de datos.
Ideal controlar los errores
*/
exports.create = (req, res) => { // post
    const shop = {
        address: req.body.address, // Cuando creamos algo estamos enviando la información a crear
        telephone: req.body.telephone
    }
    Shop.create(shop)
        .then((data) => {
            res.status(201).send(data); // Respuesta con código 201 (creado)
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error creating the store",
                error: error.message
            });
        });
}

exports.findAll = (req, res) => { // get
    Shop.findAll()
        .then((data) => {
            res.status(200).send(data);
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error obtaining stores",
            error: error.message
        });
    });
}

exports.findOne = (req, res) => { // otro get
    const id = req.params.id;

    Shop.findByPk(id) // Asegúrate de usar el método correcto para buscar por ID
        .then((data) => {
            if (!data) {
                return res.status(404).send({ message: "Tienda no encontrada" });
            }
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: "Error obteniendo la tienda",
                error: error.message
            });
        });
};

 exports.update = (req, res) => { // put
    const id = req.params.id;

    Shop.update (
        {
            address: req.body.address,
            telephone: req.body.telephone
        },
        { where: {id: id } }
    )
    .then((num) => {
        if (num == 1) {
            res.send({ message: "Store updated correctly." });
        } else {
            res.send({ message: `Could not update the store with id=${id}. The store was not found or the request body is empty.`});
        }
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error updating the store",
            error: error.message
        });
    });
}; 

exports.delete = (req, res) => { // delete
    const id = req.params.id; // No se envia en el body, se envia como parametro

    Shop.destroy({ where: {id: id}}).then(() => {
        console.log("Se borro todo guay");
        res.send({message: "Deleted"});
    }) // el id de la base de datos es el id pasado por parametro
}