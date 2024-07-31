import { Module } from "@nestjs/common";
import { Usuario } from "./entities/usuario.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioService } from "./services/usuario.service";
import { UsuarioController } from "./controllers/usuario.controller";
import { Bcrypt } from "../bcrypt/bcrypt";


@Module({
    imports:[TypeOrmModule.forFeature([Usuario])],
    providers:[UsuarioService, Bcrypt],
    controllers:[UsuarioController],
    exports:[UsuarioService],
})
export class UsuarioModule {}