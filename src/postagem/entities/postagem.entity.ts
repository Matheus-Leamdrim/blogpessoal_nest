import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"tb_postagens"})
export class Postagem{
    
    @PrimaryGeneratedColumn() // chave incremental
    id: number;
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()  //não aceitar titulo vazio 
    @Column({length: 100, nullable: false}) //definir o tamanho e não aceitar o valor
    titulo: string;
  
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // a data e a hora serão preenchidas
    data: Date;

    @ManyToOne(() => Tema,(Tema) =>Tema.postagem, {
        onDelete: "CASCADE"
    })
    tema:Tema;

    
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    
    usuario: Usuario;
}

    
    

