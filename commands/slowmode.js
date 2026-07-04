module.exports = {
  name: 'slowmode',
  description: 'Set a delay between messages (placeholder).',
  execute: async (bot, ctx) => {
    await ctx.reply('Slowmode: Telegram does not support per-group bot-set slowmode via Bot API. Implement via moderation and rate-limiting.');
  }
};
