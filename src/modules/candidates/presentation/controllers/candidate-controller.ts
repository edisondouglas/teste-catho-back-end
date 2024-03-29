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

    const skillsArray = skills?.toString().split(",") || undefined;

    const candidates = await this.listCandidatesUseCase.execute(skillsArray);

    if (candidates.length === 0)
      return res.status(404).json({ message: "Nenhum candidato encontrado" });

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
