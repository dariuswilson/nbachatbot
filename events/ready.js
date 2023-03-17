const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: 'with discord.js' }] });
		// const channel = client.channels.cache.get('621885299936722954');
		// channel.send('Clue is almost completely done with me!');
	},
};