const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ClientApplication } = require('discord.js');
const { quoteone } = require('./quote.json');
// quotetwo, quotethree, quotefour, quotefive, Quote6, Quote7, Quote8, Quote9, Quote10, Quote11, Quote12, Quote13, Quote14, Quote15


module.exports = {
    data: new SlashCommandBuilder()
        .setName('quoteone')
        .setDescription('inspire :star:'),
    async execute(interaction) {
        await interaction.reply(`${quoteone}`)
    },
};

