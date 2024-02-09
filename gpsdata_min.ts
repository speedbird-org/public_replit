const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    deviceId: String,
    lat: Number,
    lon: Number,
    gpsDate: Date,

}, {
    collection: "gpsdata_min",
    timeseries: {
        timeField: 'gpsDate',
        metaField: 'deviceId',
        granularity: 'minutes',
    }
});

const BaseMongooseModel = mongoose.model('BaseGpsDataMin', dataSchema);


export default class GpsDataMinModel extends BaseMongooseModel {

}