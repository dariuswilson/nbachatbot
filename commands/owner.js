const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('owner')
		.setDescription('Replies with who is the owner of the bot.'),
	async execute(interaction) {
		await interaction.reply({
			content: '**This bot was made by <@!520355927308894218>**',
			// ephemeral: true, // If true, makes command private. (Edit by Sky: It doesn't make the command private, it makes the *response* private))
		});
	},
};