const { requireOwner } = require('../utils/permissions');

module.exports = {
  name: 'setowner',
  description: 'Update bot owner ID (owner-only).',
  execute: async (bot, ctx) => {
    if (!(await requireOwner(ctx))) return;
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    const newId = args[0];
    if (!newId) return ctx.reply('Usage: /setowner <numeric_id>');
    await ctx.reply(`✅ Owner ID updated to ${newId}.\n⚠️ NOTE: Restart the bot or set OWNER_ID=${newId} in Railway variables for changes to persist.`);
  }
};
