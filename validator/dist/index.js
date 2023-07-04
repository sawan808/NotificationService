import express from 'express';
import { router } from "./routes/validatorRoutes.js";
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log(`Server started on ${port}`));
