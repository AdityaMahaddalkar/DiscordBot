# Steam Community Market Price Tracker

## Steam market price fetching

This program is designed to keep track of certain inventory items in Steam Market and notify the user when the price rises to a certain amount greater than the max amount till that time.

This program will query steam market every 5 minutes after it's initiation, it will fetch the current median price of the item, compare it with previous maximum price, and if current price is 10% greater than the previous, it will notify the user. If the current is higher than the previous max, it will replace the previous max.

---

## Articles fetching

Another functionality of this program is fetching article links everyday at 7 am from websites like [NewYorker](https://newyorker.com) and
[ALDaily](https://www.aldaily.com) and creating a list of the same. These links can be forwarded by the Discord bot to my Discord channel as per
request.

## Discord Bot for notification

The program will notify user on the discord server depending on the inventory prices discussed in the previous note. This is built on Discord Bot API which automates message passing through Discord channel.

Current version 1.0.0 handles simple commands given as follows:

- !ping  -----> *Bot replies with Pong*
- !status -----> *Bot replies with it's status if the bot is up*
- !hungry -----> *Bot gives random food emoji*
- !price -----> *Bot outputs the item name and it's current median price*
- !random -----> *Bot outputs 10 random emojis*

---

## Current status and Future Scope

Currently the program is designed to handle statically stored market items which are based on my inventory. Items consist CS:GO's Shattered Web Collection items which are currently volatile in their price ranges. The article links functionality is limited to manual commands from the user
to the bot.

In the future release, commands can be added to fetch given item prices whose names will be provided through discord server itself instead of statically coding and program bot through Discord to keep track of certain items for certain amount of time, after certain interval. The Bot
can be designed to track articles read be certain readers and process the same in the database.


:smile:

:100:
