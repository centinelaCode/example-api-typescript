import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interfaces/interfaces';

const ItemSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ['gasoline', 'electric'],
      required: true,
    },
    year: {
      type: Number,
      requiered: true,
    },
    description: {
      type: String,
      requiered: true,
    },
    price: {
      type: Number,
      requiered: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel;