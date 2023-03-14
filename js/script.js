function generate(){
	var reto = ["Genera un personaje con estos rasgos:"];
	var genero= ["un hombre", "una mujer"];
	var quiere= ["ser detective", "ser espía", "ser policía", "ser bombero", "ser de la guardía real", "ser astronauta", "ser padre", "ser chef", "es tener un sueño", "es tener una pareja", "es poder ser adoptado", "es poder salir de la pobreza", "es ser repostero", "es ser un deportista", "ser un escritor", "ser actor", "ser el hijo que sus padres quieren", "tener una familia que lo ame", "tener amigos verdaderos", "poder vivir en un mundo de fantasia", "ser un influencer famoso", "ser profesor", "ser guionista", "dejar de trabajar", "dejar a su pareja", "irse de la casa de sus padres"];
	var color= ["moreno", "pálido", "negro", "trigeño", "claro a tu elección", "oscuro a tu elección", "claro con vitiligo oscuro", "oscuro con vitiligo claro", "a tu elección", "fantasia"];
	var ojos= ["negros", "grises", "azules", "rojos", "heterocromáticos", "verdes", "miel", "morados", "naranjas", "rosados", "turquesa", "a tu elección", "ciegos", "blancos", "celestes", "dorados", "cafés"];
	var actitud= ["servicial", "antipática", "débil", "ruda", "inteligente", "torpe", "insegura", "trabajadora", "vaga", "heróica", "solitaria", "risueña", "habladora", "grosera", "gruñona", "alegre", "miedosa", "valiente", "independiente", "dependiente", "yandere", "tsundere"];
	var tiene= ["gafas", "cicatrices", "lunares", "un lunar", "pecas", "brackets", "ojeras", "cuernos", "alas", "escamas", "ningún accesorio", "el accesorio de tu preferencia", "joyería"];
	var rand_reto = Math.floor(Math.random()*reto.length);
	var rand_tiene = Math.floor(Math.random()*tiene.length);
	var rand_ojos = Math.floor(Math.random()*ojos.length);
	var rand_genero = Math.floor(Math.random()*genero.length);
	var rand_color = Math.floor(Math.random()*color.length);
	var rand_actitud = Math.floor(Math.random()*actitud.length);
	var rand_quiere = Math.floor(Math.random()*quiere.length);

	document.getElementById('result').innerHTML = "<h1>Nombre:</h1><div class='alert alert-success'><h2>"+reto[rand_reto]+" Es "+genero[rand_genero]+", su tono de piel es "+color[rand_color]+", sus ojos son "+ojos[rand_ojos]+" y tiene "+tiene[rand_tiene]+". Su personalidad es "+actitud[rand_actitud]+" y su sueño es "+quiere[rand_quiere]+".</h2></div>";

}
