/* eslint-disable no-inline-comments */
const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) { // Changed this in order to allow interaction othar than a slash commands.

			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			}
			catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}
		else if (interaction.isModalSubmit()) {
			// Handle the ModaLSubmitInteraction Here
			if (interaction.customId === 'Report Other') {
				const otherReason = interaction.fields.getTextInputValue('inputOtherReason');
					interaction.reply ({ content: `Your report has been submitted to online moderators. ${interaction.targetMember}, 
					Reason: ${otherReason}` });
			}
		}
		console.log(interaction);
	},
};