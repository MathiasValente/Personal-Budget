import * as crud from '../services/crud.js'

const table = 'transactions'

export const getAllTransactions = () => crud.getAll(table);
export const getTransactionByID = (transID) => crud.getByID(table, transID);
export const insertTransaction = (fields, values) => crud.insert(table, fields, values);
export const updateTransaction = (transID, fields, values) => crud.update(table, transID, fields, values);
export const deleteTransaction = (transID) => crud.remove(table, transID);