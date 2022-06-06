const express = require ("express")
;
const cors= require ("cors");

const PORT = 5000;

const server = express();
const router = express.Router(); 

router.get("/davidBowie", (req, res) => {
    const davidBowie = [
        {
        cantante: "David Bowie'", album: "Aladdin Sane", año: "1973", imagen: "https://m.media-amazon.com/images/I/614a0M057RL._AC_SL1500_.jpg"
    }, 
    {
        cantante: "David Bowie", album: "Heroes", año: "1977", imagen: "https://static.posters.cz/image/750/posters/david-bowie-heroes-i86563.jpg"
    },
    {
        cantante: "David Bowie'", album: "Ziggy Stardust", año: "1972", imagen: "https://static.posters.cz/image/750/posters/david-bowie-ziggy-stardust-i106944.jpg"
    }
];

    res.send(davidBowie)
})

router.get("/beers", (req, res) => {
    const beers = [
    {
        nombre: "Alhambra 1925", ciudad: "Granada", imagen: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg"
    },
    {
        nombre: "Mahou", ciudad: Madrid, imagen:"https://www.encopadebalon.com/3550-large_default/cerveza-mahou-clasica-pack-24-botellines.jpg"
    },
    {
        nombre: "Estrella Galicia", ciudad: "A Coruña", imagen:"https://cdn.shopify.com/s/files/1/0271/8158/0388/products/estrella-galicia-escerveza-3.jpg?v=1648893181"
    }
];
    
    res.send(beers)
});

server.use(
    cors({
        origin:"*",
        credentials: true,
    })
);

server.use("/", router)

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
