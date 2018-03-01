## Recommended Tools
### This section is to aid non programmers

[Table of Contents](./README.md)


A graphical Git client, that should ease the path to contribution: [GitKraken](https://www.gitkraken.com/)
 - Install GitKraken
 - Sign up with your github account in kraken client
 - in prefrences, generate a new ssh key, and connect it to github
 - fork Kalicos
 - from the kraken client, clone your forked repository 

And editor that should serve for both writing markdown, and code: [Atom Editor](https://atom.io/)
  - An extension for previewing work on your machine before contributing: [Markdown Preview](https://github.com/atom/markdown-preview)


### Development Environment with Docker

If you have docker installed, and it is running as a daemon process.
you should be able to `cd ~/path/to/Kalicos && docker-compose up`

if it happens to insist you need docker-machine, check the docker docs in order
to run the docker service on your host machine. Otherwise, if you end up using `docker-machine create --driver virtualbox dev`
you will need to go into the virtualbox settings and add `~/Kalicos/server/src && ~/Kalicos/client/src` to the shared folders tab.
