import { Model,model } from "mongoose";
import { Mongo } from "../../../data-layer/adapters/Mongo";
import { IProductDocument } from "../../../data-layer/data-abstracts/repositories/IProductDocument";
import { ProductSchema } from "../../../data-layer/data-abstracts/repositories/ProductSchema";

export type ProductMod = Model<IProductDocument>;

export const ProductRepo:ProductMod = Mongo.mongooseConnection.model<IProductDocument>("product", ProductSchema);

