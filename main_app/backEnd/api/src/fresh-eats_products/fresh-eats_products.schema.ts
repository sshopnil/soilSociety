import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FreshEatsProductsDocument = FreshEatsProducts & Document;

@Schema()
export class FreshEatsProducts{
    
    @Prop({required: true})
    seller_id: number
    @Prop({required: true})
    name: string
    @Prop({required: true})
    price: number
    @Prop({required: true})
    img_src: string
    @Prop({required: true})
    rem_item: number
    @Prop({required: false})
    rating: number
    @Prop({required: false})
    description: string

}

export const FreshEatsProductsSchema = SchemaFactory.createForClass(FreshEatsProducts);