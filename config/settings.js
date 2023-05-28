const fs = require("fs");
const chalk = require("chalk");
// EDIT DISINI
global.owner = ["6283838887677"]; // no own
global.packname = "© sticker by Fiko'xd"; // nama pack sticker
global.author = "FikoXdStore"; // nama author
global.pic = "https://i.postimg.cc/pdYdTCWq/20230528-180726.jpg"; // url foto

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
