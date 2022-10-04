import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Book{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    publisher: string

    @Column()
    releaseDate: string

    @Column()
    category: string

    @Column()
    preface: string

}