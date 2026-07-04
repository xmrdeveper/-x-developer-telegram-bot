module.exports = {
  name: 'pin',
  description: 'Pin a message (reply-to-pin recommended).',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      // If user replied to a message, pin that message
      if (ctx.message && ctx.message.reply_to_message) {
        const messageId = ctx.message.reply_to_message.message_id;
        await ctx.telegram.pinChatMessage(chatId, messageId);
        return ctx.reply('Message pinned.');
      }
      // Otherwise, accept an ID as argument
      const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
      if (args.length) {
        const messageId = parseInt(args[0], 10);
        await ctx.telegram.pinChatMessage(chatId, messageId);
        return ctx.reply('Message pinned by ID.');
      }
      await ctx.reply('Usage: reply to a message with /pin or /pin <message_id>');
    } catch (err) {
      await ctx.reply(`Failed to pin message: ${err.message}`);
    }
  }
};
