const express = require("express"); 
const router = express.Router();

const lugares = [
    {
        nombre: "México",
        texto: "Es el lugar más turístico del mundo, con una diversidad inigualable.", 
        visitas: "45 millones", 
        imagen: ["assets/imgs/mexico.png", "assets/imgs/mexico1.png"]
    }, 
    {
        nombre: "China",
        texto: "Es el lugar más turístico del mundo, con una diversidad inigualable.", 
        visitas: "66 millones", 
        imagen: ["assets/imgs/china.png", "assets/imgs/china1.png"]
    }, 
    {
        nombre: "Corea",
        texto: "Es el lugar más turístico del mundo, con una diversidad inigualable.", 
        visitas: "17 millones", 
        imagen: ["assets/imgs/corea.png", "assets/imgs/corea1.png"]
    }
];

router.get('/api', (req, res) => {
    const lugar = lugares; 
    res.send({
        lugares: lugar
    });
});

module.exports = router; 