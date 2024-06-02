---
title: External Compiler
excerpt: Looking at the tailwind runner in Phoenix to learn how to run an external compiler as part of your dev process with Phoenix.
date: 2024-05-21
tags:
    - phoenix
---

# Tailwind

So a tailwind executable is installed at `_build` directory of the project.


The entry point to this module is the two mix tasks `tailwind` and `tailwind.install`. When you setup phoenix for the first time, you most likely ran `mix setup` or `mix assets.setup`, which ran a mix task `tailwind.install --if-missing`. This is responsible for downloading a binary appropriate for your platform and placing it in the `_build` directory of the project. Its the `tailwind` task that runs the executable which monitors your assets/css folder and the tailwing.config.js for changes to recompile. 

## Notable Highlights
The code to determine the target label for the tailwind executable is noteworthy. I like how pattern matching and guards make the code so succint compared to traditional if-else clauses. Also to note is the recommended way to document private modules. By writing comments before the function and not using `@doc`. 


https://github.com/phoenixframework/tailwind/blob/8e1869c09fdc36a9bc329ccb48d1e414c61e31be/lib/tailwind.ex#L237-L262

