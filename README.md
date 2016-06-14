## Colorido.JS


`Colorido.Js` is a awesome , flexible and cross-browser dynamically color changing tool for web projects. 

## Installation

Install Colorido via Bower:

```bash
$ bower install colorido.js --save
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
	opacity: 0.7, // background opacity for colorido-o (0-1)
	choice: [ "rgb(239,0,0)"
	], 
	autoChange: true, // Auto Color Change Settings true = yes, false= no
	autoDuration: 5,  // Auto Color Change Duration in Seconds
	animationDuration: 0.3,  //Color Changing Animation Duration
	animationType:"ease-in-out", //Animation Type
	chromeTab: true  // Color Change Settings for chrome Tabs on android, wp and ios
}
```
* `opacity: Background opacity for colorido-o (0-1)`
* `choice: Array of colors.`
* `autoChange: true|False, Auto Color Change Settings` 
* `autoDuration: Auto Color Change Duration in Seconds`
* `animationDuration:Color Changing Animation Duration`
* `animationType:Animation Type`
* `chromeTab: Color Change Settings for chrome Tabs on android, wp and ios`

3.Colorido.js simply works upon 3 css classes:
* `colorido`
* `colorido-o`
* `colorido-t`


[Check Demo Here](https://parassharmaa.github.io/colorido.js/)


## License
Colorido.JS is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contribution
You are free to contribute to colorido.js. It is built in javascript,I would love to upgrade it to jquery or any other
