module.exports = {

name: "menu",

async execute(sock, msg){

await sock.sendMessage(msg.key.remoteJid, {

text: "RAHL XMD Remote Menu Loaded"

});

}

}
