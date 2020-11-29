const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    mostrarJSON: (req,res)  => {
        // Leyendo y parseando (en array) el contenido de heroes.json        
        res.send(heroes);
    },
    detalle: (req,res)  => {
    // Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find(heroe => {
		return heroe.id == req.params.id;
	});
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
	if(heroe){
		res.send(`<br> Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
	}else{
		res.send('<br> No se ha encontrado la información');
	}

    },
    bio: (req,res)  => {
        // Acá lo primero será encontrar al héroe que corresponda
	let hero = heroes.find(heroe => {
		return heroe.id == req.params.id;
	});
	if(hero){
		if(req.params.ok==":ok"){
			res.send(`<br> Hola, mi nombre es ${hero.nombre}. <br>🔹 Reseña:<br> ${hero.resenia}`);
		}
		if(req.params.ok!==":ok"){
			res.send(`<br> Hola, mi nombre es ${hero.nombre} y soy ${hero.profesion}.<br>Lamento que no quieras saber más de mi :( `);
		}
	}else{
		res.send('<br> No encontramos un héroe para mostrarte su biografía');
	}

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
	// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
	// Si nó vino el parámetro se envía el mensaje de error

    }
    
}