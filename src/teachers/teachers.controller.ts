import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { Teacher } from "./teacher.model";
import { TeachersService } from "./teachers.service";

@Controller("teachers")
export class TeachersController {
    constructor(private readonly teacherService: TeachersService) {}
    @Get()
    getTeachers(): Promise<Teacher[]> {
        return this.teacherService.getAll();
    }

    @Post()
    async createTeacher(
        @Body() createTeacherDto: CreateTeacherDto
    ): Promise<Teacher> {
        return await this.teacherService.create(createTeacherDto);
    }
}
