import { Candidate } from "../../domain/entities/candidate";
import { CandidateRepository } from "../../domain/repositories/candidate-repository";
import { CreateCandidateUseCase } from "../../domain/use-cases/create-candidate";
import { CreateCandidateDTO } from "../dtos/candidate-dto";

export class RemoteCreateCandidateUseCase implements CreateCandidateUseCase {
  constructor(private readonly candidateRepository: CandidateRepository) {}

  async execute(candidate: CreateCandidateDTO): Promise<Candidate> {
    const data = Candidate.create(candidate);

    data.skills = [...new Set(data.skills)];

    const newCandidate = await this.candidateRepository.create(data);

    return newCandidate;
  }
}
