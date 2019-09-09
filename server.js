const express = require('express');
const connectDB = require('./config/db');
const Product = require('./models/Products');
const cors = require('cors');
const app = express();

connectDB();

const appData = [
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53070510_56.jpg?ts=1560843173499&imwidth=625&imdensity=1",
        "name": "Slim fit cotton shirt",
        "price": 69.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/outfit/S20/53070510_99-99999999_01.jpg?ts=1565962821515&imwidth=625&imdensity=1",
        "name": "Slim fit stretch cotton shirt",
        "price": 69.99,
        "category": "men",
        "type": "shirts"

    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53070510_01.jpg?ts=1561538041311&imwidth=625&imdensity=1",
        "name": "Slim fit stretch cotton shirt",
        "price": 69.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53070510_50.jpg?ts=1560876681783&imwidth=625&imdensity=1",
        "name": "Slim fit stretch cotton shirt",
        "price": 69.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/outfit/S20/53070510_78-99999999_01.jpg?ts=1560876681783&imwidth=625&imdensity=1",
        "name": "Slim fit stretch cotton shirt",
        "price": 69.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/outfit/S20/53083693_TM-99999999_01.jpg?ts=1558362841981&imwidth=625&imdensity=1",
        "name": "Slim fit cotton chambray shirt",
        "price": 99.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53045715_92_D1.jpg?ts=1563892455886&imwidth=625&imdensity=1",
        "name": "Slim fit cotton shirt",
        "price": 99.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020461_99.jpg?ts=1554280397909&imwidth=625&imdensity=1",
        "name": "Jackson Worker Shirt",
        "price": 89.95,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53073033_TM.jpg?ts=1560843173499&imwidth=625&imdensity=1",
        "name": "Slim-fit Tailored stretch cotton shirt",
        "price": 99.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020499_35.jpg?ts=1562841526321&imwidth=625&imdensity=1",
        "name": "Silk linen knit shir",
        "price": 69.99,
        "category": "men",
        "type": "shirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53095709_56.jpg?ts=1561973607325&imwidth=625&imdensity=1",
        "name": "Structured henley collar t-shirt",
        "price": 44.99,
        "category": "men",
        "type": "tShirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53040635_01_D1.jpg?ts=1556116768056&imwidth=625&imdensity=1",
        "name": "Cotton printed t-shirt",
        "price": 39.99,
        "category": "men",
        "type": "tShirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53095709_02.jpg?ts=1561631619519&imwidth=625&imdensity=1",
        "name": "Structured henley collar t-shirt",
        "price": 44.99,
        "category": "men",
        "type": "tshirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53043720_01.jpg?ts=1559065207453&imwidth=625&imdensity=1",
        "name": "Embroidered cotton shirt",
        "price": 44.99,
        "category": "men",
        "type": "tshirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53095709_37.jpg?ts=1561631619519&imwidth=625&imdensity=1",
        "name": "Structured henley collar t-shirt",
        "price": 44.99,
        "category": "men",
        "type": "tshirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53010637_01.jpg?ts=1555342677279&imwidth=625&imdensity=1",
        "name": "Cotton printed t-shirt",
        "price": 39.99,
        "category": "men",
        "type": "tshirts"
    },
    {
        "image": "https://www.hautelookcdn.com/products/PS410824YM/large/10232043.jpg",
        "name": "Crew Neck Long Tee",
        "price": 7.49,
        "category": "men",
        "type": "tshirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53033721_94.jpg?ts=1559558040073&imwidth=625&imdensity=1",
        "name": "Embroidered cotton shirt",
        "price": 44.99,
        "category": "men",
        "type": "tshirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53073579_20_D1.jpg?ts=1560357219724&imwidth=625&imdensity=1",
        "name": "Pocket printed cotton t-shirt",
        "price": 39.99,
        "category": "men",
        "type": "tshirts"
    },
    {
        "image": "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/53020505_43.jpg?ts=1557340449184&imwidth=625&imdensity=1",
        "name": "Pocket cotton t-shirt",
        "price": 29.99,
        "category": "men",
        "type": "tshirts"
    }
];
app.use(express.json({extended:false}));
app.use(cors({origin:'http://localhost:3000'}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use('/api/products',require('./routes/products'));
app.use('/api/signUp',require('./routes/user'));
app.use('/api/signIn',require('./routes/auth'));
app.use('/api/cart',require('./routes/cart'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));