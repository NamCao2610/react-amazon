const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hoh1OC88rDbzbjYynWYVfEoNF0J9cvEqvgGRc0ORO1siLOFHQaYNHLbnweNhMcHb6lZwk6J9atj8NaKcZcJR0ED00OswmmazY');

//Api 

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/Nam', (req, res) => {
    res.send('Namd ep zai');
})

app.post('/payments/create', async (req, res) => {
    try {
        const total = req.query.total;

        console.log('Payment request BOOM!! ', total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'usd'
        });

        res.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (err) {
        res.status(500).send(err.message);
    }
})

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/amazo-dd46f/us-central1/api



