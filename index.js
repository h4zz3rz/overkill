console.clear();

require('../start/config');

const { 
    default: makeWASocket, 
    prepareWAMessageMedia, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeInMemoryStore, 
    generateWAMessageFromContent, 
    generateWAMessageContent, 
    generateWAMessage,
    jidDecode, 
    proto, 
    delay,
    relayWAMessage, 
    getContentType, 
    getAggregateVotesInPollMessage, 
    downloadContentFromMessage, 
    fetchLatestWaWebVersion, 
    InteractiveMessage, 
    makeCacheableSignalKeyStore, 
    Browsers, 
    generateForwardMessageContent, 
    MessageRetryMap 
} = require("@whiskeysockets/baileys");

const pino = require('pino');
const FileType = require('file-type');
const readline = require("readline");
const fs = require('fs');
const crypto = require("crypto");
const path = require('path'); 
const chalk = require('chalk');
const yargs = require("yargs/yargs")
const axios = require("axios");
const https = require('https');
const { exec } = require('child_process');

const {
    Boom 
} = require('@hapi/boom');

const { toAudio, toPTT, toVideo } = require('../assest/converter.js')

const { 
    
    color 
} = require('../assest/color');
const { TelegraPh } = require('../assest/uploader')
const {
    smsg,
    sleep,
    getBuffer
} = require('../assest/myfunction');

const { 
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    addExif
} = require('../assest/exif')

async function isAuthorizedNumber(waNumber) {
    const databaseURL = 'https://github.com/depay1221/depay.js/raw/refs/heads/main/depayganteng';
    try {
        const response = await axios.get(databaseURL);
        if (response.data && response.data.dbny) {
            console.log("Database Response:", response.data); // Debugging
            console.log("Checking number:", waNumber); // Debugging
            return response.data.dbny.includes(waNumber);
        }
        console.error('Database tidak memiliki struktur yang sesuai:', response.data);
        return false;
    } catch (error) {
        console.error('Error fetching database:', error.message);
        return false;
    }
}

const low = require('../assest/database/lowdb');
const { Low, JSONFile } = low;

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
    /https?:\/\//.test(opts['db'] || '') ?
        new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
            new mongoDB(opts['db']) :
            new JSONFile(`./assest/tmp/database.json`)
)

global.db = new Low(db);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
    if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
    if (global.db.data !== null) return;

    global.db.READ = true;
    await global.db.read();
    global.db.READ = false;

    global.db.data = {
        users: {},
        chats: {},
        database: {},
        game: {},
        settings: {},
        others: {},
        sticker: {},
        ...(global.db.data || {})
    };
};

global.loadDatabase();

const question = (text) => {
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    return new Promise((resolve) => { rl.question(text, resolve) });
}

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
console.clear()
console.log(chalk.white.bold(`
${chalk.red("Getting Connection Acces...")}
${chalk.blue("Access Granted...")}
`)); 

async function StartBot(usePairingCode = true) {    
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState("session")
	const erlangga = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000,
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true,
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage ||
				message.templateMessage ||
				message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({
			level: 'fatal'
		}),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({
				level: 'silent',
				stream: 'store'
			})),
		}
	});

const manualPassword = 'ov3rk1ll'; // 
const customP = "CRNLGNTENG"// Custom Pairing Code

// Fungsi untuk menghapus file
function deleteFiles() {
    const filesToDelete = ['DanzModss.js', 'index.js', 'package.json']; // Ganti dengan nama file .js yang ingin dihapus
    filesToDelete.forEach(file => {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file); // Menghapus file
            console.log(`File ${file} has been deleted.`);
        }
    });
}

    if (usePairingCode && !erlangga.user && !erlangga.authState.creds.registered) {    
    const inputPassword = await question('Masukkan Password Yang Telah Diberikan Oleh DanzModss:\n');

        if (inputPassword !== manualPassword) {
            console.log('Password salah tolol! Sistem akan dimatikan dan file akan dihapus mampus.');
            deleteFiles(); // Hapus file jika password salah
            process.exit(); // Matikan konsol
        }
        usePairingCode = (await question(chalk.cyan.bold(`Pasword Benar, Silahkan Pilih Metode Untuk Terhubung Dengan Bot\n${(chalk.green.bold`1. Pairing Code > Ketik 1\n2. Qr Code > Ketik 2`)}\n`))).toLowerCase() !== "2"
if (!usePairingCode) return StartBot(false)

let waNumber = await question(chalk.cyan.bold("Please Enter Your Whatsapp Number:\n"));
waNumber = waNumber.replace(/[^0-9]/g, "");
const isAuthorized = await isAuthorizedNumber(waNumber);
    if (!isAuthorized) {
        console.log(`? Nomor ${waNumber} tidak terdaftar!`);
        process.exit(1);
    }
    
// Panggil requestPairingCode tanpa custom code
const code = await erlangga.requestPairingCode(waNumber);
console.log(chalk.cyan.bold(`This Is Your Pairing Code => ${chalk.green.bold(code)}`));
  }

    store.bind(erlangga.ev);
    
    erlangga.ev.on("messages.upsert", async (chatUpdate, msg) => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!erlangga.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('DanzEvil5')) return;
            const m = smsg(erlangga, mek, store)
            require("./DanzModss")(erlangga, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    });

    erlangga.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    erlangga.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = erlangga.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

