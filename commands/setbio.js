module.exports = {
  name: 'setbio',
  description: 'Update the bot description.',
  execute: async (bot, ctx) => {
    const bio = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!bio) return ctx.reply('Usage: /setbio <bio_text>');
    await ctx.reply('Bio updated (placeholder).');
  }
};
