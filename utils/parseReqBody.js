const extractFieldsAndValues = body => {
    const fields = Object.keys(body);
    const values = Object.values(body);
    return { fields, values };
}

export default extractFieldsAndValues;