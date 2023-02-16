const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		/**
		 * Comment by Sky: The main differences between the two would come down to use-cases:
		 * User: Will mainly be used to retrieve data that is not guild-specific and, in most cases, is immuteable.
		 * GuildMember: This is the one you're going to use for guild-specific actions, for example ban, kick, timeouts, etc. will
		 * all be using the GuildMember Object rather than the User Object.
		*/
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};