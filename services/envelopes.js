import * as db from '../db/index.js';

export const getAllEnvelopes = async () => {
    const result = await db.query(`
        SELECT * FROM envelopes`);
    return result.rows;
}

export const getEnvelopeByID = async (envID) => {
    const result = await db.query(`
        SELECT * FROM envelopes WHERE id = $1
        `,
        [envID]);
    return result.rows;
}

export const insertEnvelope = async (user_id, name, budget) => {
    const result = await db.query(`
        INSERT INTO envelopes (user_id, name, budget) VALUES ($1, $2, $3) RETURNING *
        `,
        [user_id, name, budget]);
    return result.rows[0]
}

export const updateEnvelope = async (envID, fields, values) => {

    const placeholders = fields.map((field, i) => `${field} = $${i + 1}`).join(', ');

    const result = await db.query(`
        UPDATE envelopes
        SET ${placeholders}
        WHERE id = $${fields.length + 1}
        RETURNING *
        `,
        [ ... values, envID ]);
    return result.rows[0];
}

export const deleteEnvelope = async (envID) => {
    const result = await db.query(`
        DELETE FROM envelopes
        WHERE id = $1
        RETURNING *
        `,
        [envID]);
    return result.rows[0];
}