const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modal')
		.setDescription('Show Modal Inputs!'),
	async execute(interaction) {
        try {
            const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal');
// Add components to modal

		// Create the text input components
		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your favorite color?")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);

		const input = new TextInputBuilder()
		.setCustomId('input')
		.setLabel("Default input test")
		// Paragraph means multiple lines of text.
		.setStyle(TextInputStyle.Paragraph)
		// set the maximum number of characters to allow
		.setMaxLength(1000)
		// set the minimum number of characters required for submission
		.setMinLength(3)
		// set a placeholder string to prompt the user
		.setPlaceholder('Enter some text!')
		// set a default value to pre-fill the input
		.setValue('Default')

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);
		const otherActionRow = new ActionRowBuilder().addComponents(input);

		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow, otherActionRow);
            // Show the modal to the user
		    await interaction.showModal(modal);
        } catch (error) {
            console.log('====================================');
            console.log('ping error command::', error);
            console.log('====================================');
        }
	},
};