const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const dataSchema = new Schema({

    deviceId: String,
    startMinute: Date,
    docs: [{
        deviceId: String,
        lat: Number,
        lon: Number,
        gpsDate: Date,
    }]
}, {
    collection: "gpsdata_4",
});

dataSchema.index({ 'docs.gpsDate': 1 });
dataSchema.index({ deviceId: 1, startMinute: 1 });

const BaseMongooseModel = mongoose.model('BaseGpsData4', dataSchema);


export default class GpsDataModel4 extends BaseMongooseModel {
    static async smartInsert(docs: any[]) {

        for (let doc of docs) {
            const startDate = moment(doc.gpsDate).utcOffset(0).startOf('minute').toDate();
            console.log(startDate);
            this.findOneAndUpdate({ deviceId: doc.deviceId, startMinute: startDate },
                { $push: { docs: doc } },
                { upsert: true, setDefaultsOnInsert: true }
            ).lean();
        }
    }
}