import * as metaData from '../db/meta.js'

export const validateRequiredFields = (table, ignore) => async (req, res, next) => {
    let requiredFields = await metaData.getColumnNames(table);
    requiredFields = requiredFields.filter(col => !ignore.includes(col));
    
    const missing = requiredFields.filter(f => !(f in req.body));

    if (missing.length > 0) {
        return res.status(400).json({
        error: `Required fields not provided: ${missing.join(', ')}`
        });
    }

    next();
};