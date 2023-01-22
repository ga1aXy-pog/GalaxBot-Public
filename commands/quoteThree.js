const { SlashCommandBuilder } = require('discord.js');
const { quotethree } = require('./quote.json');
// quotefour, quotefive, Quote6, Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quotethree')
        .setDescription('inspire(d by galaxy)'),
    async execute(interaction) {
        await interaction.reply(`${quotethree}`)
    },
};
