import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Teacher } from "./teacher.model";
import { TeachersController } from "./teachers.controller";
import { TeachersService } from "./teachers.service";

@Module({
    imports: [SequelizeModule.forFeature([Teacher])],
    providers: [TeachersService],
    controllers: [TeachersController],
})
export class TeachersModule {}
