const { SlashCommandBuilder, PermissionFlagsBits, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('report')
		.setDescription('Reporting another user for breaking rules.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Enter user that is breaking the rules.')
				.setRequired(true)) // .setRequired() is, by default, true so the line isn't needed.
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
					{ name: 'Other', value: 'OtherReason'} // Added the Other option
				),
			)
		// eslint-disable-next-line no-inline-comments
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames), // Temp because command is still in the works, when done, delete!!
	async execute(interaction) {
		// interaction.channels.get('568454707039830049').send('test'),
		// channel.send('test');
		
		/**
		 * Okay so, I always do best explaining when I'm *actually* coding but I will explain everything
		 * I add so you'll be able to replicate it in the future when needed.
		 */

		const reportedUser = interaction.options.getUser('user') // Gets the User option with the name 'user'
		const reportReason = interaction.options.getString('reason') // Gets the String option with name 'reason'

		if (reportReason === 'OtherReason') { // If the reason selected is 'OtherReason'

			/**
			 * Show this modal. Since you asked for general directions, I won't code the actual modal but
			 * you basically use ModalBuilder() and it's methods to create a modal with text inputs.
			 * ModalBuilder() docs: @link https://discord.js.org/#/docs/builders/main/class/ModalBuilder
			 * TextInputBuilder() docs: @link https://discord.js.org/#/docs/builders/main/class/TextInputBuilder
			 * djs's guide on how to build & show modals: 
			 * @link https://discordjs.guide/interactions/modals.html#building-and-responding-with-modals
			 * @lik https://discordjs.guide/interactions/modals.html#receiving-modal-submissions
			 * 
			 * Receiving and responding to the modal will be done in your events/interactionCreate.js file.
			 * 
			 * Hopefully that helps, let me know if you need more help with anything :)
			 * (you don't have to accept the fork, I just created it for the ability to send the files back to you easily)
			 */
			await interaction.showModal()
		}

		await interaction.reply({
			content: 'Your report has been submitted to online moderators.',
			// ephemeral: true,
		});
	},
};