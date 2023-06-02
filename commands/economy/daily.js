const { SlashCommandBuilder, MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Get daily coins!'),
	async execute(client, interaction) {
        let user = interaction.user; // the person who used the slash command
        let amount = 300; // amount of money for daily reward.
        let time = 86400000;
        let daily = await db.get(`daily_${interaction.user.id}`) // get the db of the date of getting daily reward.

        let duration = ms(time - (Date.now() - daily), {long: true}); // convert ms to hours/minutes/s

        if (daily !== null && time - (Date.now() - daily) > 0) { // if the daily is not null and the time (1 day) minus the date of the using of the cmd - the daily db is bigger than 0
            interaction.reply({content: `**You will be able to get daily rewards after \`${duration}\`** `})
        } else {
            let embed = new MessageEmbed()
            .setTitle(`Here are your daily coins!`)
            .setDescription(`Congratulations! You received ${amount} coins!`)
            interaction.reply({embeds: [embed] });
        }
	},
};