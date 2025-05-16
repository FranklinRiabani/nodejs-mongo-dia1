const express = require('express');

const mongoose = require('mongoose');

const User = require('./models/User');




const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://mongoadmin:12345678@localhost:27017/UPDS?authSource=admin',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conectado a la base de datos');
    })
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
    }
)


app.get('/',(req,res)=>{
  res.send('Hola UPDS');
});





app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});








app.put('/',(req,res)=>{
    res.json({
        message: 'Usuario Actualizado',
    });
});

app.patch('/',(req,res)=>{
    res.json({
        message: 'Usuario Modificado',
    });
}
);
app.delete('/',(req,res)=>{
    res.json({
        message: 'Usuario Eliminado',
    });
}
);



app.listen(port, () => {
  console.log(`servidor corriendo en ${port}`);
}
);