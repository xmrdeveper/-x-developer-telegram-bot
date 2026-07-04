const { requireOwner, requireGroup } = require('../utils/permissions');

module.exports = {
  name: 'owner',
  description: 'Owner info and commands (owner-only).',
  execute: async (bot, ctx) => {
    if (!(await requireOwner(ctx))) return;
    const ownerId = process.env.OWNER_ID || 'Not set';
    await ctx.reply(`👑 Bot Owner: ${ownerId}\n\nOwner-only commands:\n/shutdown - Stop the bot\n/restart - Restart the bot\n/stats - View bot stats\n/broadcast - Send message to all chats`);
  }
};
