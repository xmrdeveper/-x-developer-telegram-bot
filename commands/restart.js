const { requireOwner } = require('../utils/permissions');

module.exports = {
  name: 'restart',
  description: 'Restart the bot (owner-only).',
  execute: async (bot, ctx) => {
    if (!(await requireOwner(ctx))) return;
    await ctx.reply('🔄 Bot restarting...');
    // In production, use a process manager (PM2, systemd) to auto-restart
    process.exit(1);
  }
};
