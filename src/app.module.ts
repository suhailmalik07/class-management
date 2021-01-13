import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TeachersModule } from "./teachers/teachers.module";
import { UsersModule } from "./users/users.module";

import { StudentsModule } from "./students/students.module";
import { PathshalaModule } from "./pathshala/pathshala.module";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: "localhost",
            port: 5432,
            username: "suhailmalik",
            password: "Suhail80@",
            database: "postgres",
            autoLoadModels: true,
            synchronize: true,
        }),
        UsersModule,
        TeachersModule,
        StudentsModule,
        PathshalaModule,
    ],
})
export class AppModule {}
