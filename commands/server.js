const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("provides data of the server"),
    async execute(interaction) {
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(`This server is ${interaction.guild.name}; it has ${interaction.guild.memberCount} members; the creator of this bot is galaxy#3903 (sponsor me).`);
    },
};