import { Controller, Delete, Get, Head, HttpCode, Param, Patch, Post, Put, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { stringify } from 'querystring';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(['', 'ab*cd'])
    @HttpCode(204)
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('redirect')
    @Redirect('https://github.com/raahimfareed', 301)
    redirects() {}

    @Get('docs')
    @Redirect('https://github.com/raahimfareed', 301)
    getDocs(@Query('version') version) {
        console.log(version)
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return {
    //         id: id,
    //         query: `You queried ${id}`
    //     }
    // }

    @Post()
    getTest(@Req() request: Request) {
        console.log(request.body)
        // @ts-ignore
        return { key: "Age in 13 years", value: request.body.age + 13 }
    }
}
