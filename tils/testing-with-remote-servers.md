---
title: Testing with remote servers
date: 2024-06-01
tags:
    - bonfire
    - exunit
---
# {{title}}

I came across this snippet in the [activitypub](https://github.com/bonfire-networks/activity_pub) module of the [bonfire project](https://github.com/bonfire-networks).

```elixir
# WARNING: these are integration tests which run against real remote instances!
@moduletag :live_federation
# They only runs when you specifically instruct ex_unit to run this tag.
```

So this is a nifty way to ensure that any tests that run against a remote server or some resource that you don't own aren't run everytime your test suite runs. Maybe you run these only during integration tests at your own time of choosing.

You can configure ExUnit to exclude tests by their tag. For instance, 
```elixir
ExUnit.configure(exclude: [live_federation: true])
```

Then to run these you can run 

```elixir
mix test --include live_federation:true
```
