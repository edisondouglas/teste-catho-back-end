import { Candidate } from "../../domain/entities/candidate";
import { CandidateRepository } from "../../domain/repositories/candidate-repository";
import { ListCandidatesUseCase } from "../../domain/use-cases/list-candidates";

export class RemoteListCandidatesUseCase implements ListCandidatesUseCase {
  constructor(private readonly candidateRepository: CandidateRepository) {}

  async execute(skills: string[]): Promise<Candidate[]> {
    const candidates = await this.candidateRepository.findAll();

    return candidates;
  }
}
