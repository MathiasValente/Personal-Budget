import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool();

export const query = async (text, params) => {
    const res = await pool.query(text, params);
    return res;
}