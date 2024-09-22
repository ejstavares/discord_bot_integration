const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		try {
		    // interaction.guild is the object representing the Guild in which the command was run
            await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
        } catch (error) {
            console.log('====================================');
            console.log('server info error command::', error);
            console.log('====================================');
        }
	},
};