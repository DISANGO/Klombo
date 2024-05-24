



const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, PermissionsBitField } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Powered By RTX`);
});

require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const mySecret = process.env.TOKEN; // Accede al token desde las variables de entorno

const statusMessages = ["YT: DISÁNGO","/help | Khelp"];

///Anti mensaje de ghost///

client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));
  if (!channel) return;
  
  channel.send('Mensaje no deseado que quieres eliminar').then(msg => {
      msg.delete(); // Eliminar el mensaje no deseado
  }).catch(console.error);
  
  channel.send('Gracias por invitarme a este servidor, para saber más usa Khelp').catch(console.error);
});


///Slash/////

const commands = [
  new SlashCommandBuilder()
      .setName('activar Saludo')
      .setDescription('Activa la respuesta automática al comando Hola')
      .setDefaultPermission(false),
  new SlashCommandBuilder()
      .setName('desactivar Saludo')
      .setDescription('Desactiva la respuesta automática al comando Hola')
      .setDefaultPermission(false)
];

const rest = new REST({ version: '9' }).setToken(mySecret);

(async () => {
  try {
      await rest.bulkOverwriteCommands(
          Routes.applicationCommands(client.user.id),
          { body: commands },
      );
      console.log('Comandos slash registrados globalmente.');
  } catch (error) {
      console.error(error);
  }
})();

let respuestaActivada = true; // Activado por defecto

let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

///Mensajes////

client.on("messageCreate", (message) => {
  if(message.content.startsWith("Kping")) {
    message.channel.send("pong!🏓");
       }

});

 client.on("messageCreate", (message) => {
  const Mensajes = ["Fallastes :), Punto para mi", "Miercoles falle", "Noo perdi :(", "Te gane JIJIJIJA", "perdi, bien jugado", "Kping", "Kping", "Juego si me das una Baya"]
  const aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("pong!🏓")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

client.on('messageCreate', (message) => {
  const Mensajes = ["ñam☺","asi mejor", "Que rico☺", "Gracias", "te has ganado mis respetos❤", "puagj!🤮 estaba mala😡", "¿me das una segunda ;)?"];
  const aleatorio = Math.floor(Math.random() * Mensajes.length);
  if (message.content.startsWith("Kdar baya")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

 client.on("messageCreate", (message) => {
  const Mensajes = ["JIJIJIJA","PARA YA🤣", "Hay no tengo cosquillas", "gvjsgfjafef", "jajjaaj🤣"]
  const aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("Kcosquillas")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

client.on('messageCreate', (message) => {
  const Mensajes = [
    "¿Cuál es el último animal que subió al arca de Noé? El del-fin.",
    "¿Cómo se dice pañuelo en japonés? Saka-moko.",
    "Que tu culo esta triste",
    "¿Cómo se dice disparo en árabe? Ahí-va-la-bala.",
    "¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.",
    "Un gato empieza a ladrar en el tejado de una casa. Otro gato, sorprendido, le dice: Estás loco gato, ¿por qué ladras en vez de maullar? El gatito le responde: ¿A caso no puedo aprender otro idioma?",
    "El doctor le dice al paciente: respire profundo que lo voy a auscultar. El paciente le responde: doctor, ¿de quién me va a ocultar si no le debo a nadie?",
    "Sale el doctor después de un parto y el padre de la criatura le pregunta: ¿Doctor cómo salió todo? El doctor le dice: todo salió bien, pero tuvimos que colocarle oxígeno al bebé. El padre, horrorizado, le dice: pero doctor, nosotros queríamos ponerle Gabriel.",
    "Un pez le pregunta a otro pez: ¿qué hace tu mamá? Este le contesta: Nada, ¿y la tuya qué hace? Nada también.",
    "¿Cuál es el colmo de Aladdín? Tener mal genio.",
    "Si se muere una pulga, ¿a dónde va? Al pulgatorio.",
    "El profesor le dice al estudiante después de haberle corregido la tarea: Tu trabajo me ha conmovido. El estudiante, sorprendido, le pregunta: ¿Y eso por qué profesor? El profesor con cara de burla le dice: Porque me dio mucha pena.",
    "Le dice el niño a la madre: Mamá, no quiero jugar más con Pedrito. La madre le pregunta al niño: ¿Por qué no quieres jugar más con él? Porque cuando jugamos a los tacos de madera y le pego con uno en la cabeza, de repente se pone a llorar.",
    "A Juanito le dice la maestra: Juanito, ¿qué harías si te estuvieses ahogando en la piscina? Juanito le responde: Me pondría a llorar mucho para desahogarme.",
    "Hijo, me veo gorda, fea y vieja. ¿Qué tengo hijo, qué tengo? Mamá, tienes toda la razón.",
    "¿Cómo se dice pelo sucio en chino? Chin cham pu.",
    "¿Cómo se llama el campeón de apnea japonés? Tokofondo y ¿Cómo se llama el subcampeón de apnea japonés? Kasitoko.",
    "El niño le pregunta a la mamá: ¿Mamá, de dónde venimos nosotros? La madre responde: Hijo, venimos de Adán y Eva. El niño replica: ¡Mamá! En la escuela nos dicen que venimos del mono. La madre le responde: Hijo mío, una cosa es la familia de tu padre y otra cosa es la mía.",
    "¿A qué te dedicas? , le preguntan a un hombre en una agencia de empleos. El hombre responde: a matar dragones. Y de forma exclamativa le dicen: ¡pero los dragones no existen! El hombre responde de manera interrogativa: ¿Ustedes han visto alguno? El que le está entrevistando de inmediato responde: no señor, claro que no. Y el hombre, orgulloso, replica: pues eso, porque yo los maté a todos.",
    "Dame una baya primero",
    "Dame una baya primero",
    "Dame una baya primero",
    "Hay un plátano, una pera y una manzana, y dice la manzana: ¡Que viene el coco!",
    "Está un niño haciendo deberes y le pregunta a su papá: ¡Papá!, ¿cómo se escribe la palabra campana? Su padre responde: Pues se escribe igual que suena hijo. Gracias, papá, le responde el niño antes de escribir tolón, tolón.",
    "Un grupo de personas están haciendo el censo en la ciudad cuando llegan a una casa llamada Paraíso. Tocan a la puerta y sale un hombre, de modo que preguntan: Señor, buenos días. ¿Cuál es su nombre? Mi nombre es Adán. Señor Adán, ¿cuál es el nombre de su esposa? El nombre de mi esposa es Eva, responde. Ummmm, a ver… ¿Por casualidad la serpiente también vive aquí? ¡No amigo, claro que no!, la suegra fue desterrada de este paraíso hace tiempo.",
    "Un hombre todo feliz le pregunta a su esposa: ¿Mi amor, qué me vas a regalar el día de mi cumpleaños? Ella le responde: mira, ¿ves ese coche que hay en la esquina? El hombre, súper emocionado le dice: ¡Dios mío! ¿En serio vas a regalarme ese coche? Ella, sorprendida, le dice: ¡claro que no!, te voy a regalar una plancha de ese mismo color.",
    "Una mujer le dice a su marido: Cariño, ¿te gusta mi disfraz? Sí, mi amor, contesta el hombre, es un disfraz de vaca muy bonito. ¡Pero si voy disfrazada de dálmata!",
    "Un padre le dice a su hijo: Qué bonito te ha quedado el tatuaje del diablo en el brazo. El chico, atormentado, le contesta: ¿Pero qué dices? Si es la cara de mi novia.",
    "Un hombre todo borracho llega a alcohólicos anónimos y allá le preguntan: ¿Vino solo? El borracho saca la copa y dice: ¡No!, mejor con hielo.",
    "+¿Viste el apagón de anoche? -No. +¿Y eso? -Porque estaba oscuro.",
    "¿Dónde cuelga la capa Superman? En su-perchero.",
    "¿Qué hace un mudo bailando? Una mudanza.",
    "¿Qué son 50 físicos y 50 químicos juntos? Pues 100tíficos.",
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
    "¿Cuál es el colmo de un electricista? No encontrar su corriente de trabajo.",
    "¿Cuál es el colmo de un calvo? Tener ideas descabelladas.",
    "¿Cuál es el colmo de un sordo? Que al sonar el teléfono, se quede mudo.",
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.",
    "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
    "¿Cuál es el colmo de un electricista? No encontrar su corriente de trabajo.",
    "¿Cuál es el colmo de un calvo? Tener ideas descabelladas.",
    "¿Cuál es el colmo de un sordo? Que al sonar el teléfono, se quede mudo.",
  ];

  const aleatorio = Math.floor(Math.random() * Mensajes.length);

  if (message.content.startsWith("Kchiste")) {
    message.channel.send(Mensajes[aleatorio]);
  }
});

client.on('messageCreate', (message) => {
  var Mensajes = [
    "En las situaciones difíciles aparecen muchas emociones intensas. Pero no hay que olvidar que este puede ser un periodo de aprendizaje si las cosas no salen como deseábamos.",
    "Cuando arriesgamos, puede que el resultado sea lo que siempre habíamos querido.",
    "Cuando luchamos por lo que amamos, nuestras emociones están a flor de piel.",
    "Una reflexión emotiva sobre la persona a la que amamos. En el amor se sienten las emociones más intensas.",
    "Sobre cómo existen corazones inmensos y corazones faltos de amor.",
    "Una frase que puede hacerte sentir emociones positivas. Ideal para los momentos difíciles.",
    "Una reflexión sobre la alegría, sobre lo emocionante que es la vida y lo increíble que es ver a los niños crecer.",
    "Cuando lo dejamos con alguien, podemos vivir momentos complicados. Pero una nueva y emocionante vida nos espera si sabemos ver el lado bueno.",
    "En el amor hay que dejarse llevar. Es la única manera de expresarlo.",
    "El amor es cosa de dos. Siempre debe haber respeto y cariño a partes iguales.",
    "Primero una baya :)"
  ];

  var aleatorio = Math.floor(Math.random() * Mensajes.length);

  if (message.content.startsWith("Kmotivacion")) {
    message.channel.send(Mensajes[aleatorio]);
  }
});

client.on('messageCreate', (message) => {
  if (!message.guild) return;
  const lowerCaseContent = message.content.toLowerCase();

  if (lowerCaseContent.startsWith('hola')) {
      if (respuestaActivada) {
          const mensajesHola = ["Holi", "Hey", "Que onda", "Que pasa", "👋", "Holi, a que me das una Baya :)"];
          const aleatorio = Math.floor(Math.random() * mensajesHola.length);
          message.channel.send(mensajesHola[aleatorio]);
      }
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'activar') {
      respuestaActivada = true;
      await interaction.reply('La respuesta automática al comando Hola ha sido activada.');
  } else if (interaction.commandName === 'desactivar') {
      respuestaActivada = false;
      await interaction.reply('La respuesta automática al comando Hola ha sido desactivada.');
  }
});


client.on("messageCreate", (message) => {
  var Mensajes = ["https://drive.google.com/file/d/1RU7yHZc2_yVT2vFbUvt-Fx8EnJ0HXEQM/view?usp=sharing","Gotta make a move to a town that's right for me Town to keep me movin' Keep me groovin' with some energy Well, I talk about it, talk about it Talk about it, talk about it Talk about, talk about Talk about movin' Gotta move on Gotta move on Gotta move on Won't you take me to Funkytown? Won't you take me to Funkytown? Won't you take me to Funkytown? Won't you take me toFunkytown? Won't you take me to Funkytown? Won't you take me to Funkytown? Won't you take me to Funkytown? Won't you take me to Funkytown? Gotta make a move to a town that's right for me Town to keep me movin' Keep me groovin' with some energy Well, I talk about it, talk about it Talk about it, talk about it Talk about, talk about Talk about movin' Gotta move on Gotta move on Gotta move on Won't you take me to Funkytown? Won't you Won't you take me downTo Funkytown? Won't you take me down To Funkytown?"]
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("Funky")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

  client.on("messageCreate", (message) => {
  var Mensajes = ["Hey guapísimos"]
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("777")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

client.on("messageCreate", (message) => {
  var Mensajes = ["mini mini"]
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
  if(message.content.startsWith("{user} haz el mini mini")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}



client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();


