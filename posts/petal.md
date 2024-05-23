---
title: Petal
date: 2024-05-21
tags:
  - elixir
  - petal
---

Context : I have experience writing javascript and so phoenix's pitch of no javascript needed doesnt resonate much with me. I don't mind writing a little client side javascript. I tried the following ways to create interactive components. I was curious to see how Petal has done it.

I started with dropdown component.

digression : `Ecto.UUID.generate()` so it assumes Ecto is a dependency.

a class = `pc-dropdown` is used to uniquely identify maybe?


```elixir
attr :js_lib, :string,
  default: "alpine_js",
  values: ["alpine_js", "live_view_js"],
  doc: "javascript library used for toggling"
```
I had assumed that alpine_js was a core dependency of this library if you wanted to use any component with client side interactivity. I suppose I was wrong. You can also use the liveview JS bindings. 

The presense of these function clauses confirm this.

```elixir
defp js_attributes("container", "live_view_js", options_container_id) do
  %{
    "phx-click-away":
      JS.hide(
        to: "##{options_container_id}",
        transition: {@transition_out_base, @transition_out_start, @transition_out_end}
      )
  }
end

defp js_attributes("container", "alpine_js", _options_container_id) do
  %{
    "x-data": "{open: false}",
    "@keydown.escape.stop": "open = false",
    "@click.outside": "open = false"
  }
end
```



Whether there is feature parity across both alpine_js and liveview remains to be seen.

## Data Table


## What I learnt 
```elixir
<button
  type="button"
  class={trigger_button_classes(@label, @trigger_element)}
  {js_attributes("button", @js_lib, @options_container_id)}
  aria-haspopup="true"
>
```
regardless of the parameters to `js_attributes` function, it returns a Map. I didn't realize you could do that with heex. That it converts an elixir map into html attributes. I was able to confirm this in the documentation for [Phoenix.Component↩](https://hexdocs.pm/phoenix/components.html)

>To interpolate a dynamic number of attributes in a keyword list or map, do:
```elixir
<div title="My div" {@many_attributes}>
  <p>Hello <%= @username %></p>
</div>
```

So the syntax is to put a keyword list or map between curly braces.


## My takeaway
I think while I might invest time in learning a library like alpine, I think for my small projects and one off components that need interactivity, I might be better of adding a custom javascript file in my assets. Then using custom attributes or classnames to identify elements, I should be able to inject interactive behaviour.

A css file is bundled with the library - https://github.com/petalframework/petal_components/blob/main/assets/default.css
from here I learnt how petal uses [tailwind directive @apply](https://tailwindcss.com/docs/functions-and-directives#apply) for using tailwind style in its custom components. for eg in the dropdown component a div has this class `class={[@class, "pc-dropdown"]}`, which can then be found in the default.css file.

```css
.pc-dropdown {
  @apply relative inline-block text-left;
}
```
