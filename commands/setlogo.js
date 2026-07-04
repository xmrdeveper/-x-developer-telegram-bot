module.exports = {
  name: 'setlogo',
  description: 'Change the bot logo.',
  execute: async (bot, ctx) => {
    if (ctx.message && ctx.message.photo) {
      await ctx.reply('Logo received (placeholder). Save photo to storage to make it permanent.');
    } else {
      await ctx.reply('Usage: send an image with /setlogo as a caption');
    }
  }
};
