const { SlashCommandBuilder } = require('discord.js');
const { quotetwo } = require('./quote.json');
// quotethree, quotefour, quotefive, Quote6, Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quotetwo')
        .setDescription('inspire you(rself) :star:'),
    async execute(interaction) {
        await interaction.reply(`${quotetwo}`)
    },
};
