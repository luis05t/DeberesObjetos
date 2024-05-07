import { Body, Controller, Delete, HttpCode, Param, Put, Get } from '@nestjs/common';
import { UpdateCatDto } from './dto/create-cat.dto';
@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return `This action returns all cats`
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto){
     return ` This action updates a #${id} cat`;
   }
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
        return `This will delete a cat with the id ${id}`;
    }
}
