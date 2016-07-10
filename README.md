## Colorido.JS


`Colorido.Js` is a awesome , flexible and cross-browser dynamically color changing tool for web projects. 

###Example
![Demo Image](https://s32.postimg.org/bpfu6yodh/output_Hi_Dpw_G.gif)
>With colorido colors can be dynamically generated, with many other options:
* autoChange 
* chromTab Color 
* refresh color change etc

## Installation

Install Colorido via Bower:

```bash
$ bower install colorido.js --save
```
Install Colorido via npm:

```bash
$ npm install colorido.js 
```

## Basic Usage

1. Include the colorido at bottom of file and above`</body>`

  ```html
  
    <script src="scripts/colorido.min.js" type="text/javascript>
  </body>
  </html>
  ```
  
2.Initiate the colorido.js script in the file by following json:
 
```javascript
    var config = {
	opacity: 0.5, // background opacity for colorido-o (0-1)
	choice: [
		'rgb(138, 43, 43)',
		'rgb(98, 162, 40)',
		'rgb(40, 162, 162)', 
		'rgb(40, 66, 162)', 
		'rgb(121, 40, 162)', //Color array for random colors, add color in rgb for more
		'rgb(121, 40, 162)', 
		'rgb(40, 100, 162)', 
		'rgb(230, 74, 25)'
	], 
	gradMix : "#d6d26f", //any color value or type random,  update : grad mix color
	autoChange: true, // Auto Color Change Settings true = yes, false= no
	autoDuration: 4,  // Auto Color Change Duration in Seconds
	animationDuration: 0.3,  //Color Changing Animation Duration
	animationType:"ease-in-out", //Animation Type
	chromeTab: true  // Color Change Settings for chrome Tabs on android, wp and ios
}
```
* `opacity: Background opacity for colorido-o (0-1)`
* `choice: Array of colors.`
* `autoChange: true|False, Auto Color Change Settings` 
* `autoDuration: Auto Color Change Duration in Seconds`
* `gradMix: Optional mixing color for gradient bg`
* `animationDuration:Color Changing Animation Duration`
* `animationType:Animation Type`
* `chromeTab: Color Change Settings for chrome Tabs on android, wp and ios`

3.Colorido.js simply works upon 7 css classes:
* `colorido: Applies Dynamic background color`
* `colorido-o: Applies background color with opacity`
* `colorido-t: Applies dynamic Text-color`
* `colorido-gr: Applies dynamic Radial Gradient`
* `colorido-gl: Applies dynamic linear Gradient`
* `colorido-gd: Applies dynamic diagonal Gradient`
* `colorido-gh: Applies dynamic Horizontal Gradient`

**Applies these classes on your webcomponents to see magic**


[Check Demo Here](https://parassharmaa.github.io/Colorido.JS/)


## License
Colorido.JS is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contribution
You are free to contribute to colorido.js. It is built in javascript,I would love to upgrade it to jquery or any other
