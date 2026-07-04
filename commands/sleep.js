module.exports = {
  name: 'sleep',
  description: 'Sleep meter.',
  execute: async (bot, ctx) => {
    const level = Math.floor(Math.random() * 100);
    await ctx.reply(`😴 Sleep level: ${level}%`);
  }
};
