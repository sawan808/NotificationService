import express from "express";
// import { validate } from '../controllers/validationController';
import { validateRequest } from '../controllers/validationController.js';
// import { Message } from "../utils/message.js";
// import { pQueue } from "../utils/queue.js";

// const validateRequest = async (request: any, response: any) => {
//   const { email, message } = request.body;
//   if (!email || !message) {
//     response.status(400);
//     throw new Error("Request validation failed");
//   }

//   const newMessage: Message = new Message(
//     "transactional",
//     2,
//     "A transaction occured"
//   );
//   pQueue.addMessage(newMessage);

//   response.status(200);
//   response.json({ message: "Message added in queue for further processing.." });
// };
export const router = express.Router();
// export default { router };

router.post("/notify", validateRequest);