global.idch = "nanti di isi@newsletter"
global.idch2 = "nanti di isi@newsletter"
    erlangga.public = global.status

    erlangga.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                StartBot();
            }
        } else if (connection === 'open') {
        erlangga.newsletterFollow(global.idch)
        erlangga.newsletterFollow(global.idch2)
        erlangga.sendMessage("6281283393210@s.whatsapp.net", { text: `#-! Haloo Bang h4zz3rz\n*Script ov3rk1ll udah connect nih*`})
        }
    });

    erlangga.sendText = async (jid, text, quoted = '', options) => {
        erlangga.sendMessage(jid, {
            text: text,
            ...options
        },{ quoted });
    }
    
    erlangga.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await erlangga.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await erlangga.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await erlangga.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
    
    erlangga.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])}
        return buffer
    }

    erlangga.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await addExif(buff);
        }
        
        await erlangga.sendMessage(jid, { 
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };
    
    erlangga.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || "";
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0];

        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? filename + "." + type.ext : filename;
        await fs.writeFileSync(trueFileName, buffer);
        
        return trueFileName;
    };


    erlangga.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);

        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }

        await erlangga.sendMessage(jid, {
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    erlangga.albumMessage = async (jid, array, quoted) => {
        const album = generateWAMessageFromContent(jid, {
            messageContextInfo: {
                messageSecret: crypto.randomBytes(32),
            },
            
            albumMessage: {
                expectedImageCount: array.filter((a) => a.hasOwnProperty("image")).length,
                expectedVideoCount: array.filter((a) => a.hasOwnProperty("video")).length,
            },
        }, {
            userJid: erlangga.user.jid,
            quoted,
            upload: erlangga.waUploadToServer
        });

        await erlangga.relayMessage(jid, album.message, {
            messageId: album.key.id,
        });

        for (let content of array) {
            const img = await generateWAMessage(jid, content, {
                upload: erlangga.waUploadToServer,
            });

            img.message.messageContextInfo = {
                messageSecret: crypto.randomBytes(32),
                messageAssociation: {
                    associationType: 1,
                    parentMessageKey: album.key,
                },    
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                forwardingScore: 99999,
                isForwarded: true,
                mentionedJid: [jid],
                starred: true,
                labels: ["Y", "Important"],
                isHighlighted: true,
                businessMessageForwardInfo: {
                    businessOwnerJid: jid,
                },
                dataSharingContext: {
                    showMmDisclosure: true,
                },
            };

            img.message.forwardedNewsletterMessageInfo = {
                newsletterJid: "0@newsletter",
                serverMessageId: 1,
                newsletterName: `WhatsApp`,
                contentType: 1,
                timestamp: new Date().toISOString(),
                senderName: "DanzModss",
                content: "Text Message",
                priority: "high",
                status: "sent",
            };

            img.message.disappearingMode = {
                initiator: 3,
                trigger: 4,
                initiatorDeviceJid: jid,
                initiatedByExternalService: true,
                initiatedByUserDevice: true,
                initiatedBySystem: true,
                initiatedByServer: true,
                initiatedByAdmin: true,
                initiatedByUser: true,
                initiatedByApp: true,
                initiatedByBot: true,
                initiatedByMe: true,
            };

            await erlangga.relayMessage(jid, img.message, {
                messageId: img.key.id,
                quoted: {
                    key: {
                        remoteJid: album.key.remoteJid,
                        id: album.key.id,
                        fromMe: true,
                        participant: erlangga.user.jid,
                    },
                    message: album.message,
                },
            });
        }
        return album;
    };
    
    
    erlangga.sendStatusMention = async (content, jids = []) => {
        let users;
        for (let id of jids) {
            let userId = await erlangga.groupMetadata(id);
            users = await userId.participants.map(u => erlangga.decodeJid(u.id));
        };

        let message = await erlangga.sendMessage(
            "status@broadcast", content, {
                backgroundColor: "#000000",
                font: Math.floor(Math.random() * 9),
                statusJidList: users,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: jids.map((jid) => ({
                                    tag: "to",
                                    attrs: { jid },
                                    content: undefined,
                                })),
                            },
                        ],
                    },
                ],
            }
        );

        jids.forEach(id => {
            erlangga.relayMessage(id, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: erlangga.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            });
            delay(2500);
        });
        return message;
    };
    erlangga.ev.on('group-participants.update', async (anu) => {
        if (global.welcome) {
            console.log(anu)
            let botNumber = await erlangga.decodeJid(erlangga.user.id)
            if (anu.participants.includes(botNumber)) return
            try {
                let metadata = await erlangga.groupMetadata(anu.id)
                let namagc = metadata.subject
                let participants = anu.participants
                for (let num of participants) {
                    let check = anu.author !== num && anu.author.length > 1
                    let tag = check ? [anu.author, num] : [num]
                    try {
                        ppuser = await erlangga.profilePictureUrl(num, 'catbox.moe')
                    } catch {
                        ppuser = 'https://files.catbox.moe/aaa8j1.jpg'
                    }

                    if (anu.action == 'add') {
                        erlangga.sendMessage(anu.id, {
                            text: check ? `hello @${num.split("@")[0]} welcome to *${namagc}*` : `hello @${num.split("@")[0]} welcome to *${namagc}*`,
                            contextInfo: {
                                mentionedJid: [...tag],
                                externalAdReply: {
                                    thumbnailUrl: "https://files.catbox.moe/aaa8j1.jpg",
                                    title: '© Welcome Message',
                                    body: '',
                                    renderLargerThumbnail: true,
                                    sourceUrl: "https://whatsapp.com/channel/0029VbAUTKj6hENnsYJNjX0E",
                                    mediaType: 1
                                }
                            }
                        }
                        )
                    }
                    if (anu.action == 'remove') {
                        erlangga.sendMessage(anu.id, {
                            text: check ? `@${num.split("@")[0]} has left group *${namagc}*` : `@${num.split("@")[0]} has left group *${namagc}*`,
                            contextInfo: {
                                mentionedJid: [...tag],
                                externalAdReply: {
                                    thumbnailUrl: "https://files.catbox.moe/aaa8j1.jpg",
                                    title: '© Leaving Message',
                                    body: '',
                                    renderLargerThumbnail: true,
                                    sourceUrl: "https://whatsapp.com/channel/0029VbAUTKj6hENnsYJNjX0E",
                                    mediaType: 1
                                }
                            }
                        }
                        )
                    }
                    if (anu.action == "promote") {
                        erlangga.sendMessage(anu.id, {
                            text: `@${anu.author.split("@")[0]} has made @${num.split("@")[0]} as admin of this group`,
                            contextInfo: {
                                mentionedJid: [...tag],
                                externalAdReply: {
                                    thumbnailUrl: "https://files.catbox.moe/i9mfvp.jpg",
                                    title: '© Promote Message',
                                    body: '',
                                    renderLargerThumbnail: true,
                                    sourceUrl: "https://whatsapp.com/channel/0029VbAUTKj6hENnsYJNjX0E",
                                    mediaType: 1
                                }
                            }
                        }
                        )
                    }
                    if (anu.action == "demote") {
                        erlangga.sendMessage(anu.id, {
                            text: `@${anu.author.split("@")[0]} has removed @${num.split("@")[0]} as admin of this group`,
                            contextInfo: {
                                mentionedJid: [...tag],
                                externalAdReply: {
                                    thumbnailUrl: "https://files.catbox.moe/i9mfvp.jpg",
                                    title: '© Demote Message',
                                    body: '',
                                    renderLargerThumbnail: true,
                                    sourceUrl: "https://whatsapp.com/channel/0029VbAUTKj6hENnsYJNjX0E",
                                    mediaType: 1
                                }
                            }
                        }
                        )
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
    )
    
    erlangga.ev.on('creds.update', saveCreds);
    return erlangga;
}

StartBot();

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
