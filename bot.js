import discord
from discord.ext.commands import Bot
from discord.ext import commands
from discord.voice_client import VoiceClient
import asyncio
import time
import random
startup_extensions = ["Music"]

Client = discord.Client()
client = commands.Bot (command_prefix = "^")

@client.event
async def on_ready():
    print ("Bot is ready!")
    print("Logged in as:")
    print(client.user.name)
    print("ID:")
    print(client.user.id)
    print("Ready to use")
    bot = client
    await client.change_presence(game=discord.Game(name="My prefix is ^"))

    
class Main_Commands():
    def _init_(self,bot):
        self.bot = bot
    
@client.event    
async def on_member_join(member):
    
    await client.send_message(client.get_channel('391486937686474779'), "Hello and Welcome to HB's Development Dungeon <@%s>! Hope you have a great time here!"  % (str(member.id)))
        
   
        

@client.event
async def on_message(message):
    if message.content.upper().startswith ("HI"):
        userID = message.author.id
        await client.send_message (message.channel, "Hello :wave: <@%s> ! I'm Pixel! You can call me Pix if you want to." % (userID))
    if message.content.upper().startswith ("HOW ARE YOU?"):
        userID = message.author.id
        await client.send_message (message.channel, "I'm fine :ok_hand: <@%s> , thank you for asking." % (userID))
    if message.content.upper().startswith ("WHAT ARE YOU DOING?"):
        await client.send_message (message.channel, "I'm talking to you , aren't I?")
    if message.content.upper().startswith ("DO YOU PLAY PALADINS?"):
        await client.send_message (message.channel, "No I don't , why do you ask? Is it a good game?")
    if message.content.upper().startswith ("DO YOU HAVE A STEAM ACCOUNT?"):
        await client.send_message (message.channel, "No I don't have a Steam account , I am not on any social media exept for Discord.")
    if message.content.upper().startswith ("WHO CREATED YOU?"):
        await client.send_message (message.channel, "My creator is HB#9759.")
    if message.content.upper().startswith ("DO YOU PLAY MINECRAFT?"):
        await client.send_message (message.channel, "No , I don't play Minecraft. Why do you ask? Is it a good game?")
    if message.content.upper().startswith ("/PING"):
        await client.send_message (message.channel, "Pong!")
    if message.content.upper().startswith ("WHO IS YOUR CREATOR?"):
        await client.send_message(message.channel, "HB#9759 created me.")
    if message.content.upper().startswith ("HOW IS THE WEATHER TODAY?"):
        await client.send_message(message.channel, "How would I know? I'm just a bot who's talking to you , I don't even exist in real life ... ¯\_(ツ)_/¯")
    if message.content.upper().startswith ("PIX"):
        await client.send_message(message.channel, "Yes? You mentioned me didn't you?")
    if message.content.upper().startswith ("CUNT"):
        userID = message.author.id
        await client.send_message(message.channel, "Why are you swearing at me <@%s> :frowning:? I didn't do anything to you... :(" % (userID))
    if message.content.upper().startswith("^8BALL"):
         userID = message.author.name
         await client.send_message(message.channel, random.choice ([":8ball: | Hmm ,It is certain, **%s**" % (userID),
                                                                 ":8ball: | 'Tis is decidedly so, **%s**" % (userID),
                                                                 ":8ball: | Without a doubt, **%s**" % (userID),
                                                                 ":8ball: | Yes, definitely, **%s**" % (userID),
                                                                 ":8ball: | You may rely on it, **%s**" % (userID),
                                                                 ":8ball: | As I see it, yes, **%s**" % (userID),
                                                                 ":8ball: | Most likely, **%s**" % (userID),
                                                                 ":8ball: | Outlook is good , **%s**" % (userID),
                                                                 ":8ball: | Yes, **%s**" % (userID),
                                                                 ":8ball: | Signs point to yes, **%s**" % (userID),
                                                                 ":8ball: | Reply hazy try again, **%s**" % (userID),
                                                                 ":8ball: | Ask again later, **%s**" % (userID),
                                                                 ":8ball: | Better not tell you now, **%s**" % (userID),
                                                                 ":8ball: | Cannot predict now, **%s**" % (userID),
                                                                 ":8ball: | Concentrate and ask again, **%s**" % (userID),
                                                                 ":8ball: | Don't count on it, **%s**" % (userID),
                                                                 ":8ball: | My reply is no, **%s**" % (userID),
                                                                 ":8ball: | My sources say no, **%s**" % (userID),
                                                                 ":8ball: | Very doubtful, **%s**" % (userID)])) #8ball command
         
                                                                 
    if message.content.upper().startswith('^GUESS'): 
        userID = message.author.name
        await client.send_message(message.channel, ':question: | Guess a number between 1 to 10, **%s**' % (userID))
 
        def guess_check(m):
            return m.content.isdigit()
 
        guess = await client.wait_for_message(timeout=60.0, author=message.author, check=guess_check)
        answer = random.randint(1, 10)
        if guess is None:
            fmt = ':question: | Sorry, you took too long. It was {}.'
            await client.send_message(message.channel, fmt.format(answer))
            return
        if int(guess.content) == answer:
            await client.send_message(message.channel, ':question: | You are right, **%s**!' % (userID))
        else:
            await client.send_message(message.channel, ':question: | Sorry. It is actually {}, **%s**.'.format(answer) % (userID))                                                              

    
if __name__ == "__main__":
    for extension in startup_extensions:
        try:
            bot.load_extension(extension)
        except Exception as e:
                exc = "(): ()".format(type(e).__name__, e)
                print ("Failed to load extension()\n()".format(extension, exc))
       
        
client.run("MzkwODg3NjUzMDkwMDAwODk3.DRQ1KA.iks2pl6I-mxM9b35FAMjXQqc0pI")                                 
                                   
