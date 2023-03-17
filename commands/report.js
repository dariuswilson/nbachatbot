const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

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
					{ name: 'Discord TOS', value: 'Discord TOS' },
                    { name: 'Harassment', value: 'Harassment' },
                    { name: 'Racism', value: 'Racism' },
                    { name: 'Sensitive Topics', value: 'Sensitive Topics' },
                    { name: 'NSFW', value: 'NSFW' },
                    { name: 'Advertising', value: 'Advertising' },
                    { name: 'Spam', value: 'Spam' },
                    { name: 'IP Grabbers/etc', value: 'IP Grabbers/etc' },
					{ name: 'Other', value: 'OtherReason' },
				),
			),
		// eslint-disable-next-line no-inline-comments
		// .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames), // Temp because command is still in the works, when done, delete!!
/**
* @param { ChatInputCommandInteraction} interaction
*/
	async execute(interaction) {
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

		const otherReasonSubmission = await interaction.awaitModalSubmit({
			time: 25000,
		}).catch(()  => null);
		if(!otherReasonSubmission) return interaction.followUp('The command has been canceled as there was no reason provided in time');
		const otherReason = otherReasonSubmission.fields.getTextInputValue('inputOtherReason');
		await otherReasonSubmission.reply ({ content: `Your report has been submitted to online moderators.` });
		const channel = interaction.client.channels.cache.get('568454707039830049');
		channel.send(`${interaction.member} has reported ${reportedUser} for ${otherReason}`);
		}
		else {
		await interaction.reply({
			content: 'Your report has been submitted to online moderators.',
			// ephemeral: true,
		});
		const channel = interaction.client.channels.cache.get('568454707039830049');
		channel.send(`${interaction.member} has reported ${reportedUser} for ${reportReason}`);
	}},
};