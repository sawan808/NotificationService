import express from 'express';
//import { router } from "./routes/validatorRoutes";
// import { router } from './routes/validatorRoutes';
import { router } from "./routes/validatorRoutes.js";
const app:express.Application = express();
const port = process.env.PORT || 5001;

app.use(express.json());
 console.log(`${router}`)
app.use("/", router);

app.listen(port, () => console.log(`Server started on ${port}`));

