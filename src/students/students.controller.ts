import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./students.model";
import { StudentsService } from "./students.service";

@Controller("students")
export class StudentsController {
    constructor(private readonly studentService: StudentsService) {}
    @Get()
    getStudents(): Promise<Student[]> {
        return this.studentService.getAll();
    }

    @Post()
    async createStudent(
        @Body() createStudentDto: CreateStudentDto
    ): Promise<Student> {
        return await this.studentService.create(createStudentDto);
    }
}
