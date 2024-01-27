import { RemoteCreateCandidateUseCase } from "../../use-cases/remote-create-candidate";
import { makeCandidateRepository } from "../repositories/candidate-repository-factory";

export const makeCreateCandidateUseCase = () => {
  const candidateRepository = makeCandidateRepository();
  return new RemoteCreateCandidateUseCase(candidateRepository);
};
