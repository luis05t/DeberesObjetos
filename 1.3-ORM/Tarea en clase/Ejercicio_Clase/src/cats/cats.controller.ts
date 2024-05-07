import { Controller, Get, Post, HttpCode, Param, Body, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/create-cat.dto'; 

@Controller('cats')
export class CatsController {
     // @Post()
   // create() : string {
    //    return 'This action adds a new cat';
   // }

    @Get()
    @HttpCode(418)
    findAll () : string {
        return  'This action returns all cats';
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id)
        return `This action returns a #${params.id} cat`;
    }
    @Post ()
    async create(@Body() createCatDto: CreateCatDto) {
        return ' This action adds a new cat'
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }
   
}
