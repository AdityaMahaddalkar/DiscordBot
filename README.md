# :robot: Custom Discord Bot :computer:

## IBM Watson Assistant Integration

The Discord Bot is integrated with IBM Watson Assistant, which is currently working on custom dialogs present in the ./dialog/bank_simple_workspace.json file. This is a simple assistant that processes input and extracts intents and special tokens such as dates and places and provides relevant output based on the same.

This integration has very limited functionality and is pretty inaccurate as compared to state of the art chatbots. This is because the intent data provided is limited. Although, this bot is fully functional considering simple queries and provides pretty accurate responses if the query consists of special tokens.
For more information visit [IBM Watson](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started).

To access the assistant, mention the bot's name before typing your query in the discord channel. E.g.
  - *@SteamMarketPrice what is today's schedule ?*

---

## Reddit API functionality (Memes fetching)

The functionality of this Bot is extended by addition of Reddit API calls to fetch data from subreddits. Currently only one subreddit's data fetching is implemented. The images from this subreddit are sent through the requested channel on my Discord server.

Further addition to this functionality will include video fetching, reddit links fetching and interactive upvoting-downvoting a specific post on Reddit. A scheduler fetches 100 memes every 1 hour from 'Hot' section of [Dank Memes](https://www.reddit.com/r/dankmemes/) and stored as '.png', '.jpg' or '.gif' similar to extension of original post. To request a meme, type in the discord channel the following command :
  - !dankmemes -----> *Bot sends a random dank meme*

---

## Steam market price fetching

This program is designed to keep track of certain inventory items in Steam Market and notify the user when the price rises to a certain amount greater than the max amount till that time.

This program will query steam market every 5 minutes after it's initiation, it will fetch the current median price of the item, compare it with previous maximum price, and if current price is 10% greater than the previous, it will notify the user. If the current is higher than the previous max, it will replace the previous max. The available commands for this functionality are:

  - !price -----> *Bot replies with current 'lowest price' of Shattered Web Case*
  - !maxprice -----> *Bot replies with the maximum 'lowest price' of Shattered Web Case from 21 Jan 2020 till today*

---

## Articles fetching

Another functionality of this program is fetching article links everyday at 7 am from websites like [NewYorker](https://newyorker.com) and
[ALDaily](https://www.aldaily.com) and creating a list of the same. These links can be forwarded by the Discord bot to my Discord channel as per
request.

The available commands for fetching articles from the given sites are as follows:

- !newyorker-news -----> *Bot outputs 3 news articles from The NewYorker*
- !newyorker-humor -----> *Bot outputs 3 humor tagged articles from The NewYorker*
- !newyorker-culture -----> *Bot outputs 3 culture tagged articles from The NewYorker*
- !newyorker-books -----> *Bot outputs 3 books tagged articles from The NewYorker*
- !aldaily-articles -----> *Bot outputs 3 general articles from ALDaily*
- !aldaily-books -----> *Bot outputs 3 books tagged articles from ALDaily*
- !aldaily-essays -----> *Bot outputs 3 essays or letters from ALDaily*

---

## Discord Bot for notification

The program will notify user on the discord server depending on the inventory prices discussed in the previous note. This is built on Discord Bot API which automates message passing through Discord channel.

Current version 1.0.0 handles simple commands given as follows:

- !ping  -----> *Bot replies with Pong*
- !status -----> *Bot replies with it's status if the bot is up*
- !hungry -----> *Bot gives random food emoji*
- !random -----> *Bot outputs 10 random emojis*

---

## Current status and Future Scope

Currently the program is designed to handle statically stored market items which are based on my inventory. Items consist CS:GO's Shattered Web Collection items which are currently volatile in their price ranges. The article links functionality is limited to manual commands from the user
to the bot.

In the future release, commands can be added to fetch given item prices whose names will be provided through discord server itself instead of statically coding and program bot through Discord to keep track of certain items for certain amount of time, after certain interval. The Bot
can be designed to track articles read be certain readers and process the same in the database.

Future scope for articles fetching can be addition of more websites throught which articles can be pulled and Per User based recommendation of articles based on previous User articles reading history.

Future scope for Reddit API will be addition of subreddits for fetching media from the same site.


:smile:

:100:
