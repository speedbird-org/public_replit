import GpsDataSecondsModel from "./gpsdata";
import GpsDataControlModel from "./gpsdata-control";
import GpsDataHourModel from "./gpsdata_hour";
import GpsDataMinModel from "./gpsdata_min";

const deviceId = "2";
//Feb 1 to Feb 10
const startDate = "2024-02-04T10:30:00.177Z";
const limit = 1000;

async function readGpsDataModel1() {
    const st = Date.now();
    await GpsDataSecondsModel.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in Model 1: ${et - st}`)
}

async function readGpsDataModel2() {
    const st = Date.now();
    await GpsDataMinModel.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in Model 2: ${et - st}`)
}

async function readGpsDataModel3() {
    const st = Date.now();
    await GpsDataHourModel.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in Model 3: ${et - st}`)
}


async function readGpsDataOld() {
    const st = Date.now();
    await GpsDataControlModel.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in old Model: ${et - st}`)
}

export async function benchmarkReadOperation() {

    readGpsDataOld();
    readGpsDataModel1();
    readGpsDataModel2();
    readGpsDataModel3();

    // readGpsDataNew();

}