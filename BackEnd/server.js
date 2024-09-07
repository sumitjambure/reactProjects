const express = require("express");
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
    host: 'localhost',
    database: '',
    user: '',
    password: '',
    port: '5432'
});

app.post('/signup', (req, res) => {
    const sql = "INSET INTO signup ('name','email','password') VALUES ($1, $2, $3)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    console.log("login values here ", values);

    //     pool.query(sql, [values], (err, result) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.send(result);
    //         }
    //     })

    // })

    pool.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: "Internal Server Error" }); // Send a more informative error response
        } else {
            res.status(201).send({ message: "Signup successful!" }); // Send a success message with status 201 (Created)
        }
    });
});

app.listen(5000, () => {
    console.log('listening at port 5000');

})
pool.end(() => {
    console.log('Connection pool closed');
});