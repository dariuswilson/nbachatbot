const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('log')
        .setDescription('Sets the channel where report logs are.')
        .addChannelOption(option => option.setName('channel').setDescription('(input log channel)')
        .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction) {
		await interaction.reply({
            
		});
	},
};