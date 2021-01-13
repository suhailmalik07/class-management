import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./students.model";

@Injectable()
export class StudentsService {
    constructor(
        @InjectModel(Student) private readonly studentModal: typeof Student
    ) {}
    public async create(createStudentDto: CreateStudentDto): Promise<Student> {
        const { name, className } = createStudentDto;
        const teacher = new Student({ name, className });
        return await teacher.save();
    }

    public async getAll(): Promise<Student[]> {
        return await this.studentModal.findAll();
    }
}
