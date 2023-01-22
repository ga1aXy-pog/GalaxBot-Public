const { SlashCommandBuilder } = require('discord.js');
const { quotefive } = require('./quote.json');
// Quote6, Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quotefive')
        .setDescription('inspir(ation, you are)'),
    async execute(interaction) {
        await interaction.reply(`${quotefive}`)
    },
};
