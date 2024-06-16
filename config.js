const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010820544";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_50_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT0xhQ0k0VEVraWYzNnRoTFFBSTkwekhUcmYzOExSZ3RQM2ZUWDl6MVlRYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiallRckRLdUZSWmUtRmg3ME1KSTVfQVwiLFxuICBcInBob25lSWRcIjogXCIwZTYyOWYxZS1lYzZlLTQ3MDUtYWQyZC01ZTU0MzdjNGYyOTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICA4NCxcbiAgICAgIDkwLFxuICAgICAgMTQ0LFxuICAgICAgNjUsXG4gICAgICAxNzUsXG4gICAgICAyOSxcbiAgICAgIDEwNCxcbiAgICAgIDI0MixcbiAgICAgIDcyLFxuICAgICAgMTg4LFxuICAgICAgODIsXG4gICAgICAyNDcsXG4gICAgICAxNDcsXG4gICAgICAxOSxcbiAgICAgIDY5LFxuICAgICAgMjYsXG4gICAgICAyMzAsXG4gICAgICAyNDEsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMjMwLFxuICAgICAgMTY2LFxuICAgICAgNCxcbiAgICAgIDI5LFxuICAgICAgMTI1LFxuICAgICAgMjMzLFxuICAgICAgMTY4LFxuICAgICAgOTgsXG4gICAgICAyNDUsXG4gICAgICAzMixcbiAgICAgIDI1MyxcbiAgICAgIDI0MyxcbiAgICAgIDIyLFxuICAgICAgNDYsXG4gICAgICAxNDksXG4gICAgICAxNixcbiAgICAgIDg0LFxuICAgICAgMTI4LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNSMTJYTTFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwODIwNTQ0OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTVlNXCIsXG4gICAgXCJsaWRcIjogXCIxMjM1NTM3NjA0NjkxMjg6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlTL2Z3RUVPbkx2TE1HR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBanA3NmhMRXRtZW1JajBhUExQQnd4OWMwNVp0Z1QwczBQRFlLZGxXWUVRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRTNDhwajFRZ212ODl6K0JTMXB0Z3JmT2UxaGNSQUIzbHlhT1Z0Yzk4NGVVSFAvQWo5dnpINE85dUhaUWduRlBiTXdDZTBpWnBzVmE0TEFuU0hCMEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJiK3gvMlhWVW9wVENYTlg2QU1mQkE1UzQ2c0V3cVRZZGRRVU5UZFZZUVBoaEJTbENJZTl3dVl5VkdodUpQalJWQ1A2M2NWaDBqTXI5QXhkUEpGTWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA4MjA1NDQ6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU2MDIzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk5clwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTlyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZS9MMTg1dW53WkI1MnZuTGlnRHJUQTNzNEpzZUl1QVNhTDJpZEJOb25qQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzM1ODM4OTg3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
