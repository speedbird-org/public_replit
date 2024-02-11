import GpsDataModel1 from "./gpsdata";
import GpsDataModel5 from "./gpsdata-5";
import GpsDataControlModel from "./gpsdata-control";
import GpsDataModel3 from "./gpsdata_hour";
import GpsDataModel2 from "./gpsdata_min";

const deviceId = "1";
//Feb 1 to Feb 10
const startDate = "2024-02-05T00:30:00.177Z";
const limit = 1000;

async function readGpsDataModel1() {
    const st = Date.now();
    await GpsDataModel1.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in Model 1: ${et - st}`)
}

async function readGpsDataModel2() {
    const st = Date.now();
    await GpsDataModel2.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in Model 2: ${et - st}`)
}

async function readGpsDataModel3() {
    const st = Date.now();
    await GpsDataModel3.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in Model 3: ${et - st}`)
}

async function readGpsDataModel5() {
    const st = Date.now();
    await GpsDataModel5.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in Model 5: ${et - st}`)
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
    readGpsDataModel5();

    // readGpsDataNew();

}