const { SlashCommandBuilder, MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Check balance'),
    async execute(client, interaction) {
        try {
            console.log("Interaction: ", interaction); // Debugging line

            let user = interaction.user;
            if (!user) {
                console.error("User not found in the interaction object");
                return;
            }

            let wallet = db.get(`wallet_${user.id}`);
            let bank = db.get(`bank_${user.id}`);

            let authorEmbed = new MessageEmbed()
                .setTitle(`${interaction.user.username}'s Balance:`)
                .setDescription(`**Wallet:** ${wallet}\n **Bank:** ${bank}`)
                .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
            interaction.reply({embeds: [authorEmbed]});
        } catch (error) {
            console.error("Error in balance command: ", error);
        }
    }
}
