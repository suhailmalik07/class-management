import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { Teacher } from "./teacher.model";

@Injectable()
export class TeachersService {
    constructor(
        @InjectModel(Teacher) private readonly teacherModal: typeof Teacher
    ) {}
    public async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
        const { name, subject } = createTeacherDto;
        const teacher = new Teacher({ name, subject });
        return await teacher.save();
    }

    public async getAll(): Promise<Teacher[]> {
        return await this.teacherModal.findAll();
    }
}
