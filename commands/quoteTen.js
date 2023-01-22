const { SlashCommandBuilder } = require('discord.js');
const { Quote10 } = require('./quote.json');
// Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quoteten')
        .setDescription('in(x = log[base E] x)'),
    async execute(interaction) {
        await interaction.reply(`${Quote10}`)
    },
};
