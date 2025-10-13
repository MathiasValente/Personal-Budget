import * as crud from '../services/crud.js'

const table = 'envelopes'

export const getAllEnvelopes = () => crud.getAll(table);
export const getEnvelopeByID = (envID) => crud.getByID(table, envID);
export const insertEnvelope = (fields, values) => crud.insert(table, fields, values);
export const updateEnvelope = (envID, fields, values) => crud.update(table, envID, fields, values);
export const deleteEnvelope = (envID) => crud.remove(table, envID);