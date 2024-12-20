import { Prop, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

export class User {
    @Prop ({ required: true })
    name: string;

    @Prop ({ required: true,unique: true })
    email: string; 

    @Prop ({ required: true })
    password: string;

    @Prop ()
    phone: string;
    }

export const UserSchema = SchemaFactory.createForClass(User);