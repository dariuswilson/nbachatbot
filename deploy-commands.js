const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('fs');
const path = require('path');

const readdirSyncRecursively = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = readdirSyncRecursively(path.join(dir, file), filelist);
        } else {
            filelist.push(path.join(dir, file));
        }
    });

    return filelist;
};

const commands = [];
const commandFiles = readdirSyncRecursively('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();
