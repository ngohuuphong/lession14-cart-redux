import * as types from './../constants/ActionType';

//var data = JSON.parse(localStorage.getItem('CART'));

//var initialState = data ? data : [];
var initialState = [
    {
        product : {
            id          : 1,
            name        : 'Iphone 8 Plus',
            image       : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419778',
            description : 'Production By Apple',
            price       : 500,
            inventory   : 12,
            rating      : 4
        },
        quantity : 5
    },
    {
        product : {
            id : 3,
            name: 'Nokia N95',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41VLS1i654L.jpg',
            description: 'Production By Nokia',
            price: 300,
            inventory: 20,
            rating: 2
        },
        quantity : 3
    }
];

const cart = ( state = initialState, action ) =>{
    switch(action.type){

        case types.ADD_TO_CART:
            console.log(action);
            return [...state];

        default : return [...state];
    }
}

export default cart;