const { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction } = require('discord.js');
// const Keyv = require('keyv');
// const keyv = new Keyv('sqlite://path/to/database.sqlite');


module.exports = {
        data: new SlashCommandBuilder()
        .setName('log')
        .setDescription('Sets the channel where report logs are.')
                .addChannelOption(option => option.setName('channel').setDescription('(input log channel)')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
/**
* @param { ChatInputCommandInteraction} interaction
*/
	async execute(interaction) {
                const channel = interaction.options.getChannel('channel');
		await interaction.reply({
                        content: `${channel}`,
		});
                console.log(interaction);
	},
};
