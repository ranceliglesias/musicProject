import express from "express"
import bodyParser from "body-parser"

const app = express();
const parseEncoded = bodyParser.urlencoded({ extended: false});

app.use(express.static('public'));

const bandas = {
  "nombre": "Shakira",
  "id": "1",
  "logo": "",
  "imagen": "",
  "genero": "Pop",
  "discografia": "Sony",
  "albums": [{}],
  "canciones": [{}]
}

const clientes = {
  'nombre': 'Rancel Iglesias',
  'clave': '',
  'correo': 'rancel@gmail.com'
}

// Rutas CRUD para las bandas
app.get('/bandas', (req, resp) =>{
  const {limit} = req.query;
  if (limit >=0){
    resp.json(bandas.slice(0, limit));
  }else {
    resp.json(bandas);
  }
})

app.post('/bandas', parseEncoded, (req, resp) =>{
  const {name, description} = req.body;
  bandas[name] = description;
  resp.status(201).json(name);
});

app.get('/bandas/:name', (req, resp) =>{
  const {name} = req.params;
  const description = bandas[name];
  description ? resp.json(description) : resp.status(404).json('No hay descripcion para ' + name);
})

app.delete('/bandas/:name', (req, resp) =>{
  delete blocks[req.params.name]
  resp.sendStatus(200)
})

// Ruta Read para los clientes
app.get('/clientes', (req, resp) =>{
  const {limit} = req.query;
  if (limit >=0){
    resp.json(clientes.slice(0, limit));
  }else {
    resp.json(clientes);
  }
})


// Escuchando por el puerto 3000
const port = 3000
app.listen(port, console.log(`listening port ${port}`))
