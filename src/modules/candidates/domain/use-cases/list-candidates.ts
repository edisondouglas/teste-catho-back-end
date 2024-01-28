import { Candidate } from "../entities/candidate";

export interface ListCandidatesUseCase {
  execute(skills: string[] | undefined): Promise<Candidate[]>;
}
