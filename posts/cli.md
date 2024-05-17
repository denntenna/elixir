---
title: Making Command Line Apps
---

# Making Command Line Apps
Liveview is just an elixir process, so it should be possible to inspect it and interact with it by sending messages
https://arathunku.com/b/2021/debug-few-things-we-can-do-with-liveview-pid/
this should be useful for debugging live systems as well  
[see server logs in console too!](https://twitter.com/chris_mccord/status/1772631568772710507)



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
The majority of machine learning investment on online platforms still happens in English. As Tarunima Prabhakar commented to Rest of World back in 2021, there is hardly any prioritisation of other languages. For a country like India, abusive and hateful slurs also happen in vernacular languages. Yet, the lack of a list of these commonly used terms makes it harder to protect people from gendered abuse.

As part of the process of building Uli, Tattle developed one of the largest crowd-sourced slur lists in Indian languages. Indian English was deemed by the team as a distinct enough vocabulary to warrant investment. Tamil and Hindi were the other two languages chosen for the initial phase given team capacity and budgets at the time.
A second round of crowdsourced words during Tattle’s 16 days of activism campaign in November 2023 allowed us to add Malayalam to the list of languages that Uli supports. Thanks to the work led by Aakash from Citizen Digital Foundation, 50 new slurs were added in Malayalam. It has been an immense collective effort that now contains over 630 words across the four languages, over 300 of which have been annotated. One of the annotators involved in the process also pointed out that given the number of alphabets that exist in other languages (as opposed to English), creating the lexicon for slur lists is even harder. As people learn to trick the system, the number of spelling and tweaking possibilities means consistently trying to keep up. The slur list is available on Tattle’s GitHub under the Open Data License for use by interested researchers and activists, or Trust and Safety teams.