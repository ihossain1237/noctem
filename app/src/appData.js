/**
 * @return {string}
 */
let ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};
let createProduct = (name, price, isNew, onSale, image) => {
    return {
        id: ID(),
        name: name,
        price: price,
        isNew: isNew,
        onSale: onSale,
        image: image
    }

};

export const appData = {
    men: {
        shirts: [
            createProduct('Chest-pocket cotton shirt', 59.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53060758_94.jpg?ts=1562837625474&imwidth=640&imdensity=1"),
            createProduct('Slim fit cotton shirt', 99.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53045715_92.jpg?ts=1563891004861&imwidth=625&imdensity=1"),
            createProduct('Regular fit mao collar shirt', 69.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53023706_50.jpg?ts=1563355989655&imwidth=625&imdensity=1"),
            createProduct('Regular fit pocket cotton shirt', 69.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53043697_08_D1.jpg?ts=1562841526321&imwidth=625&imdensity=1"),
            createProduct('Regular fit pocket cotton shirt', 69.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53043697_56.jpg?ts=1563355989655&imwidth=625&imdensity=1"),
            createProduct('Slim fit modal cotton shirt', 69.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53015721_37.jpg?ts=1563543142610&imwidth=625&imdensity=1'),
            createProduct('Slim fit stretch cotton shirt', 69.99, true, false, "https://shop.mango.com/ca/men/shirts-plain/slim-fit-stretch-cotton-shirt_53070510.html?c=78&n=1&s=prendas_he.familia;120"),
            createProduct('Slim fit structured cotton shirt', 99.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/51055012_01.jpg?ts=1563891004861&imwidth=625&imdensity=1'),
            createProduct('Slim fit inner print shirt', 99.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/51025725_56.jpg?ts=1565716818710&imwidth=625&imdensity=1"),
            createProduct('Slim fit stretch cotton shirt', 69.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53070510_01.jpg?ts=1561538041311&imwidth=625&imdensity=1"),
        ],
        tShirts: [
            createProduct('Cotton linen-blend knit t-shirt', 49.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57053253_54.jpg?ts=1563546735974&imwidth=625&imdensity=1'),
            createProduct('Pocket cotton t-shirt', 29.99, true, false, "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020505_01_D1.jpg?ts=1556116768056&imwidth=625&imdensity=1"),
            createProduct('Pocket cotton t-shirt', 29.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020505_70_D1.jpg?ts=1556559255316&imwidth=625&imdensity=1'),
            createProduct('Pocket cotton t-shirt', 29.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/outfit/S20/53020505_56-99999999_01.jpg?ts=1556192010655&imwidth=625&imdensity=1'),
            createProduct('Pocket cotton t-shirt', 29.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020505_43.jpg?ts=1557340449184&imwidth=625&imdensity=1'),
            createProduct('Structured henley collar t-shirt', 44.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53095709_02.jpg?ts=1561631619519&imwidth=625&imdensity=1'),
            createProduct('Structured henley collar t-shirt', 44.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53095709_56.jpg?ts=1561973607325&imwidth=625&imdensity=1'),
            createProduct('Color block cotton t-shirt', 39.99, true, false, 'https://shop.mango.com/ca/men/t-shirts-printed/color-block-cotton-t-shirt_53020507.html?c=52&n=1&s=prendas_he.familia;115'),
            createProduct('Structured henley collar t-shirt', 49.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53095709_37.jpg?ts=1561631619519&imwidth=625&imdensity=1'),
            createProduct('Structured henley collar t-shirt', 49.99, true, false, 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53095709_76.jpg?ts=1561631619519&imwidth=625&imdensity=1'),
        ],
        polos: [
            createProduct('Canterbury X J.Crew Editions rugby shirt', 125.50, true, false, 'https://www.jcrew.com/s7-img-facade/M1056_EB4311?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850'),
            createProduct('Slim Fit Jersey Polo Shirt', 7.99, true, false, 'https://lp2.hm.com/hmgoepprod?set=source[/a2/b4/a2b46806b77adea3cd62f99fb80cfd22038b4f77.jpg],origin[dam],category[MEN_TSHIRTSTANKS_POLO],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]'),
            createProduct('Polo Shirt', 7.99, true, false, 'https://images-na.ssl-images-amazon.com/images/I/71v7nf%2Be0OL._UX679_.jpg'),
            createProduct('The Iconic Mesh Polo Shirt - All Fits', 85.00, true, false, 'https://www.rlmedia.io/is/image/PoloGSI/s7-1266692_lifestyle?$rl_506_630$'),
            createProduct('The Earth Polo ', 89.50, true, false, 'https://www.rlmedia.io/is/image/PoloGSI/s7-1320393_alternate10?$rl_392_pdp$&crop=195,0,1605,2000&anchor=1000,1000'),
            createProduct('nterlock Short-Sleeve Polo Shirt - All Fits', 85.00, true, false, 'https://www.rlmedia.io/is/image/PoloGSI/s7-1266703_alternate1?$rl_392_pdp$&crop=195,0,1605,2000&anchor=1000,1000'),
            createProduct('Big Pony Mesh Polo Shirt - All Fits ', 69.99, true, false, 'https://www.rlmedia.io/is/image/PoloGSI/s7-1294002_alternate1?$rl_392_pdp$&crop=195,0,1605,2000&anchor=1000,1000'),
            createProduct('Men\'s Polo Shirt ', 90.00, true, false, 'https://www.rlmedia.io/is/image/PoloGSI/s7-CYO0001_lifestyle?$rl_392_pdp$'),
            createProduct(' US Open Mesh Polo Shirt', 98.50
                , true, false, 'https://www.rlmedia.io/is/image/PoloGSI/s7-1336973_lifestyle?$rl_392_pdp$'),
            createProduct('The USA Polo ', 148.00, true, false, 'https://www.rlmedia.io/is/image/PoloGSI/s7-1336977_lifestyle?$rl_392_pdp$'),
        ],
    },
    women: {},
    boys: {},
    girls: {},
    user: {},
    cart: {}

};