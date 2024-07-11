const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan')

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public/'))

const connection = mysql.createConnection({
    host: "dbzoilocandela.ch024usikjjn.us-east-1.rds.amazonaws.com",
    user: "angie",
    password: "Angiec2024",
    database: "dbContacto",
});

connection.connect(function (err) {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});

// Ruta inicial
app.get("/", function (req, res) {
    console.log("Ruta inicial");
    res.sendFile(path.join(__dirname, '/index.html'));
});


// Ruta para recibir datos del formulario y guardar en la base de datos
app.post('/submit-form', (req, res) => {
    const {
        dni,
        nombres,
        apellidos,
        fecha_nacimiento,
        sexo,
        celular,
        email,
        direccion,
        colesterol,
        glucosa,
        hemoglobina,
        tipo_seguro
    } = req.body;

    console.log(req.body); // Depuración: Verificar los datos recibidos desde el formulario

    const query = `INSERT INTO	paciente (dni, nombres, apellidos, fecha_nacimiento, sexo, celular, email, direccion, colesterol, glucosa, hemoglobina, tipo_seguro) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    console.log(query); // Depuración: Verificar la consulta SQL generada

    connection.query(query, [
        dni,
        nombres,
        apellidos,
        fecha_nacimiento,
        sexo,
        celular,
        email,
        direccion,
        colesterol,
        glucosa,
        hemoglobina,
        tipo_seguro
    ], (err, result) => {
        if (err) {
            console.error('Error al insertar datos: ' + err.stack); // Mostrar el error completo en la consola
            res.status(500).send('Ocurrió un error al procesar tu consulta.');
            return;
        }

        res.status(200).send('Tu consulta ha sido procesada exitosamente.');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://127.0.0.1:${port}`);
});
