const { SlashCommandBuilder } = require('discord.js');
const { quotefour } = require('./quote.json');
// quotefive, Quote6, Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quotefour')
        .setDescription('inspir(ation)'),
    async execute(interaction) {
        await interaction.reply(`${quotefour}`)
    },
};
