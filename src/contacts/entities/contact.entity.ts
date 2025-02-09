import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10, nullable: true })
  phoneNumber?: string;

  @Column({ length: 100, nullable: true })
  email?: string;

  @Column({ nullable: true })
  linkedId?: number;

  @Column({ type: 'enum', enum: ['primary', 'secondary'], default: 'primary' })
  linkPrecedence: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
