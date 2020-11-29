module.exports = {
    home: (req,res) => {
        res.send('<br> 🔹 Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. <br> Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. <br> Recuerda:¡nunca pares de creer en ti!.');
    },
    creditos: (req,res) => {
        res.send(`<br> 🔹 Autora: Eliana Naguila `);
    }
}
