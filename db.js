import sqlite3 from 'sqlite3';

const FuelType = {
    DIESEL: 'DIESEL',
    GASOLINE: 'GASOLINE',
    ELECTRIC: 'ELECTRIC',
    HYBRID: 'HYBRID'
};
const TransmissionType = {
    AUTOMATIC : 'AUTOMATIC',
    MANUAL : 'MANUAL',
}
const BodyType = {
    COUPE : 'COUPE',
    SUV: 'SUV',
    SEDAN: 'SEDAN',
    CABRIO: 'CABRIO',
    STATION_WAGON: 'STATION_WAGON',
}

const db = new sqlite3.Database('./app.db', (err) => {
    if (err) {
        return console.error('❌', err.message);
    }
    console.log('✅ Connected to the SQlite database.');
});

export {
    db
}

