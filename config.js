//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/yeu6a8.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27693798048";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/olcl5p.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU90Q1V1V2NMcXA2TnU0RytMb2pFRjdMS1dJSzNhd0dzd2creXJ2UzExcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9VTFhVWUZTU0E2bU5TSnptOGwwTnF1b1hLclJKaGgyRWcyOTVucmNCdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RHRTalBDa2ZlbUJyMGw3UEk3bEdIQnBFT1RpbDNTakV3L1hzM0h4cFZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxOERiUG5tNU01eVBSUEhMRFg2cW1FZkZ0VElENDlnZXpUanQ4R2owMjM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCYmRXaWx6N3ZWYkU4ZHRWOGJuanU3NnhCVzlmK2h6a1VOR3kwR3ZCMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1rYjhJOFRHRWUwSDljZ3VrVHZzNjZiRE16OFI5Mm90WW9tL0RDTXlHVUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU82Rm1obzUxRU93VE1OVisrZThldEo1amRXWG9HZmZOcWp4ay96NlJGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmc0T0I1OXN5Q0xqMVNJMVljd1k0THlKTXBBRzNRekUxWC9TRGRlYjBXQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBYTJBa1NVMmRMTVJUNXhhRVhOZloxL3JDeVVMclZTWU1tQVpzSjFxREpXWE1NN2RsVXdzNlZJTzJBdE0xVEx1eCtyamlFaUY4YUVsNnRCUVkxSGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiRWlvM2JycE9Vcm8reDZEVGhwb3I0NUJZT0k4V1QvTTJacW9mOXRsN2IzTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQ001MGNUTHlSVE94M0o2OHhVaEpsUSIsInBob25lSWQiOiI1YTVjNTY0OC1kNTU2LTRjMzItODI4NS1mYWVkNzRlMzJkOGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFdwdXRRWjF5UU80SmlGU0FobHZ6NTNCYjhnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIycHYzSFJHMFV4ZG0zRXBmWE01RC9qbU9lND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQREhRNDJGOSIsIm1lIjp7ImlkIjoiMjM0ODEyOTkwNDIyODo2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeU0ydmtCRVBlWjJia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKTmlhczNzV1kyVlhWd3pRdkc4djBKUHdSSEpIalQrNVdGNk9DUVN2UUcwPSIsImFjY291bnRTaWduYXR1cmUiOiJGRm1Gc2ljY0d4REMvMDR2L2IrVjU4bnRlckl6cmdtRlcvTTRycWVraFQ2dFBQb05xOFpYYUtOZ2RmQWFaSEdCd3hoaW1KMDJWMWkwRWk5aURyUnhEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid2VtdDQ5cFdnTjl0czY3N05kZzVsR2xBbjFSdzRMWlpxQ0dUblFvZklqemhoM05sVEtUa0Y5ZS94UlduWVdHUjNPM01jVExLcXh1T0l1SVpUSXZ3aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTI5OTA0MjI4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1RZbXJON0ZtTmxWMWNNMEx4dkw5Q1Q4RVJ5UjQwL3VWaGVqZ2tFcjBCdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTYxMTkwOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGWTgifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE 👸❤️🧸❄️™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Cylee : Chiboy",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
