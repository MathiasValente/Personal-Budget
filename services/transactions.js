import * as crud from '../services/crud.js'

const table = 'transactions'

export const getAllTransactions = async () => crud.getAll(table);
export const getTransactionByID = async (transID) => crud.getByID(table, transID);
export const insertTransaction = async (fields, values) => crud.insert(table, fields, values);
export const updateTransaction = async (transID, fields, values) => crud.update(table, transID, fields, values);
export const deleteTransaction = async (transID) => crud.remove(table, transID);