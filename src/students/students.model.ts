import { Column, Table, Model, BelongsToMany } from "sequelize-typescript";
import { Pathshala, PathshalaStudent } from "src/pathshala/pathshala.model";

@Table
export class Student extends Model {
    @Column
    name: string;

    @Column
    className: string;

    @BelongsToMany(() => Pathshala, () => PathshalaStudent)
    pathshalas: Pathshala[];
}
