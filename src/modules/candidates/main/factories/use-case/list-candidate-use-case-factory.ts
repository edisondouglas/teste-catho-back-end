import { RemoteListCandidatesUseCase } from "../../use-cases/remote-list-candidate";
import { makeCandidateRepository } from "../repositories/candidate-repository-factory";

export const makeListCandidateUseCase = () => {
  const candidateRepository = makeCandidateRepository();
  return new RemoteListCandidatesUseCase(candidateRepository);
};
