import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name:"tb_postagens"})
export class Postagem{
    
    @ApiProperty() 
    @PrimaryGeneratedColumn() // chave incremental
    id: number;
    
    @ApiProperty() 
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()  //não aceitar titulo vazio 
    @Column({length: 100, nullable: false}) //definir o tamanho e não aceitar o valor
    titulo: string;
  
    @ApiProperty() 
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @ApiProperty() 
    @UpdateDateColumn() // a data e a hora serão preenchidas
    data: Date;

    @ApiProperty({ type: () => Tema })
    @ManyToOne(() => Tema,(Tema) =>Tema.postagem, {
        onDelete: "CASCADE"
    })
    tema:Tema;

    @ApiProperty({ type: () => Usuario }) 
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    
    usuario: Usuario;
}

    
    

