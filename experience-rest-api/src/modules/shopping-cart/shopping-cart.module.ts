import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShoppingCartSchema } from './schemas/shopping-cart.schema';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ShoppingCart', schema: ShoppingCartSchema}])],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
