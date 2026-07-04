const { requireOwner } = require('../utils/permissions');

module.exports = {
  name: 'myid',
  description: 'Get your numeric Telegram ID.',
  execute: async (bot, ctx) => {
    const userId = ctx.from ? ctx.from.id : 'unknown';
    await ctx.reply(`Your Telegram ID: ${userId}\n\nℹ️ Save this ID and use it as OWNER_ID in your Railway env variables.`);
  }
};
