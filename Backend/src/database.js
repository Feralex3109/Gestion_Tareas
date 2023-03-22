const mongoose = requeri("mongoose")

mongoose
.connect("mongodb://localhost/mean-employees", {
    useUnifiedTopology: True,
    useNewUrlParser: True,
    useFindAndModify: False
})
.then((db) => console.log("Conectar a la Base de Datos"))
.catch((err) => console.error(err));