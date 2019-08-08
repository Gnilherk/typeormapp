import { Entity, Column } from "typeorm";
import { BaseColumns } from "./BaseColumns";

@Entity()
export class Products extends BaseColumns {
  @Column()
  upc: string;

  @Column()
  price: number;

}
