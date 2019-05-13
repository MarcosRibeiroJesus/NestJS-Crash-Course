import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShoppingCart } from './interfaces/shopping-cart.interface';

@Injectable()
export class ShoppingCartService {
  constructor(@InjectModel('ShoppingCart') private readonly itemModel: Model<ShoppingCart>) {}

  async create(shoppingCart: ShoppingCart): Promise<ShoppingCart> {
    const newitem = new this.itemModel(shoppingCart);
    return await newitem.save();
  }

  async delete(id: string): Promise<ShoppingCart> {
      return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, shoppingCart: ShoppingCart): Promise<ShoppingCart> {
    return await this.itemModel.findByIdAndUpdate(id, shoppingCart, { new: true });
}

  async findAll(): Promise<ShoppingCart[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<ShoppingCart> {
    return await this.itemModel.findOne({ _id: id });
  }
}
