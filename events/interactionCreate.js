const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
        //Receiving modal submissions
        if (interaction.isModalSubmit()) { //The interactionCreate event
	        console.log(interaction);
            //Responding to modal submissions
            if (interaction.customId === 'myModal') {
                // Get the data entered by the user
                const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
                const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
                console.log('Get the data entered by the user', { favoriteColor, hobbies });
                await interaction.reply({ content: 'Your submission was received successfully!' });
            }
            return;
        } 
        
		if (!interaction.isChatInputCommand() && !interaction.isUserContextMenuCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};