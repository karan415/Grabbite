import pizza from '../Img/RestoPizza2.png'
import pizza2 from '..//Img/restorolls.png'
import pizza3 from '../Img/Restopizaa.png'
import vegthali from '../Img/veg_thali.png';
import product from '../Img/ParadisePizaa.png'
import product2 from '../Img/LoadedPizaa.png'
const RestoData = {
    kfc: [
        {
            id: 0,
            image: pizza,
            prize: 'rs.120 off above rs.190',
            restoname: 'KFC',
            xyds: '4.4.',
            time: '32 mins',
            dish: 'pizaas',
            location: 'sector 59',
        },
    ],
    dominoz: [
        {
            id: 1,
            image: pizza2,
            prize: 'rs.120 off above rs.190',
            restoname: 'dominoz',
            xyds: '4.4.',
            time: '32 mins',
            dish: 'Burgers, Biryani, American, Snacks, Fast Food',
            location: 'sector 55',
        },
    ],

    pizaahut: [
        {
            id: 2,
            image: pizza3,
            prize: 'rs.120 off above rs.190',
            restoname: "pizaa hut",
            xyds: '4.4.',
            time: '32 mins',
            dish: 'Pizzas, Italian, Pastas, Desserts',
            location: 'sector 53',
        },
    ],
    lapinoz: [
        {
            id: 3,
            image: vegthali,
            prize: 'rs.120 off above rs.190',
            restoname: 'la pinoz pizaa',
            xyds: '4.4.',
            time: '32 mins',
            dish: 'North Indian, South Indian, Chinese, Sweets, Desserts, Tandoor',
            location: 'sector 112',
        },
    ],
    burger_king: [
        {
            id: 4,
            image: product,
            prize: 'rs.120 off above rs.190',
            restoname: "burger king",
            xyds: '4.4.',
            time: '32 mins',
            dish: 'Pizzas, Pastas, Italian, Desserts, Beverages',
            location: 'sector 39',
        },
    ],
    Chicago_Pizza: [
        {
            id: 5,
            image: product2,
            prize: 'rs.120 off above rs.190',
            restoname: 'Chicago Pizza',
            xyds: '4.4.',
            time: '32 mins',
            dish: 'pizaas',
            location: 'sector 59',
        },
    ],

}
export default RestoData