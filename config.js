const fs = require('fs')

global.owner = "6281257180104" // nomor owner
global.footer = "-"
global.namabot = "ov3rk1ll" // nama bot lu
global.status = true
global.namaowner = "FluxXYZ"
global.idsaluran = "-"
global.namasaluran = "-"
global.linksaluran = "-" // link saluran lu
global.imgmenu = "https://files.catbox.moe/wwucrn.jpg" // JANGAN DI GANTI NNTI ERROR

//======[ Setting Event ]======//
global.lol = "";
global.msg = {
    owner: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini khusus owner‼️",
    premium: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini khusus premium‼️",
    admin: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini hanya bisa digunakan oleh *Admin Grup*!",
    adminbot: "Bot harus jadi admin dulu kak 🗿",
    group: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\n Fitur ini hanya bisa digunakan di dalam *Grup*!",
    priv: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\nFitur ini hanya bisa digunakan di *chat pribadi*!",
    bot: "❌ 𝗔𝗞𝗦𝗘𝗦 𝗗𝗜 𝗧𝗢𝗟𝗔𝗞\n Fitur ini hanya untuk digunakan oleh *bot* itu sendiri."
}
global.autoTyping = true // ubah jadi false kalau mau matikan auto typing

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
