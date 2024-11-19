import { Module } from "@nestjs/common";
import { CatController } from "./cat.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "./cat.entity";
import { CatService } from "./cat.service";

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    exports: [TypeOrmModule],
    controllers: [CatController],
    providers: [CatService]
})
export class CatModule {}
