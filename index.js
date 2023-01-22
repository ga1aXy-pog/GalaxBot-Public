const { Client, Events, GatewayIntentBits, SlashCommandBuilder, Collection } = require('discord.js')
const { token } = require('./config.json')
const fs = require('node:fs');
const path = require('node:path');
// const { triggerAsyncId } = require('node:async_hooks');

const client  = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c=> {
    console.log(`System started! Logged in as ${c.user.tag}`);
});


client.login(token);

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING FOR CRASH] The command at ${filePath} is missing a required "data" or "execute" property in code.`);
    }
}

// events folder tab system (causes bot to end after one command is stated)
/*const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
};
*/


client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});



module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('replies with NULL'),
        async execute(interaction) {
            await interaction.reply('NULL (System PING-REPSONSE Command Working!)');
        },
};

// executable file path: C:\Users\rishi\Documents\GalaxBot\index.js
// link: https://discord.com/oauth2/authorize?client_id=930629373499953212&permissions=8&scope=bot%20applications.commands