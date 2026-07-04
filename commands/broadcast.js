const { requireOwner, requireGroup } = require('../utils/permissions');

module.exports = {
  name: 'broadcast',
  description: 'Send a broadcast message to all configured chats (owner-only).',
  execute: async (bot, ctx) => {
    if (!(await requireOwner(ctx))) return;
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /broadcast <message>');
    await ctx.reply(`📢 Broadcast (placeholder): "${text}" would be sent to all chats.`);
  }
};
