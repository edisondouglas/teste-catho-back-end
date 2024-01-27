import { Candidate } from "../entities/candidate";

export interface CandidateRepository {
  create(candidate: Candidate): Promise<Candidate>;
  findAll(): Promise<Candidate[]>;
  findById(id: string): Promise<Candidate | undefined>;
  findBySkills(skills: string[]): Promise<Candidate[]>;
  update(id: string, candidate: Candidate): Promise<Candidate | undefined>;
  delete(id: string): Promise<void>;
}
