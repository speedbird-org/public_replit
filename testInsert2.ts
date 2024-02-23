import GpsDataModel1 from "./gpsdata";
import GpsDataModel4 from "./gpsdata-4";
import GpsDataModel5 from "./gpsdata-5";
import GpsDataModel6 from "./gpsdata-6";
import GpsDataControlModel from "./gpsdata-control";
import GpsDataModel3 from "./gpsdata_hour";
import GpsDataModel2 from "./gpsdata_min";

function getRandomWholeNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function getRandomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate random data
function generateRandomData(numEntries: number): any {
    let list: any = [];
    const now = new Date().getTime();

    for (let i = 0; i < numEntries; i++) {
        list.push({
            deviceId: getRandomWholeNumber(1, 100),
            gpsDate: new Date(now + i * 5),
            lat: getRandomNumber(11.0, 11.2),
            lon: getRandomNumber(77.4, 77.5),
        })
    }
    return list;
}

export async function populateOrderedDataToDb() {

    for (let index = 1; index <= 10000; index++) {

        let list = generateRandomData(1000);
        let res = await Promise.all([
            GpsDataModel1.insertMany(list),
            GpsDataControlModel.insertMany(list),

            // GpsDataModel5.insertMany(list),
            // GpsDataModel6.insertMany(list),

        ]);
        console.log(`Date: ${new Date().toISOString()}  Inserted ${res[0].length} docs. index: ${index}`);
    }

    console.log(`ALL OPS COMPLETED !!!!`);
}



export async function testInsert() {

    for (let index = 1; index <= 1; index++) {

        let list = generateRandomData(1000);
        let res: any = await Promise.all([
            // GpsDataModel1.insertMany(list),
            // GpsDataControlModel.insertMany(list),
            // GpsDataModel2.insertMany(list),
            // GpsDataModel3.insertMany(list),

            GpsDataModel4.smartInsert(list),

        ]);
        console.log(`Date: ${new Date().toISOString()}  Inserted ${res[0]?.length} docs. index: ${index}`);
    }
}


export async function testNanAsInsert() {
    const docs = await GpsDataControlModel.insertMany([{
        deviceId: "4",
        gpsDate: new Date(),
        lat: parseInt(""),
        lon: 77,
    }]);
    console.log(docs);
}
