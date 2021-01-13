import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Student } from "./students.model";
import { StudentsController } from "./students.controller";
import { StudentsService } from "./students.service";

@Module({
    imports: [SequelizeModule.forFeature([Student])],
    providers: [StudentsService],
    controllers: [StudentsController],
})
export class StudentsModule {}
