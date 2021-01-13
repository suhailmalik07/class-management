import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatePathShalaDto } from "./dto/create-pathshala.dto";
import { Pathshala } from "./pathshala.model";
import { PathshalaService } from "./pathshala.service";

@Controller("pathshala")
export class PathshalaController {
    constructor(private readonly pathshalaService: PathshalaService) {}
    @Get()
    async getStudents(): Promise<Pathshala[]> {
        return await this.pathshalaService.getAll();
    }

    @Post()
    async create(
        @Body() createPathshalaDto: CreatePathShalaDto
    ): Promise<Pathshala> {
        return await this.pathshalaService.create(createPathshalaDto);
    }
}
