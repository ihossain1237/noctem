const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

connectDB();

app.use(express.json({extended:false}));
app.use(cors({origin:'http://localhost:3000'}));

app.use('/api/products',require('./routes/products'));
app.use('/api/signUp',require('./routes/user'));
app.use('/api/signIn',require('./routes/auth'));
app.use('/api/cart',require('./routes/cart'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));