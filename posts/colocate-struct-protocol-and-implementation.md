---
title: Co-locate Struct, Protocol and Implementation
excerpt: Elixir's Enum module has the following in one file - Module definition, Enumerable behaviour and implementation for List and Map.
date: 2024-06-01
tags: 
    - elixir
    - til
---

# {{title}}


For a [multiplayer card game](https://github.com/tattle-made/viral-spiral) that I am working on, I had to define multiple types of cards. All these cards can be shared with other players, discarded from the game or kept to themselves by the player.

At some point I figured that I would create a protocol called Playable that Modules can implement to be a Playable Card. I faced a decision paralysis about where should I put the following files - the Card structs, the protocol definition and the protocol implementation. I ended up keeping the various card structs in a folder and created a file called [card_share.ex](https://github.com/tattle-made/viral-spiral/blob/main/lib/viral_spiral/card_share.ex) where I defined the protocol and implementation for various card structs. 

A week later while perusing the source code of elixir's [Enum module](), I discovered that this one large file defines Enum, Enumerable protocol and implementation for List and Map modules. In hindsight this approach does make sense, All code related to Enum is in one file and so are the  implementations for data structures that are native to elixir. Any third party that wants to implement the Enumerable protocol can do so in their own module. 

This made me feel confident about following this convention for my codebases going forward. Since I know the types of card I have in the initial phase of the project, I can define implementation of Playable protocol for all known card types. 