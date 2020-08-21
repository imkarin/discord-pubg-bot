// Require modules
require('dotenv').config();
const Discord = require('discord.js');
const { prefix } = require('./config.json');

// Bot client
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Botchi is ready!');
});

// Maps info
const miramar = {
  name: 'Miramar',
  places: [
    { name: 'Alcantara', img: 'https://i.imgur.com/jy9c9Gq.png' },
    { name: 'Chumacera', img: 'https://i.imgur.com/lFAR5XN.png' },
    { name: 'El Pozo', img: 'https://i.imgur.com/hOslfGw.png' },
    { name: 'La Cobreria', img: 'https://i.imgur.com/BQN7Nwm.png' },
    { name: 'Los Leones', img: 'https://i.imgur.com/dE5oGN8.png' },
    { name: 'Valle del Mar', img: 'https://i.imgur.com/KQNLTh3.png' },
    { name: 'Monte Nuevo', img: 'https://i.imgur.com/fQRnq0q.png' },
    { name: 'San Martin', img: 'https://i.imgur.com/Tq2Nund.png' },
    { name: 'Cruz del Valle', img: 'https://i.imgur.com/tKn9L0l.png' },
    { name: 'El Azahar', img: 'https://i.imgur.com/ZbLsYYU.png' },
    { name: 'Impala', img: 'https://i.imgur.com/fYQfMK8.png' },
    { name: 'Los Higos', img: 'https://i.imgur.com/54U0AFg.png' },
    { name: 'Pecado', img: 'https://i.imgur.com/VajaD1Z.png' },
    { name: 'Puerto Paraíso', img: 'https://i.imgur.com/twD28ve.png' },
    { name: 'Tierra Bronca', img: 'https://i.imgur.com/JWO9UvC.png' },
    { name: 'Torre Ahumada', img: 'https://i.imgur.com/sr5OLYC.png' },
    { name: 'La Bendita', img: 'https://i.imgur.com/Id3CoYy.png' },
    { name: 'Hacienda del Patrón', img: 'https://i.imgur.com/YVCk2MM.png' },
    { name: 'Water Treatment', img: 'https://i.imgur.com/xgeyLT6.png' },
    { name: 'Prison', img: 'https://i.imgur.com/unU2GA8.png' },
    { name: 'Campo Militar', img: 'https://i.imgur.com/0OzxHHT.png' },
    { name: 'Islands', img: 'https://i.imgur.com/HQrUzV8.png' },
    { name: 'Minas del Sur', img: 'https://i.imgur.com/L2Hdxot.png' },
    { name: 'Minas Generales', img: 'https://i.imgur.com/9a3PA2Y.png' },
    { name: 'Power Grid', img: 'https://i.imgur.com/kKKbbUr.png' },
    { name: 'Crater Fields', img: 'https://i.imgur.com/IYliNLf.png' },
    { name: 'Junkyard', img: 'https://i.imgur.com/5DMvud1.png' },
    { name: 'Graveyard', img: 'https://i.imgur.com/wWdM2wV.png' },
    { name: 'Watertown', img: 'https://i.imgur.com/WphhHWV.png' },
    { name: 'the towns at the southcoast', img: 'https://i.imgur.com/QvcapHA.png' },
    { name: 'the towns at the eastcoast', img: 'https://i.imgur.com/wObs08T.png' },
  ],
};

