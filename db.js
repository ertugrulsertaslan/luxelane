

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
//module.exports
export const db = {
    cars: [
        {
            id: 'ferrari',
            brand: 'Ferrari',
            model: '458',
            hp: 562,
            seats: 2,
            dailyPrice: 1000,
            thumbnail: '/img/ferrari.png',
            img: [],
            fuel : FuelType.GASOLINE,
            transmission : TransmissionType.AUTOMATIC,
            bodyType : BodyType.COUPE,
            doors : 2,
            minDriverAge:22,
            minLicenseAge :5,
            zeroToHundredKmh: 3.4, 
            
        },
        {
            id :'lamborghini',
            brand : 'Lamborghini',
            model: 'Aventador',
            hp: 769,
            seats: 2,
            dailyPrice: 1100,
            thumbnail: '/img/lamborghini.png',
            img: [],
            fuel : FuelType.GASOLINE,
            transmission : TransmissionType.AUTOMATIC,
            bodyType : BodyType.COUPE,
            doors : 2,
            minDriverAge:22,
            minLicenseAge :5,
            zeroToHundredKmh: 2.9, 

        },
        {
            id :'mercedes',
            brand : 'Mercedes',
            model: 'AMG GT',
            hp: 523,
            seats: 2,
            dailyPrice: 900,
            thumbnail: '/img/mercedes.png',
            img: [],
            fuel : FuelType.GASOLINE,
            transmission : TransmissionType.AUTOMATIC,
            bodyType : BodyType.COUPE,
            doors : 2,
            minDriverAge:22,
            minLicenseAge :5,
            zeroToHundredKmh: 4, 

        },
        {
            id :'porsche',
            brand : 'Porsche',
            model: '718',
            hp: 300,
            seats: 2,
            dailyPrice: 600,
            thumbnail: '/img/porsche.png', 
            img: [],
            fuel : FuelType.GASOLINE,
            transmission : TransmissionType.AUTOMATIC,
            bodyType : BodyType.COUPE,
            doors : 2,
            minDriverAge:22,
            minLicenseAge :5,
            zeroToHundredKmh: 4.7, 

        }
        
    ]
}