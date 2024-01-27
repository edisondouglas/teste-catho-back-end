import { DataSource, Repository } from "typeorm";
import { Candidate } from "../entities/Candidate";
import { CandidateRepository } from "../../../../domain/repositories/candidate-repository";
import { AppDataSource } from "../../../../../../shared/infra/typeorm/configs/data-source";

export class TypeormCandidateRepository implements CandidateRepository {
  private appDataSource: DataSource;
  private candidateRepository: Repository<Candidate>;

  constructor() {
    this.appDataSource = AppDataSource;
    this.candidateRepository = this.appDataSource.getRepository(Candidate);
  }

  async create(candidate: Candidate): Promise<Candidate> {
    await this.candidateRepository.save(candidate);
    return candidate;
  }

  async findAll(): Promise<Candidate[]> {
    const candidates = await this.candidateRepository.find();
    return candidates;
  }
  findById(id: string): Promise<Candidate | undefined> {
    throw new Error("Method not implemented.");
  }
  findBySkills(skills: string[]): Promise<Candidate[]> {
    throw new Error("Method not implemented.");
  }
  update(id: string, candidate: Candidate): Promise<Candidate | undefined> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
