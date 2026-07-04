module.exports = {
  name: 'setbanner',
  description: 'Change the menu banner.',
  execute: async (bot, ctx) => {
    if (ctx.message && ctx.message.photo) {
      await ctx.reply('Banner image received (placeholder).');
    } else {
      await ctx.reply('Usage: send an image with /setbanner as a caption');
    }
  }
};
