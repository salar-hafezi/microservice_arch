import { Model } from "mongoose";
import { Mongo } from "../../../data-layer/adapters/Mongo";
import { IProductDocument } from "./IProductDocument";
import { ProductSchema } from "./ProductSchema";

export type ProductMod = Model<IProductDocument>;

export const ProductRepo:ProductMod = Mongo.mongooseConnection.model<IProductDocument>("product", ProductSchema);

