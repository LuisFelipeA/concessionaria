import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class UsuarioEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name: 'nome', length: 100, nullable: false})
    nome: string;

    @Column({name: 'email', length: 70, nullable: false})
    email: string;

    @Column({name: 'senha', length: 255, nullable: false})
    senha: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'update_at'})
    updateAt: string;

    @DeleteDateColumn({name: 'delete_at'})
    deleteAt: string;

}