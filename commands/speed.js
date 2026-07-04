module.exports = {
  name: 'speed',
  description: 'Response Speed',
  execute: async (bot, ctx) => {
    const start = Date.now();
    const m = await ctx.reply('Measuring...');
    const diff = Date.now() - start;
    await ctx.reply(`Response time: ${diff}ms`);
  }
};
