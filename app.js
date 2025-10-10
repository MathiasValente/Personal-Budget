import express from 'express';
import envelopeRouter from './routes/envelopes.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', envelopeRouter)

app.listen(port, () => console.log(`App listening on port: ${port}`));