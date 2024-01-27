import { Request, Response } from "express";
import { CreateCandidateUseCase } from "../../domain/use-cases/create-candidate";
import { ListCandidatesUseCase } from "../../domain/use-cases/list-candidates";

export class CandidateController {
  constructor(
    private readonly createCandidateUseCase: CreateCandidateUseCase,
    private readonly listCandidatesUseCase: ListCandidatesUseCase
  ) {}

  public async getAll(req: Request, res: Response): Promise<Response> {
    const { skills } = req.query;

    const candidates = await this.listCandidatesUseCase.execute(skills);
    return res.json(candidates);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, skills } = req.body;

    const newCandidate = await this.createCandidateUseCase.execute({
      name,
      skills,
    });
    return res.json(newCandidate);
  }
}
