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

const BaseMongooseModel = mongoose.model('BaseGpsData1', dataSchema);


export default class GpsDataModel1 extends BaseMongooseModel {

}