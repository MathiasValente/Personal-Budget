import express from 'express';
import * as services from '../services/envelopes.js';
import { validateRequiredFields } from '../middlewares/validateRequiredFields.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await services.getAllEnvelopes();
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const envID = req.params.id;
    const result = await services.getEnvelopeByID(envID);
    res.send(result);
});

router.post('/',
    express.json(),
    validateRequiredFields('envelopes', ['id']),
    async (req, res) => {

        const fileds = Object.keys(req.body);
        const values = Object.values(req.body);

        const result = await services.insertEnvelope(fileds, values);
        res.status(201).json({
            message: 'Envelope Successfully Created',
            result
    });
});

router.patch('/:id', express.json(), async (req, res) => {
    const envID = req.params.id;
    const updates = req.body;

    const fields = Object.keys(updates);
    const values = Object.values(updates);

    const result = await services.updateEnvelope(envID, fields, values)

    res.status(200).json({
        message: 'Envelope Successfully Updated',
        result
    });
})

router.delete('/:id', async (req, res) => {
    const envID = req.params.id;
    
    const result = await services.deleteEnvelope(envID)

    res.status(200).json({
        message: 'Envelope Successfully Deleted',
        result
    });
})

export default router;