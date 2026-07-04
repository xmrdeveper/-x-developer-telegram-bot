module.exports = {
  name: 'announce',
  description: 'Send an announcement to all members (admin only).',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /announce Announcement text here');
    await ctx.reply('Announcement sent (placeholder).');
  }
};
