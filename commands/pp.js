module.exports = {
  name: 'pp',
  description: 'Random joke size generator.',
  execute: async (bot, ctx) => {
    const size = Math.floor(Math.random() * 100);
    await ctx.reply(`📏 Size: ${size}cm`);
  }
};
