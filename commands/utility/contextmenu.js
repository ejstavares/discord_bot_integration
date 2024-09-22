const { ContextMenuCommandBuilder, ApplicationCommandType} = require('discord.js');

module.exports = {
	data: new ContextMenuCommandBuilder()
        .setName('User Information')
        .setType(ApplicationCommandType.User),
	async execute(interaction) {
        try {
            // Get the User's username from context menu
            console.log('Get the User\'s username from context menu', interaction);
            const { username, email } = interaction.targetUser;
            console.log(username);
            await interaction.reply('USER INFO.: '+ username);

            // send message
            const channel = interaction.client.channels.cache.get('1285259137881604129');
            channel.send('test send message');
        } catch (error) {
            console.log('====================================');
            console.log('ping error command::', error);
            console.log('====================================');
        }
	},
};