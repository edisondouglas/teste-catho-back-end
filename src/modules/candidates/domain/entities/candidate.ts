import { CreateCandidateDTO } from "../../main/dtos/candidate-dto";
import { randomUUID } from "node:crypto";

export class Candidate {
  id: string;
  name: string;
  skills: string[];

  constructor({ id, name, skills }: Candidate) {
    this.id = id;
    this.name = name;
    this.skills = skills;
  }

  static create({ name, skills }: CreateCandidateDTO): Candidate {
    const id = randomUUID();
    return new Candidate({ id, name, skills });
  }
}
