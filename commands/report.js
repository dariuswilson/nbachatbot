const { SlashCommandBuilder, PermissionFlagsBits, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Reporting another user for breaking rules.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Enter user that is breaking the rules.')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				// eslint-disable-next-line quotes
				.setDescription("Reason you're reporting this user.")
				.setRequired(true)
				.addChoices(
					{ name: 'Rule 1 - Discord TOS', value: 'Rule1' },
					{ name: 'Rule 2 - Harassment', value: 'Rule2' },
					{ name: 'Rule 3 - Racism', value: 'Rule3' },
					{ name: 'Rule 4 - Drama Starting/Baiting', value: 'Rule4' },
					{ name: 'Rule 5 - Bypassing', value: 'Rule5' },
					{ name: 'Rule 6 - Sensitive Topics', value: 'Rule6' },
					{ name: 'Rule 7 - NSFW', value: 'Rule7' },
					{ name: 'Rule 8 - Advertising', value: 'Rule8' },
					{ name: 'Rule 9 - Spam', value: 'Rule9' },
					{ name: 'Rule 10 - IP Grabbers/etc', value: 'Rule10' },
					{ name: 'Rule 11 - Abusing Report', value: 'Rule11' },
					{ name: 'Rule 12 - Trolling Team Servers/Chats', value: 'Rule12' },
					{ name: 'Rule 13 - Public Argument over Infractions', value: 'Rule13' },
				),
			)
		// eslint-disable-next-line no-inline-comments
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames), // Temp because command is still in the works, when done, delete!!
	async execute(interaction) {
		// interaction.channels.get('568454707039830049').send('test'),
		// channel.send('test');
		await interaction.reply({
			content: 'Your report has been submitted to online moderators.',
			// ephemeral: true,
		});
	},
};