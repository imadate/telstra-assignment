const router = require('express').Router({ mergeParams: true });
const { processPayload } = require('../../helpers/process');


module.exports = () => {
    // transformPayload API call
    router.post('/process', (req, res) => {
        const payload = req.body.payload;
        const referenceData = req.body.referenceData;
        const transformedPayload = processPayload(payload, referenceData);
        res.json(transformedPayload);
    });
    return router
}