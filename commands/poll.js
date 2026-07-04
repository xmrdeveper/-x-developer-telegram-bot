module.exports = {
  name: 'poll',
  description: 'Create a group poll.',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    if (args.length < 2) return ctx.reply('Usage: /poll Question | Option1 | Option2 | ...');
    const raw = ctx.message.text.split(' ').slice(1).join(' ');
    const parts = raw.split('|').map(p => p.trim()).filter(Boolean);
    if (parts.length < 2) return ctx.reply('Provide question and at least one option.');
    const question = parts[0];
    const options = parts.slice(1);
    try {
      await ctx.telegram.sendPoll(ctx.chat.id, question, options, {is_anonymous:false});
    } catch (err) {
      await ctx.reply(`Failed to create poll: ${err.message}`);
    }
  }
};
