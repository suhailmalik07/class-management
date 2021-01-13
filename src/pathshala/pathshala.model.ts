import {
    Column,
    ForeignKey,
    Table,
    Model,
    BelongsTo,
    HasMany,
    BelongsToMany,
} from "sequelize-typescript";
import { Student } from "src/students/students.model";
import { Teacher } from "src/teachers/teacher.model";

@Table
export class Pathshala extends Model<Pathshala> {
    @Column
    name: string;

    @ForeignKey(() => Teacher)
    @Column
    teacherId: number;

    @BelongsTo(() => Teacher)
    teacher: Teacher;

    @BelongsToMany(() => Student, () => PathshalaStudent)
    students: Student[];
}

@Table
export class PathshalaStudent extends Model {
    @ForeignKey(() => Pathshala)
    @Column
    pathshalaId: number;

    @ForeignKey(() => Student)
    @Column
    studentId: number;
}
