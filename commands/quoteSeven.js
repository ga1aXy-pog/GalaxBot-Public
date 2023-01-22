const { SlashCommandBuilder } = require('discord.js');
const { Quote7 } = require('./quote.json');
// Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote7')
        .setDescription('inspire(d your mum :troll:)'),
    async execute(interaction) {
        await interaction.reply(`${Quote7}`)
    },
};
