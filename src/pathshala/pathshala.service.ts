import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Student } from "src/students/students.model";
import { Teacher } from "src/teachers/teacher.model";
import { CreatePathShalaDto } from "./dto/create-pathshala.dto";
import { Pathshala, PathshalaStudent } from "./pathshala.model";

@Injectable()
export class PathshalaService {
    constructor(
        @InjectModel(Pathshala)
        private readonly pathshalaModel: typeof Pathshala
    ) {}

    async getAll(): Promise<Pathshala[]> {
        return await this.pathshalaModel.findAll({
            include: [Teacher, { model: Student, as: "students" }],
        });
    }

    async create(createPathshalaDto: CreatePathShalaDto): Promise<Pathshala> {
        const { name, teacherId, students } = createPathshalaDto;
        const pathshala = new Pathshala({ name, teacherId, students });
        await pathshala.save();
        await pathshala.$set("students", students);
        return pathshala;
    }
}
