function processPayload(payload, referenceData) {
    // Check if the payload is an array
    if (Array.isArray(payload)) {
        // If it is, map over each element in the array and recursively call the function on each element
        return payload.map(ele => processPayload(ele, referenceData));
    }

    // Check if the payload is an object
    if (typeof (payload) === 'object') {
        // If it is, create an empty object to store the transformed payload
        const transformedPayload = {};
        // Loop over each key-value pair in the payload object
        for (const [key, value] of Object.entries(payload)) {
            // Recursively call the function on the value and store the transformed value in the transformedPayload object
            transformedPayload[key] = processPayload(value, referenceData);
        }
        // Return the transformedPayload object
        return transformedPayload;
    }

    // Check if {REF_IMSI} available in beween the string
    if(payload.toLocaleLowerCase().includes('{REF_IMSI}'.toLocaleLowerCase())){
        return payload.replace('{REF_IMSI}',referenceData['REF_IMSI'])
    }
    // Check if the payload is a string that starts with "{REF_" and ends with "}"
    if (typeof (payload) === 'string' && payload.startsWith("{REF_") && payload.endsWith("}")) {
        // If it is, extract the reference key from the string and use it to look up the corresponding value in the referenceData object
        const refKey = payload.substring(1, payload.length - 1);
        return referenceData[refKey];
    }
    

    // If none of the above conditions are true, return the payload as is
    return payload;
}

module.exports = { processPayload };
