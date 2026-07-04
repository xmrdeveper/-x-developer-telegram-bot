module.exports = {
  name: 'start',
  description: 'Start Bot',
  execute: async (bot, ctx) => {
    const firstName = ctx.from && (ctx.from.first_name || ctx.from.username || 'there');
    try {
      // Try to send profile photo if available
      const photos = await ctx.telegram.getUserProfilePhotos(ctx.from.id, 0, 1);
      if (photos && photos.total_count > 0) {
        const fileId = photos.photos[0][0].file_id; // best-effort
        await ctx.replyWithPhoto(fileId, { caption: `Welcome, ${firstName}!` });
        return;
      }
    } catch (e) {
      // ignore and fallback to text
    }
    await ctx.reply(`Welcome, ${firstName}! Use /menu to see options.`);
  }
};
