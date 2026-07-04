module.exports = {
  name: 'antilongtext',
  description: 'Block very long messages (placeholder).',
  execute: async (bot, ctx) => {
    await ctx.reply('Anti-longtext toggled (placeholder).');
  }
};
