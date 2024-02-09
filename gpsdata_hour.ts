const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    deviceId: String,
    lat: Number,
    lon: Number,
    gpsDate: Date,

}, {
    collection: "gpsdata_hour",
    timeseries: {
        timeField: 'gpsDate',
        metaField: 'deviceId',
        granularity: 'hours',
    }
});

const BaseMongooseModel = mongoose.model('BaseGpsDataHour', dataSchema);


export default class GpsDataHourModel extends BaseMongooseModel {

}