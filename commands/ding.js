const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ding')
		.setDescription('Replies with Dong!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to ding dong')),
	async execute(interaction) {
		await interaction.reply({
			content: 'Dong!',
			// ephemeral: true, // If true, makes command private.
		});
	},
};