---
title: Making Command Line Apps
date: 2024-05-18
tags:
  - cheatsheet
  - elixir
---

# Making Command Line Apps
Liveview is just an elixir process, so it should be possible to inspect it and interact with it by sending messages
https://arathunku.com/b/2021/debug-few-things-we-can-do-with-liveview-pid/
this should be useful for debugging live systems as well  

see server logs [|>](https://www.google.com)


[ <--see server logs in console too! -->](https://twitter.com/chris_mccord/status/1772631568772710507)

[www.google.com](https://www.google.com)



## Example Module

```elixir
defmodule DAU.MediaMatch.HashMeta do
  alias DAU.Repo
  use Ecto.Schema
  import Ecto.Changeset

  schema "hash_meta" do
    field :count, :integer, default: 0
    field :label, :string
    field :description, :string
    field :value, :string
    field :user_language, Ecto.Enum, values: [:en, :hi, :ta, :te, :und]

    timestamps(type: :utc_datetime)
  end

  def changeset(hash_meta, attrs) do
    hash_meta
    |> cast(attrs, [:count, :label, :description, :value, :user_language])
    |> validate_required([:value, :user_language])
  end
end

```

# Making CLI Tools
[source video](https://www.youtube.com/watch?v=MLPWjH0RzWE)

IO.gets and IO.puts

```elixir
IO.puts("info)
IO.puts(:stderr, "error message")
```
IO.ANSI to get colors

```elixir
[:normal, message] 
|> IO.ANSI.format() 
|> IO.puts()

[:faint, message] |> IO.ANSI.format() |> IO.puts()
[:green, message] |> IO.ANSI.format() |> IO.puts()
[:yellow, message] |> IO.ANSI.format() |> IO.puts
```
OptionParser.parse/2
```elixir
iex> OptionParser.parse(["--help --unsupported some_args"], strict: [help: :boolean])
{[helo: true], ["some_args], [{"unsupported", nil}]}
```

Exit Codes
```
0 - success
1 catchall for general errors

System.stop(0)
System.halt(1)
```


# Long Text


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat velit sed erat dignissim, id accumsan ex faucibus. Quisque velit nisl, elementum nec eleifend sed, rutrum in diam. Etiam malesuada, nunc non auctor gravida, ex neque laoreet arcu, dapibus facilisis turpis purus non turpis. Duis id ex ut sem consectetur dictum. Ut quis laoreet dui. Sed ac vulputate leo, a congue justo. Nam quis ultricies erat, et imperdiet tellus. Nunc porttitor, velit ut molestie auctor, mi nunc pharetra erat, eget malesuada massa enim vitae diam. Fusce ut lacinia turpis.

Quisque venenatis scelerisque lacus, et accumsan lorem sodales ultrices. Cras vestibulum egestas consectetur. Nam consequat hendrerit est eget ornare. Pellentesque tempor ante nec est fringilla mattis. Donec ultricies lectus egestas volutpat ornare. Phasellus vestibulum dictum dictum. Cras suscipit nibh at velit porttitor sodales. Quisque hendrerit ultrices tortor sed tincidunt. Pellentesque non nisi dapibus, pellentesque urna ut, feugiat neque. In tincidunt sit amet lectus et molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nisl efficitur, condimentum elit eu, eleifend tortor. Quisque at urna feugiat sem ornare pretium. 