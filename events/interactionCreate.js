/* eslint-disable no-inline-comments */
const { Events, BaseInteraction } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
/**
* @param { BaseInteraction} interaction
*/
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
			
			}
		}
