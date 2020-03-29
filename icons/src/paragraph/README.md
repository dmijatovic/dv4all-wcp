# Paragrapg Icons

<img src="../../assets/SVG/paragraph-left.svg" alt="Paragraph icon" style="width:3rem"/>
<img src="../../assets/SVG/paragraph-right.svg" alt="Paragraph icon" style="width:3rem"/>
<img src="../../assets/SVG/paragraph-center.svg" alt="Paragraph icon" style="width:3rem"/>
<img src="../../assets/SVG/paragraph-justify.svg" alt="Paragraph icon" style="width:3rem"/>

Custom web component using svg icon as a source. The SVG source is exported from [IconMoon website](https://icomoon.io/app/#/select). The raw svg icon file is in `assets/SVG` folder of this repo.

## Usage

```html
<dv4-icon-paragraph
  class="dv4-icon"
  title="Format icon"
  type="left"
></dv4-icon-paragraph>
```

### Props

Each prop has a default value you can overwrite.

- title: svg title to be shown on mouseover. This is standard html prop. Default value is 'Paragraph'.
- type: one of the values: left, right, center, justify. Default is left.

### CSS

You work with this element similair to any other html element. You can assign it CSS classes and style it as you wish.

The default `display` property of the component is `inline-block`.

**NOTE: Because the content is in SVG format use `fill` and `stroke` props!**

```css
.dv4-icon {
  width: 3rem;
  height: 3rem;
  fill: #fff;
  stroke: rebeccapurple;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 0.25rem;
  cursor: pointer;
}

.dv4-icon:hover {
  fill: rebeccapurple;
  box-shadow: 2px 4px #ccc;
}

.dv4-icon:active {
  transform: translateY(4px);
}
```
