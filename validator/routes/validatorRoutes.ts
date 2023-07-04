import express from 'express';

export const router = express.Router();

router.post("/notify", async (request,response) => {
    const {email, message} = request.body
    if (!email || !message) {
        response.status(400);
        throw new Error("Request validation failed");
    }
    response.status(200);
    response.json({"message": "passing request to next service..."})
});

