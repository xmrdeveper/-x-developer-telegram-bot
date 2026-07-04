const { requireOwner } = require('../utils/permissions');

module.exports = {
  name: 'eval',
  description: 'Evaluate JavaScript code (owner-only, dangerous!).',
  execute: async (bot, ctx) => {
    if (!(await requireOwner(ctx))) return;
    await ctx.reply('⚠️ /eval is disabled for safety. Enable with caution.');
  }
};
