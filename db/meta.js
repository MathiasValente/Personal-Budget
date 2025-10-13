import * as db from './index.js'

export const getColumnNames = async (table) => {
  const result = await db.query(`
    SELECT column_name
    FROM information_schema.columns
    WHERE table_name = $1
      AND is_nullable = 'NO'
  `, [table]);

  return result.rows.map(row => row.column_name);
};