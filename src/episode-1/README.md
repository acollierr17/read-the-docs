# Read The Docs - Role Notifications
Send a message in another channel when a specific role is mentioned

How we will achieve this:
* [x] Check the [mentions](https://discord.js.org/#/docs/main/stable/class/MessageMentions?scrollTo=roles) in a [message](https://discord.js.org/#/docs/main/stable/class/Message) for a specific [role](https://discord.js.org/#/docs/main/stable/class/Role)  
* [x] Get a [text channel](https://discord.js.org/#/docs/main/stable/class/TextChannel) from the [guild channels collection](https://discord.js.org/#/docs/main/stable/class/GuildChannelManager) that new messages will be sent in  
* [x] [Send](https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=send) a new [embedded](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) message to the channel when a role mention is detected  

## Watch the video
You can find the video for this episode [here](https://www.youtube.com/watch?v=Zge8ipoVqh0)!

## Bonus
Currently, role notifications are being sent even if the role was mentioned in the role notifications channel itself. I don't want this functionality to happen. If you want to fix this, please, fork this repo and create a new PR! This applies to the `/src/episode-1/index.ts` file.