const vikendi = {
  name: 'Vikendi',
  places: [
    { name: 'Abbey', img: '' },
    { name: 'Cantra', img: 'https://i.imgur.com/Pc0UNyg.png' },
    { name: 'Cargo Depot', img: 'https://i.imgur.com/QDFVXnA.png' },
    { name: 'Castle', img: 'https://i.imgur.com/CMFjES4.png' },
    { name: 'Cement Factory', img: 'https://i.imgur.com/Qoyr9e8.png' },
    { name: 'Coal Mine', img: 'https://i.imgur.com/Yo2tPWl.png' },
    { name: 'Cosmodrome', img: 'https://i.imgur.com/VWjCAj0.png' },
    { name: 'Dino Land', img: 'https://i.imgur.com/WDnFkvK.png' },
    { name: 'Dobro Mesto', img: 'https://i.imgur.com/WdBdTL7.png' },
    { name: 'Goroka', img: 'https://i.imgur.com/wx6X0mJ.png' },
    { name: 'Hot Springs', img: 'https://i.imgur.com/aEfnczg.png' },
    { name: 'Krichas', img: 'https://i.imgur.com/Fb18krZ.png' },
    { name: 'Lumber Yard', img: 'https://i.imgur.com/ZSqWYRe.png' },
    { name: 'Milnar', img: 'https://i.imgur.com/uxUnzie.png' },
    { name: 'Peshkova', img: 'https://i.imgur.com/wRde3xA.png' },
    { name: 'Pilnec', img: 'https://i.imgur.com/aFhWSZy.png' },
    { name: 'Podvosto', img: 'https://i.imgur.com/yj26518.png' },
    { name: 'Port', img: 'https://i.imgur.com/xMpPxqI.png' },
    { name: 'Sawmill', img: 'https://i.imgur.com/xtUo5Vk.png' },
    { name: 'Trevno', img: 'https://i.imgur.com/8Bc8Zki.png' },
    { name: 'Vihar', img: 'https://i.imgur.com/7NWKBGU.png' },
    { name: 'Villa', img: 'https://i.imgur.com/Y9RCTLQ.png' },
    { name: 'Volnova', img: 'https://i.imgur.com/VS0AUWd.png' },
    { name: 'Winery', img: 'https://i.imgur.com/42WWt9T.png' },
    { name: 'Zabava', img: 'https://i.imgur.com/XPcKP8D.png' },
    { name: 'the little towns left of Villa', img: 'https://i.imgur.com/8Ctjmnp.png' },
    { name: 'the little towns around Peshkova', img: 'https://i.imgur.com/z8at7cR.png' },
    { name: 'the little towns above Cantra', img: 'https://i.imgur.com/FCNursH.png' },
  ],
};

const erangel = {
  name: 'Erangel',
  places: [
    { name: 'Zharki', img: 'https://i.imgur.com/OEzbpmP.jpg' },
    { name: 'Severny', img: 'https://i.imgur.com/xcGdQsI.jpg' },
    { name: 'Shooting range', img: 'https://i.imgur.com/cn7VyAv.jpg' },
    { name: 'Stalber', img: 'https://i.imgur.com/EVrABRL.jpg' },
    { name: 'Kameshki', img: 'https://i.imgur.com/HgXoSrp.png' },
    { name: 'Yasnaya Polyana', img: 'https://i.imgur.com/wnpseEJ.jpg' },
    { name: 'Lipovka', img: 'https://i.imgur.com/vdjNX76.png' },
    { name: 'Rozhok', img: 'https://i.imgur.com/BN9gtKKg.jpg' },
    { name: 'Georgopol', img: 'https://i.imgur.com/KP9OSQ5.png' },
    { name: 'Hospital', img: 'https://i.imgur.com/X15qxpY.png' },
    { name: 'Ruins', img: 'https://i.imgur.com/cIii32Tg.jpg' },
    { name: 'Watertown', img: 'https://i.imgur.com/zkztxWK.jpg' },
    { name: 'School', img: 'https://i.imgur.com/h1fnKye.jpg' },
    { name: 'Pochinki', img: 'https://i.imgur.com/ZCVt3NV.png' },
    { name: 'Gatka', img: 'https://i.imgur.com/FRf4I9m.png' },
    { name: 'Primorsk', img: 'https://i.imgur.com/NDbwm6P.png' },
    { name: 'Ferry Pei', img: 'https://i.imgur.com/xhjQPOA.png' },
    { name: 'Quarry', img: 'https://i.imgur.com/1TRzB7v.jpg' },
    { name: 'Prison', img: 'https://i.imgur.com/HPvyMaq.jpg' },
    { name: 'Mansion', img: 'https://i.imgur.com/ZDa3w00.png' },
    { name: 'Shelter', img: 'https://i.imgur.com/RKO891G.jpg' },
    { name: 'Farm', img: 'https://i.imgur.com/Gl10wHQ.jpg' },
    { name: 'Mylta', img: 'https://i.imgur.com/MwnkQ2W.png' },
    { name: 'Mylta Power', img: 'https://i.imgur.com/TXks6uP.png' },
    { name: 'the little towns southcoast of main island', img: 'https://i.imgur.com/V5tRH1F.png' },
    { name: 'the little towns westcoast of main island', img: 'https://i.imgur.com/jjS5ykS.jpg' },
    { name: 'Sosnovka Military Base', img: 'https://i.imgur.com/S0u2wdi.jpg' },
    { name: 'Novorepnoye', img: 'https://i.imgur.com/LGftK0l.png' },
    { name: 'the little towns north-west Sosnovka Island', img: 'https://i.imgur.com/D3V0HCC.jpg' },
    { name: 'the little towns south Sosnovka Island', img: 'https://i.imgur.com/qjStW3c.jpg' },
  ],
};

