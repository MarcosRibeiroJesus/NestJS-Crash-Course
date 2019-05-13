import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, UseGuards } from '@nestjs/common';
import { create } from 'domain';
import { CreateItemDto } from "./dto/create-item.dto";
import { ItemsService } from "./items.service";
import { Item } from "./interfaces/item.interface";
import { ValidationPipe } from 'src/common/validation.pipe';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService
    ) {}

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @UseGuards(AuthGuard())
    create(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(CreateItemDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard())
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto)
    }
}
