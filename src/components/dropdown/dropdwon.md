# Dropdown Component

### Dropdown component has dual types `button` and `image` and bcoz of this dual type property of component you can use it in header while displaying the user profile image in it and also in footer while displaying the button in it. Let's get into the code part of it.

## component props

```
const Dropdown = ({
  isImage,
  image,
  buttonText,
  className,
  isOverrideClass,
  callback,
  options = [],
  onChange,
}) => {...}
```

## Props Explanation:

`isImage`: This prop is used to check whether the dropdown is of type image or button. If it's true , it will render the image, otherwise it will render the button. It's a boolean value. Default value is `false`. If you set it as true but didn't pass the `image` prop, it will throw an error.

`image`: This prop is used to pass the image to be displayed in the dropdown.

`buttonText`: This prop is used to pass the text to be displayed in the button. It's a string value. Default `button label` is set to `Login`.

`className`: This prop is used to pass the class name to be applied to the dropdown component. It's a string value.

`isOverrideClass`: This prop is used to check whether the class names passed in `className` prop should be overridden or not. It's a boolean value. Default value is `false`. If you set it as true , it will override/remove all default class names and will apply only what you have passed in prop `className`.

`callback`: This prop is used to pass a function that will be called when the dropdown button/image avatar is clicked. It's a function. Default value is `undefined`.

`options`: This prop is used to pass the options to be displayed in the dropdown. It's an array of objects. Each object should have `label` and `value` properties. Default value is `[]`. As shown in below structure:

```
{
    label: "Account Settings",
    isLink: false,
    value: "account-settings",
    isDisabled: false,
}
```
Note: Dropdown also has a dual state `link` and `button`. If you want to display the option as a link, you can set `isLink` to `true` in the options array. If you want to display the option as a button, you can set `isLink` to `false` in the options array. If you don't pass the `isLink` property, it will be considered as `false` by default.

`onChange`: This prop is used to pass a function that will be called when the dropdown option is selected. It's a function. Default value is `undefined`.
