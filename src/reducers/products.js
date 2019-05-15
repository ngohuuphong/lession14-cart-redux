var initialState = [
    {
        id : 1,
        name: 'Iphone 8 Plus',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419778',
        description: 'Production By Apple',
        price: 500,
        inventory: 12,
        rating: 4
    },
    {
        id : 2,
        name: 'Samsung Note 9',
        image: 'https://cdn1.vienthonga.vn/image/2018/7/1/samsung-galaxy-note9-600x600.jpg',
        description: 'Production By Samsung',
        price: 1000,
        inventory: 5,
        rating: 5
    },
    {
        id : 3,
        name: 'Nokia N95',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41VLS1i654L.jpg',
        description: 'Production By Nokia',
        price: 300,
        inventory: 20,
        rating: 2
    }
];

const products = ( state = initialState, action ) =>{
    switch(action.type){

        default : return [...state];
    }
}

export default products;