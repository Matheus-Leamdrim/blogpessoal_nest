import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"tb_postagens"})
export class Postagem{
    
    @PrimaryGeneratedColumn() // chave incremental
    id: number;
    
    @IsNotEmpty()  //não aceitar titulo vazio 
    @Column({length: 100, nullable: false}) //definir o tamanho e não aceitar o valor
    titulo: string;
  
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // a data e a hora serão preenchidas
    data: Date;
}

