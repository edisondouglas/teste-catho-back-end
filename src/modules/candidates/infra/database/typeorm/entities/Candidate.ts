import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("candidates")
export class Candidate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("simple-array")
  skills: string[];
}
