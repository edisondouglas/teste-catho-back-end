import { Candidate } from "../../domain/entities/candidate";
import { CandidateRepository } from "../../domain/repositories/candidate-repository";
import { ListCandidatesUseCase } from "../../domain/use-cases/list-candidates";

export class RemoteListCandidatesUseCase implements ListCandidatesUseCase {
  constructor(private readonly candidateRepository: CandidateRepository) {}

  async execute(skills: string[] | undefined): Promise<Candidate[]> {
    const candidates = await this.candidateRepository.findAll();

    if (skills === undefined) return candidates;

    const candidatesWithSkills = candidates.filter((candidate) => {
      return candidate.skills.some((skill) => skills.includes(skill));
    });

    const candidatesOrdered = candidatesWithSkills.sort((a, b) => {
      const aSkillsCount = a.skills.filter((skill) =>
        skills.includes(skill)
      ).length;

      const bSkillsCount = b.skills.filter((skill) =>
        skills.includes(skill)
      ).length;

      return bSkillsCount - aSkillsCount;
    });

    return candidatesOrdered;
  }
}
