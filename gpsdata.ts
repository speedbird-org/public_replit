const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    deviceId: String,
    lat: Number,
    lon: Number,
    gpsDate: Date,

}, {
    collection: "gpsdata",
    timeseries: {
        timeField: 'gpsDate',
        metaField: 'deviceId',
        granularity: 'seconds',
    }
});

const BaseMongooseModel = mongoose.model('BaseGpsDataSec', dataSchema);


export default class GpsDataSecondsModel extends BaseMongooseModel {

}