import { CandidateController } from "../../../presentation/controllers/candidate-controller";
import { makeCreateCandidateUseCase } from "../use-case/create-candidate-use-case-factory";
import { makeListCandidateUseCase } from "../use-case/list-candidate-use-case-factory";

export const makeCandidateController = () => {
  const createCandidateUseCase = makeCreateCandidateUseCase();
  const listCandidatesUseCase = makeListCandidateUseCase();
  return new CandidateController(createCandidateUseCase, listCandidatesUseCase);
};
