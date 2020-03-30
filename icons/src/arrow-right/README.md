# Arrow-right Icon

<img src="https://github.com/dmijatovic/dv4all-wcp/raw/master/icons/assets/SVG/arrow-right.svg?sanitize=true" alt="arrow icon" style="width:3rem"/>

Custom web component using svg icon as a source. The SVG source is exported from [IconMoon website](https://icomoon.io/app/#/select). The raw svg icon file is in `assets/SVG` repo folder.

## Usage

```html
<dv4-icon-arrow-right title="Arrow right icon" />
```

### Props

Each prop has a default value you can overwrite.

- title: svg title to be shown on mouseover. This is standard html prop. Default value is 'Arrow'

### CSS

You work with this element similair to any other html element. You can assign it CSS classes and style it as you wish.

The default `display` property of the component is `inline-block`.

**NOTE: Because the content is in SVG format use `fill` and `stroke` props!**

```css
dv4-icon-arrow-right {
  width: 3rem;
  height: 3rem;
  fill: #fff;
  stroke: rebeccapurple;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 0.25rem;
  cursor: pointer;
}

dv4-icon-arrow-right:hover {
  fill: rebeccapurple;
  box-shadow: 2px 4px #ccc;
}

dv4-icon-arrow-right:active {
  transform: translateY(4px);
}
```
