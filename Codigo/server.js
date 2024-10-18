const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configurar la conexión con MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Cambia esto si tienes un usuario distinto
    password: '',  // Cambia esto si tienes una contraseña configurada
    database: 'abajova'
});


// Conectar a MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener productos
app.get('/productos', (req, res) => {
    const sql = 'SELECT * FROM productos';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al obtener productos:', err);
            res.status(500).json({ error: 'Error al obtener productos' });
            return;
        }
        res.json(result);
    });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


const cors = require('cors');
app.use(cors());
