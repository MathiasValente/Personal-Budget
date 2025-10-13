import * as db from '../db/index.js'

export const getAll = async table => {
    const result = await db.query(`
        SELECT *
        FROM ${table}`);
    return result.rows;
}

export const getByID = async (table, id) => {
    const result = await db.query(`
        SELECT *
        FROM ${table}
        WHERE id = $1
        `,
        [id]);
    return result.rows;
}

export const insert = async (table, fields, values) => {
    const placeholders = fields.map((__, i) => `$${i + 1}`).join(', ');
    const result = await db.query(`
        INSERT INTO ${table} (${fields.join(', ')})
        VALUES (${placeholders})
        RETURNING *
        `,
        values);
    return result.rows[0]
}

export const update = async (table, id, fields, values) => {

    const placeholders = fields.map((field, i) => `${field} = $${i + 1}`).join(', ');

    const result = await db.query(`
        UPDATE ${table}
        SET ${placeholders}
        WHERE id = $${fields.length + 1}
        RETURNING *
        `,
        [ ... values, id ]);
    return result.rows[0];
}

export const remove = async (table, id) => {
    const result = await db.query(`
        DELETE FROM ${table}
        WHERE id = $1
        RETURNING *
        `,
        [id]);
    return result.rows[0];
}