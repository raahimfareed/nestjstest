import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatService } from "./cat.service";
import { UpdateCatDto } from "./dto/update-cat.dto";

@Controller('cats')
export class CatController {
    constructor(private readonly catsService: CatService) {}

    // @Post()
    // async create(@Body() createCatDto: CreateCatDto, @Res({ passthrough: true }) res: Response) {
    //     res.status(HttpStatus.OK);
    //     return {
    //         message: `A cat with the name ${createCatDto.name} age ${createCatDto.age} breed ${createCatDto.breed} has been added to the system.`
    //     };
    // }
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    findAll() {
        return this.catsService.findAll()
    }

    @Get(":id")
    find(@Param('id') id: number) {
        return this.catsService.find(id);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
        return this.catsService.update(id, updateCatDto);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: number) {
        return this.catsService.delete(id);
    }
}
