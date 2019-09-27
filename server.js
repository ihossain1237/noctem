const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const path = require('path');
connectDB();

app.use(express.json({extended:false}));
app.use(cors({origin:'*'}));

app.use('/api/products',require('./routes/products'));
app.use('/api/signUp',require('./routes/user'));
app.use('/api/signIn',require('./routes/auth'));
app.use('/api/cart',require('./routes/cart'));

if (process.env.NODE_ENV==='production'){
    app.use(express.static('app/build'));
    app.get("/*",(req,res)=>res.sendFile(path.resolve(__dirname,'app','build','index.html')));
}

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));