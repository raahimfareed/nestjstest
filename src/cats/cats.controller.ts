import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

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

    @Get('async')
    async findAllAsync(): Promise<any[]> {
        return [1, 2, 3];
    }
}