const sanhok = {
  name: 'Sanhok',
  places: [
    { name: 'Ha Tinh', img: 'https://i.imgur.com/8K24Y7u.png' },
    { name: 'Khao', img: 'https://i.imgur.com/DUzaXR2.png' },
    { name: 'Tat Mok', img: 'https://i.imgur.com/4KuVsmj.png' },
    { name: 'Paradise Resort', img: 'https://i.imgur.com/kEjWPIf.png' },
    { name: 'Camp Bravo', img: 'https://i.imgur.com/PcQro2Y.png' },
    { name: 'Airfield', img: 'https://i.imgur.com/iGcRvj7.png' },
    { name: 'Camp Alpha', img: 'https://i.imgur.com/HxFpJ0q.png' },
    { name: 'Bootcamp', img: 'https://i.imgur.com/EFTKwDo.png' },
    { name: 'Ruins', img: 'https://i.imgur.com/aR7trpV.png' },
    { name: 'Tambang', img: 'https://i.imgur.com/OgFLxBb.png' },
    { name: 'Pai Nan', img: 'https://i.imgur.com/aMkkluz.png' },
    { name: 'Quarry', img: 'https://i.imgur.com/X02hkW6.png' },
    { name: 'Lakawi', img: 'https://i.imgur.com/AzkgCFU.png' },
    { name: 'Kampong', img: 'https://i.imgur.com/cvIBogQ.png' },
    { name: 'Cave', img: 'https://i.imgur.com/5S6R1h3.png' },
    { name: 'Getaway', img: 'https://i.imgur.com/jg7caFw.png' },
    { name: 'Camp Charlie', img: 'https://i.imgur.com/ezrc75h.png' },
    { name: 'Ban Tai', img: 'https://i.imgur.com/RCKDgxF.png' },
    { name: 'Sahmee', img: 'https://i.imgur.com/ROiA2RQ.png' },
    { name: 'Na Kham', img: 'https://i.imgur.com/Y8477d4.png' },
    { name: 'the little towns around Camp Alpha', img: 'https://i.imgur.com/YjFEvpG.png' },
    { name: 'the little towns south-west of Tatmok', img: 'https://i.imgur.com/vyNKbwh.png' },
    { name: 'the little towns around Cave', img: 'https://i.imgur.com/De17MVd.png' },
    { name: 'the little towns around Airfield', img: 'https://i.imgur.com/g7OD9Dr.png' },
    { name: 'the little towns north-east of Sahmee', img: 'https://i.imgur.com/1STP6tr.png' },
    { name: 'the little towns around Bootcamp', img: 'https://i.imgur.com/2BQTaxG.png' },
    { name: 'the little towns around Lakawi', img: 'https://i.imgur.com/tA24GGP.png' },
  ],
};

const karakin = {
  name: 'Karakin',
  places: [
    { name: 'Bahr Sahir', img: 'https://i.imgur.com/lm23hlY.png' },
    { name: 'Al Habar', img: 'https://i.imgur.com/IO4AaGy.png' },
    { name: 'Bashara', img: 'https://i.imgur.com/zW6Ia9r.png' },
    { name: 'Cargo Ship', img: 'https://i.imgur.com/WyD9Img.png' },
    { name: 'Al Hayik', img: 'https://i.imgur.com/2kxXyWW.png' },
    { name: 'Hadiqa Nemo', img: 'https://i.imgur.com/UcQmQ0U.png' },
    { name: 'the little towns north', img: 'https://i.imgur.com/BCK37d8.png' },
    { name: 'the little towns north-west', img: 'https://i.imgur.com/2LmiZj4.png' },
    { name: 'the little towns east', img: 'https://i.imgur.com/n8tBrzg.png' },
    { name: 'the little towns center', img: 'https://i.imgur.com/GYXaX4X.png' },
    { name: 'the little towns south-east', img: 'https://i.imgur.com/6zrKcMd.png' },
    { name: 'the little towns south-west', img: 'https://i.imgur.com/8QaQQfK.png' },
  ],
};

const maps = [miramar, erangel, sanhok, vikendi, karakin];

// Bot event listeners
client.on('message', (msg) => {
  if (msg.content.startsWith(`${prefix}place `)) {
    const words = msg.content.split(' ');

    const mapWord = words[1].substring(0, 1).toUpperCase() + words[1].substring(1).toLowerCase();
    const map = maps.find((map) => map.name === mapWord);

    if (!map) {
      msg.channel.send('❌ That map doesn\'t exist! Try **Miramar, Erangel, Sanhok, Vikendi** or **Karakin.**');
      return;
    }

    const randomNumber = Math.floor(Math.random() * map.places.length);
    const randomPlace = map.places[randomNumber];
    msg.channel.send(`Playing on ${map.name}? Alright, let's go to **${randomPlace.name}**! 🪂`,
      { files: [randomPlace.img] });
  }
});

// Log the bot into Discord
client.login(process.env.BOT_TOKEN);
