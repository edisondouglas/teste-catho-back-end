import { Router } from "express";
import { makeCandidateController } from "../../main/factories/controllers/candidate-controller-factory";

const candidateRouter = Router();
const candidateController = makeCandidateController();

candidateRouter
  .route("/")
  .get((req, res) => {
    candidateController.getAll(req, res);
  })
  .post((req, res) => {
    candidateController.create(req, res);
  });

export { candidateRouter };
