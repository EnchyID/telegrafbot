const Telegraf = require("telegraf");
const bot = new Telegraf("1395527061:AAEMPOUJm5-dl3B_wZE1H0JVdaPcUa8BD2E");

bot.start((ctx) => {
    ctx.reply("Hi i'm your bot them :D");
});

bot.launch();
