module.exports = {
  name: 'zalgo',
  description: 'Generate glitched text.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /zalgo <text>');
    const zalgo = text.split('').map(c => c + '̸̢̧̡̰̲̟̟̠̼̖̙̈̆̈́̏̈́').join('');
    await ctx.reply(zalgo);
  }
};
