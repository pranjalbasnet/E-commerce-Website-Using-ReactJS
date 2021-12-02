const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51JntQYH7iYmORyYuu0WpF7ybuBXbJBGjgyX0HtpHR1HrZbljs8eoZzbHuqlbBFl8ImajnBgi2SRsLcdw1c08NC1d00EyRE3wWY')

// API

// app config
const app = express();

// middlewares
app.use(cors({ origin : true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('BuyOn'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Boom!!!! Payment Request Received for ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// listen commands
exports.api = functions.https.onRequest(app);

// example endpoint
//http://localhost:5001/buyon-1a7fd/us-central1/api
