const { requireOwner } = require('../utils/permissions');

module.exports = {
  name: 'shutdown',
  description: 'Gracefully stop the bot (owner-only).',
  execute: async (bot, ctx) => {
    if (!(await requireOwner(ctx))) return;
    await ctx.reply('🛑 Bot shutting down... Goodbye!');
    process.exit(0);
  }
};
