const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with NULL!"),
    async execute(interaction) {
        // interaction.reply is the object that allows the bot to give a response to a command X
        await interaction.reply("NULL!")
    },
};