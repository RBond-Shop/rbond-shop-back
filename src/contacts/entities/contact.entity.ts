import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  instagram: string

  @Column()
  facebook: string

  @Column()
  telegram: string

  @Column()
  phoneNumber: string

  @Column()
  email: string
}
