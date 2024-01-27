import { TypeormCandidateRepository } from "../../../infra/database/typeorm/repositories/candidate-repository";

export const makeCandidateRepository = () => {
  return new TypeormCandidateRepository();
};
