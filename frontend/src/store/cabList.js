import jeep from "../lottieFiles/jeep.json";
import jeep2 from "../lottieFiles/jeep2.json";
import sedan from "../lottieFiles/sedan.json";
import sports from "../lottieFiles/sports.json";

/*
  1. Prices are given per kilometer
    a) mPrice = morning price
    b) nPrice = night price
*/

const cabList = [
  {
    id: 1,
    img: jeep2,
    name: 'Mini',
    passenger: '4 passenger',
    mPrice: 5, 
    nPrice: 10,
  },
  {
    id: 2,
    img: sedan,
    name: 'Delux',
    passenger: '4 passenger',
    mPrice: 15, 
    nPrice: 30,
  },
  {
    id: 3,
    img: jeep,
    name: 'Premium',
    passenger: '6 passenger',
    mPrice: 30, 
    nPrice: 50,
  },
  {
    id: 4,
    img: sports,
    name: 'VIP',
    passenger: '2 passenger',
    mPrice: 40, 
    nPrice: 50,
  }
]

export default cabList;