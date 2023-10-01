# 🎃 HacktoberFest 2023 Project 🎃

Use this project to make your first contribution to an open source project on GitHub!

Celebrate [Hacktoberfest](https://hacktoberfest.digitalocean.com/) by getting involved in the open source community by completing some simple tasks in this project.

This repository is open to all members of the GitHub community. Any member may contribute to this project without being a collaborator.

## What is Hacktoberfest?
A month-long celebration from October 1st - 31st sponsored by [Digital Ocean](https://hacktoberfest.digitalocean.com/) and [GitHub](https://github.com/blog/2433-celebrate-open-source-this-october-with-hacktoberfest) to get people involved in [Open Source](https://github.com/open-source). Create your very first pull request to any public repository on GitHub and contribute to the open source developer community.

[https://hacktoberfest.digitalocean.com/](https://hacktoberfest.digitalocean.com/)


## Getting started
* Fork this repository (Click the Fork button in the top right of this page, click your Profile Image)
* Clone your fork down to your local machine

```markdown
git clone https://github.com/Cybernix-Phoenix-NSEC/Joe.git
```

* Create a branch

```markdown
git checkout -b branch-name
```

* Make your changes (choose from any task below)
* Commit and push

```markdown
git add .
git commit -m 'Commit message'
git push origin branch-name
```

* Create a new pull request from your forked repository (Click the `New Pull Request` button located at the top of your repo)
* Wait for your PR review and merge approval!
* __Star this repository__ if you had fun!


## How to contribute to this project

* Add your name to the `CONTRIBUTORS.md` file
* Add a profile page to the `profiles` directory
* Comment on which issue you are working on and we will assign you the issue.
* Fix the issue/issues you have chosen.
* Create a new dummy discord bot from [discord developer portal](https://discord.com/developers/applications). Then click on "Bot" option from the left navigation panel and click on "Reset Token". You will get your bot token. Copy it and don't reveal the token to anyone🤫
* Then create a .env file in the root of your cloned directory and add the following line
```markdown
TOKEN=<YOUR_BOT_TOKEN>
```
* Fire up a terminal and cd into your directory. Then execute
```markdown
npm install
```
to install the packages
* After the packkages are installed, execute the following to start your bot
```markdown
nodemon index.js
```
* The bot is up and running! You can now start contributing


## What to contribute in this project?
* Fix the help command
* Implement pause command for pausing a music
* Implement resume command for resuming a music
* Implement skip command for skipping a music
* Improve the directory structure and clean up the code. The code is messy :(
* Try to implement [slash commands](https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue). I know the bot works fine with a prefix, but slash commands are cool :)


## Choose from these tasks
### 1. Add your name
Add your name to the `CONTRIBUTORS.md` file using the below convention:

```markdown
#### Name: [YOUR NAME](GitHub link)
- College name: Name of your college
- Department: Which department you are in?
- Bio: Who are you?
- GitHub: [GitHub account name](GitHub link)
```

### 2. Add a profile page
Add a `Your_Name.md` file to the `profiles` directory. Use any combination of content and Markdown you'd like. Here is an example:

```markdown
# Your Name

### Location

Your City/Country

### Academics

Your School

### Interests

- Some Things You Like

### Development

- Inventor of the My Pillow

### Projects

- [My Project](GitHub Link) Short Description

### Profile Link

[Your Name](GitHub Link)
```
