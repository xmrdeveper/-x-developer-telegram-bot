module.exports = {
  name: 'drunk',
  description: 'Drunk meter.',
  execute: async (bot, ctx) => {
    const level = Math.floor(Math.random() * 100);
    await ctx.reply(`🍺 Drunk level: ${level}%`);
  }
};
