import { AddItemDto } from './dto/add-item.dto';
import { ShoppingCartService } from './shopping-cart.service';
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ShoppingCart } from './interfaces/shopping-cart.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(
        private readonly shoppingCartService: ShoppingCartService
    ) {}

    @Get()
    @UseGuards(AuthGuard())
    findAll(): Promise<ShoppingCart[]> {
        return this.shoppingCartService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    findOne(@Param('id') id): Promise<ShoppingCart> {
        return this.shoppingCartService.findOne(id);
    }

    @Post()
    @UseGuards(AuthGuard())
    create(@Body() addItemDto: AddItemDto): Promise<ShoppingCart> {
        return this.shoppingCartService.create(addItemDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    delete(@Param('id') id): Promise<ShoppingCart> {
        return this.shoppingCartService.delete(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard())
    update(@Body() updateItemDto: AddItemDto, @Param('id') id): Promise<ShoppingCart> {
        return this.shoppingCartService.update(id, updateItemDto)
    }
}
