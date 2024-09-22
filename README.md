
# Configuring a Discord Bot in Node.js and [Discord.js](https://discord.js.org/)


Building your own Discord bot using Node.js. This repository provides step-by-step instructions on how to create a Discord bot. The setting up a development environment and implementing off basic functionality are done. The guide aimes you to installing dependencies, and test your discord applicaion bot.


### 1 - Install
```bash
npm install
```

### 2 - Setting up a bot application following this article [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### 3 - Adding your bot to servers in this [article](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)


### 4 - Configure environment variables

Copy ``.env.example`` to ``.env`` and configure your:
- `CLIENT_TOKEN`: Open your application in the [Discord Developer Portal](https://discord.com/developers/applications) and go to the **"Bot" page** to copy your token.
- `CLIENT_ID`: Your application's client id ([Discord Developer Portal](https://discord.com/developers/applications) > **"General Information"** > **application id**).
- `GUILD_ID`: Your development server's id ([Enable developer mode](https://support.discord.com/hc/en-us/articles/206346498) > **Right-click the server title** > **"Copy ID"**).

### 5 - Run app
```bash
node index.js 
```
If you see the success message, check for the commands in the server by typing `/` If all goes well, you should be able to run them and see your bot's response in Discord!

**Commands on Discord:** \
`/ping` \
`/user` \
`/server`\
`/modal`

### Context Menus Example 'User Information'
`Context Menus are application commands which appear when right clicking or tapping a user or a message, in the Apps submenu.` Article [here](https://discordjs.guide/interactions/context-menus.html)


## Articles Helper
- [discordjs Doc](https://discordjs.guide/preparations)
- [discord Doc](https://discord.com/developers/docs/intro)

