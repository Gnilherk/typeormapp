import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseColumns {

  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @Column()
  createdBy: string;

  @UpdateDateColumn()
  updateAt: Date;

  @Column()
  updatedBy: string;

}
