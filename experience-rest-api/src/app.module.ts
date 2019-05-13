import { AuthenticationMiddleware } from './common/authentication.middleware';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './modules/items/items.controller';
import { ItemsService } from './modules/items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './modules/items/items.module';
import { ShoppingCartController } from './modules/shopping-cart/shopping-cart.controller';
import { ShoppingCartService } from './modules/shopping-cart/shopping-cart.service';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { AuthModule } from './common/auth/auth.module';
import config from "./config/keys";

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ItemsModule, ShoppingCartModule, UsersModule, AuthModule],
  controllers: [AppController, ItemsController, ShoppingCartController, UsersController],
  providers: [AppService, ItemsService, ShoppingCartService],
})
export class AppModule {}
