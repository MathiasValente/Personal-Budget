import * as crud from '../services/crud.js'

const table = 'envelopes'

export const getAllEnvelopes = async () => crud.getAll(table);
export const getEnvelopeByID = async (envID) => crud.getByID(table, envID);
export const insertEnvelope = async (fields, values) => crud.insert(table, fields, values);
export const updateEnvelope = async (envID, fields, values) => crud.update(table, envID, fields, values);
export const deleteEnvelope = async (envID) => crud.remove(table, envID);