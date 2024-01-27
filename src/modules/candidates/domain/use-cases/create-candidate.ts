import { CreateCandidateDTO } from "../../main/dtos/candidate-dto";
import { Candidate } from "../entities/candidate";

export interface CreateCandidateUseCase {
  execute(candidate: CreateCandidateDTO): Promise<Candidate>;
}
