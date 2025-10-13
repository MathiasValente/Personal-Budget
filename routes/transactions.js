import express from 'express';
import * as services from '../services/transactions.js';
import { validateRequiredFields } from '../middlewares/validateRequiredFields.js';
import extractFieldsAndValues from '../utils/parseReqBody.js'

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await services.getAllTransactions();
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const transID = req.params.id;
    const result = await services.getTransactionByID(transID);
    res.send(result);
});

router.post('/',
    express.json(),
    validateRequiredFields('transactions', ['id']),
    async (req, res) => {

        const { fields, values } = extractFieldsAndValues(req.body)

        const result = await services.insertTransaction(fields, values);
        res.status(201).json({
            message: 'Transaction Successfully Created',
            result
    });
});

router.patch('/:id', express.json(), async (req, res) => {
    const transID = req.params.id;
    const updates = req.body;

    const { fields, values } = extractFieldsAndValues(req.body)

    const result = await services.updateTransaction(transID, fields, values)

    res.status(200).json({
        message: 'Transaction Successfully Updated',
        result
    });
})

router.delete('/:id', async (req, res) => {
    const transID = req.params.id;
    
    const result = await services.deleteTransaction(transID)

    res.status(200).json({
        message: 'Transaction Successfully Deleted',
        result
    });
})

export default router;