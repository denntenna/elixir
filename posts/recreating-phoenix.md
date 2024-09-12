---
title: Recreating Phoenix from the ground up
excerpt: An excercise in components of a web app framework from scratch while borrowing from one of the bests.
date: 2024-09-12
tags: 
    - elixir
    - phoenix
---
## Motivation
At Tattle, I routinely have to onboard junior developers to elixir codebase. Often these developers don't have experience with functional programming, let alone elixir. They might not even fully understand the nitty gritties of web development. In the time they have to onboard on our projects and make meaningful contributions, a bottoms up approach of learning elixir, followed by OTP, followed by phoenix, followed by individual libraries would be far too time consuming. As a result I thought it would be interesting to create a curriculum thats taught over N days that includes creating various components of a web framework like phoenix using elixir and minimal set of dependencies. I think these proof of concepts could help demistify code bases of our projects.

## Prior Work
The following works were hugely inspirational in creating undertaking this exercise : 
1. This [repository](https://github.com/wojtekmach/mix_install_examples) of elixir scripts that demonstrate the use of libraries from the elixir ecosystem. Seeing a single script do complicated things without using mix or creating OTP applications, demonstrates how you can do a lot with just knowing how to use elixir.
2. This [blog post](https://www.theerlangelist.com/article/phoenix_is_modular) by Saša Jurić. I remember that when I was building my first phoenix app, I got stumped by some choices of how the files in the project were organized and some conventions that weren't super obvious. This blog post makes you realize that behind all those opinionated choices is just a bunch of modular blocks (often just pure elixir libraries) that put together a web framework.

Often when you use a web framework like Phoenix, you are agreeing to put up with some opinionated, idiosyncratic decisions by the author. What you get in return is that you don't have to build many components from scratch. But building some components or atleast a proof of concept from scratch without worrying about the idiosyncracies of the framework is a great way for beginners to learn elixir, phoenix. And most importantly, I believe this makes begineers productive on our code base faster.

## Curriculum