const { SlashCommandBuilder, PermissionFlagsBits, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Reporting another user for breaking rules.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Enter user that is breaking the rules.')
				// eslint-disable-next-line no-inline-comments
				.setRequired(true)) // .setRequired() is, by default, true so the line isn't needed.
		.addStringOption(option =>
			option.setName('reason')
				// eslint-disable-next-line quotes
				.setDescription("Reason you're reporting this user.")
				.setRequired(true)
				.addChoices(
					{ name: 'Discord TOS', value: 'Rule1' },
                    { name: 'Harassment', value: 'Rule2' },
                    { name: 'Racism', value: 'Rule3' },
                    { name: 'Sensitive Topics', value: 'Rule4' },
                    { name: 'NSFW', value: 'Rule5' },
                    { name: 'Advertising', value: 'Rule6' },
                    { name: 'Spam', value: 'Rule7' },
                    { name: 'IP Grabbers/etc', value: 'Rule8' },
					{ name: 'Other', value: 'OtherReason' },
				),
			)
		// eslint-disable-next-line no-inline-comments
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames), // Temp because command is still in the works, when done, delete!!
	async execute(interaction) {
		// interaction.channels.get('568454707039830049').send('test'),
		// channel.send('test');

		const reportedUser = interaction.options.getUser('user') // Gets the User option with the name 'user'
		const reportReason = interaction.options.getString('reason') // Gets the String option with name 'reason'

		if (reportReason === 'OtherReason') { // If the reason selected is 'OtherReason'
			const otherReportOption = new ModalBuilder()
				.setCustomId('Report Other')
				.setTitle('Reporting Information');

			const inputOtherReason = new TextInputBuilder()
				.setCustomId('inputOtherReason')
				// The label is the prompt the user sees for this input
				.setLabel('What\'s the reason for reporting this user?')
				// Short means only a single line of text
				.setStyle(TextInputStyle.Paragraph)
				.setPlaceholder('Reason for Report');

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(inputOtherReason);

		// Add inputs to the modal
		otherReportOption.addComponents(firstActionRow);

		await interaction.showModal(otherReportOption);
		}
		else {
			// const channel = client.channels.cache.get('568454707039830049');
			// channel.send('test');
		await interaction.reply({
			content: 'Your report has been submitted to online moderators.',
			// ephemeral: true,
		});
}
	},
};