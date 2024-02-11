const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    deviceId: String,
    lat: Number,
    lon: Number,
    gpsDate: Date,

}, {
    collection: "gpsdata_6",
});

dataSchema.index({deviceId: 1, gpsDate: 1});

const BaseMongooseModel = mongoose.model('BaseGpsData6', dataSchema);


export default class GpsDataModel6 extends BaseMongooseModel {

}