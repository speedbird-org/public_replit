const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    deviceId: String,
    lat: Number,
    lon: Number,
    gpsDate: Date,

}, {
    timeseries: {
        timeField: 'gpsDate',
        metaField: 'deviceId',
        granularity: 'seconds',
    },
    collection: "gpsdata_5",
});

const BaseMongooseModel = mongoose.model('BaseGpsData5', dataSchema);


export default class GpsDataModel5 extends BaseMongooseModel {

}