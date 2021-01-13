import {
    Column,
    Table,
    Model,
    HasMany,
    BelongsToMany,
} from "sequelize-typescript";
import { Pathshala, PathshalaStudent } from "../pathshala/pathshala.model";

@Table
export class Teacher extends Model {
    @Column
    name: string;

    @Column
    subject: string;
}
