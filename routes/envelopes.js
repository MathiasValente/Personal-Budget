import express from 'express';
import * as services from '../services/envelopes.js';
import { validateRequiredFields } from '../middlewares/validateRequiredFields.js';
import extractFieldsAndValues from '../utils/parseReqBody.js'

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

        const { fields, values } = extractFieldsAndValues(req.body)

        const result = await services.insertEnvelope(fields, values);
        res.status(201).json({
            message: 'Envelope Successfully Created',
            result
    });
});

router.patch('/:id', express.json(), async (req, res) => {
    const envID = req.params.id;
    const updates = req.body;

    const { fields, values } = extractFieldsAndValues(req.body)

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