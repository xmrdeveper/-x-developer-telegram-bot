module.exports = {
  name: 'banhelp',
  description: "Show help for all ban-related commands.",
  execute: async (bot, ctx) => {
    await ctx.reply('Use /banmenu to see the full list of ban commands. Note: destructive actions are disabled in this deployment.');
  }
};
