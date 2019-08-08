import { Entity, Column } from "typeorm";
import { BaseColumns } from "./BaseColumns";

@Entity()
export class Users extends BaseColumns {
  @Column()
  name: string;

  @Column("int")
  age: number;

}
