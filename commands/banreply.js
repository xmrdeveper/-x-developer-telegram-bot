module.exports = {
  name: 'banreply',
  description: "Placeholder: Ban the user by replying to their message.",
  execute: async (bot, ctx) => {
    if (ctx.message && ctx.message.reply_to_message) {
      await ctx.reply('Placeholder: would ban the replied user, but destructive actions are disabled.');
    } else {
      await ctx.reply('Usage: reply to a user message with /banreply');
    }
  }
};
