import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { PathshalaController } from "./pathshala.controller";
import { Pathshala, PathshalaStudent } from "./pathshala.model";
import { PathshalaService } from "./pathshala.service";

@Module({
    imports: [SequelizeModule.forFeature([Pathshala, PathshalaStudent])],
    providers: [PathshalaService],
    controllers: [PathshalaController],
})
export class PathshalaModule {}
