var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Message } from "../utils/message.js";
import { pQueue } from "../utils/queue.js";
export const validateRequest = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, message } = request.body;
    if (!email || !message) {
        response.status(400);
        throw new Error("Request validation failed");
    }
    const newMessage = new Message("transactional", 2, "A transaction occured");
    pQueue.addMessage(newMessage);
    response.status(200);
    response.json({ message: "Message added in queue for further processing.." });
});
