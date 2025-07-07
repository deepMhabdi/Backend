import mongoose, {model, Schema } from "mongoose";

const subsciptionSchema = new Schema({
    subscriber: {
        typeOf: Schema.Types.ObjectId, //one who is subscribing
        ref: "User"
    },
    channel: {
        typeOf: Schema.Types.ObjectId, //one to whom 'subscriber is subscribing
        ref: "User"
    }
}, {timestamps: true})

export  const Subsciption = mongoose.model("Subsciption", subsciptionSchema)