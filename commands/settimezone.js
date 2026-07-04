module.exports = {
  name: 'settimezone',
  description: 'Set the default timezone.',
  execute: async (bot, ctx) => {
    const tz = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!tz) return ctx.reply('Usage: /settimezone <Timezone> (e.g. UTC, Europe/Berlin)');
    await ctx.reply(`Timezone would be set to: ${tz} (placeholder)`);
  }
};
