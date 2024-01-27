import { Router } from "express";
import { candidateRouter } from "../../modules/candidates/presentation/routes/candidate-routes";

const router = Router();

router.use("/candidates", candidateRouter);

export { router };
