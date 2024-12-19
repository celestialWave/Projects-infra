import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


export type EcoleDocument = Ecole & Document;

@Schema()
export class Ecole {
    _id: Types.ObjectId

    @Prop()
    name: string;

    @Prop()
    year:Date;

    @Prop()
    city:string;

    @Prop()
    region:string;

    @Prop()
    country:string;

    @Prop()
    maxUsers:number;
    @Prop()
    description?:string; 

    @Prop()
    logo: string;

    @Prop()
    isDeleted: boolean;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;

    @Prop()
    deletedAt: Date;
}

export const EcoleSchema = SchemaFactory.createForClass(Ecole);

