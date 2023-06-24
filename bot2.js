require('dotenv').config();
const { Client, GatewayIntentBits, Discord } = require('discord.js');
const cron = require('node-cron');
const {  IntentsBitField , createAudioPlayer, NoSubscriberBehavior, AudioPlayerStatus, createAudioResource, joinVoiceChannel  } = require('@discordjs/voice');


const { TOKEN, VOICE_CHANNEL_ID, GUILD_ID, TEXT_CHANNEL_ID, MATCH_DINGS_WITH_HOUR } = process.env;

const client = new Client({ intents: 
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
    ]
});


client.on('ready', async () => {
	try {
		guild = await client.guilds.fetch(GUILD_ID);
		voiceChannel = guild.channels.cache.get(VOICE_CHANNEL_ID);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
	textChannel = guild.channels.cache.get(TEXT_CHANNEL_ID);
	console.log('Big Ben Ready...');
	// console.log(guild, voiceChannel, textChannel)
	// client.user.setPresence({ activity: { name: 'the hour', type: 'WATCHING' }, status: 'idle' });
    client.user.setPresence({ activities: [{ name: 'activity' }], status: 'idle' });

});

client.login(TOKEN);