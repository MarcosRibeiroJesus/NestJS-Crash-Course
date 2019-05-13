import * as mongoose from 'mongoose';

export const ShoppingCartSchema = new mongoose.Schema({
    // id: String,
    name: String,
    description: String,
    qty: Number
  });