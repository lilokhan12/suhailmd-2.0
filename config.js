const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "SUHAIL_21_00_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA5LFxuICAgICAgICA0NixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlFUm10M25iU3FOL1d0bGM5WW1JWnJnSVNjZmFiV25HWmhPYmFCSmdVdEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDkwNjQyNzMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOTE1NURCRjdBRjk5OUY0MDk0RkZFMjE3NTEwRDYwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2OTE2MTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwOTA2NDI3MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEyRTcyRDVDMEUzQzM4RUQ3MTkyODFBOTUzMzU5MEM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY5MTYxNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5MDY0MjczM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTg5OTMxNENCNkQ1OTQ0MDgxM0Y1NjYyNjMwQUU5ODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjkxNjE5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDkwNjQyNzMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQ0RDOEMzRTE4QTU1MjUyQTBGRjM5NDIyMEJBNUEwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2OTE2MTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaHhQTTJjNTFRZ1czZDlCelFvdWpDUVwiLFxuICBcInBob25lSWRcIjogXCJhZmQzOWUyZC1kZDFkLTRmNzEtOGRhNi03YWZhM2VjNDBlNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAyMjgsXG4gICAgICAxMTAsXG4gICAgICAxNjUsXG4gICAgICA0MSxcbiAgICAgIDE2NCxcbiAgICAgIDIyLFxuICAgICAgMjAxLFxuICAgICAgMTAxLFxuICAgICAgMTI2LFxuICAgICAgMTgzLFxuICAgICAgMTIzLFxuICAgICAgMTUsXG4gICAgICAyMzUsXG4gICAgICAxMDgsXG4gICAgICAxNTgsXG4gICAgICAxOTMsXG4gICAgICAyMzAsXG4gICAgICAxNDcsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICA2MCxcbiAgICAgIDE3NCxcbiAgICAgIDExOSxcbiAgICAgIDIwNyxcbiAgICAgIDUzLFxuICAgICAgMTEyLFxuICAgICAgMjE2LFxuICAgICAgOTQsXG4gICAgICAxMjMsXG4gICAgICAxMzksXG4gICAgICAyMzUsXG4gICAgICAxNzIsXG4gICAgICA3MCxcbiAgICAgIDE5MSxcbiAgICAgIDIyOCxcbiAgICAgIDI0NCxcbiAgICAgIDE5MCxcbiAgICAgIDE0NixcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM5RExXNkVHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwOTA2NDI3MzM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NTY1NDc0MjkwNDg3NjoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLYutmF2q/bjNmGXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdTbnI4SEVObVIyTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPZm9ka0ZhNjRTRFBQd0Uwby9KbFd2L0RGOUR4TUJmRmE5dC9ZTlI1SkFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxiamIyYnBWTWY1MHpGYmxmT29td1V4dE43ODdaRlEyaURnZ2gvOWY2dDNqQVdSN2RRcjNVS2ROTDExZ0lNNjcxNmZPYVFWNWl3d0M2b2VXend4UkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRVSW1MazRkTlBBNWVpN3VnZlhXUkhPanVQU0NtQUcvL1J1RkUwK0Q3RmYxRlR0U2dFTGE1KytnNHh3UmFJRU1xV2lPZG5KRWpmUjVKc1JNL1NDV0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5MDY0MjczMzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjkxNjEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWJ2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNYnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1YTdaellmNW5iTjBBM2Mvd3g0VkdqT3RIMTI1RDhna2s1K2M2alpFRmxrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTE2NjI3MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY5MTYxNTcyMVwifSIKfQ==", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
