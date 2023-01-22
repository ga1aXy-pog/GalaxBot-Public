const { SlashCommandBuilder } = require('discord.js');
const { Quote6 } = require('./quote.json');
// Quote6, Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quotesix')
        .setDescription('inspir(ation, you are!)'),
    async execute(interaction) {
        await interaction.reply(`${Quote6}`)
    },
};
