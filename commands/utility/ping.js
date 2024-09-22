const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
        try {
            await interaction.reply('Pong!');
        } catch (error) {
            console.log('====================================');
            console.log('ping error command::', error);
            console.log('====================================');
        }
	},
};