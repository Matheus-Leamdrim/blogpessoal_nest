import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";

@Controller("/postagens")
export class PostagemController{

    constructor(private readonly postagemService: PostagemService){}

    @Get()
    @HttpCode(HttpStatus.OK) //  http status 200
    findAll() : Promise<Postagem[]>{
        return this.postagemService.findAll();
    }
    
    @Get('/:id')
    @HttpCode(HttpStatus.OK) //  http status 200
    findByID(@Param('id',ParseIntPipe)id:number) :Promise<Postagem>{
        return this.postagemService.findByID(id);
    }
    
    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK) //  http status 200
    findBytitulo(@Param('titulo')titulo:string) :Promise<Postagem[]>{
        return this.postagemService.findByTitulo(titulo);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem) : Promise<Postagem>{
        return this.postagemService.create(postagem);
    }
    
    @Put()
    @HttpCode(HttpStatus.CREATED)
    update(@Body() postagem: Postagem) : Promise<Postagem>{
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) //  Http Status 204
    delete(@Param('id',ParseIntPipe)id:number){
        return this.postagemService.delete(id);
    }
}