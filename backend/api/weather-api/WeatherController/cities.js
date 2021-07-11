const cities ={
    DHAKA: {
        latitude: 23.810331,
        longitude: 90.412521
    },
    CHITTAGONG: {
        latitude: 22.341900,
        longitude: 91.815536
    },

    KHULNA: {
        latitude: 22.820000,
        longitude: 89.550003
    },

    SYLHET: {
        latitude: 24.894802,
        longitude: 91.869034
    },

    JASHORE: {
        latitude: 23.170664,
        longitude: 89.212418
    }

}

fetchCoordinate = (city)=>{
    return cities[city];

}


fetchCities =() =>{
   return cities;
}

module.exports = {
    fetchCoordinate,
    fetchCities
}