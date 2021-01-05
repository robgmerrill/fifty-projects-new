// target loading-text and bg class

// initialize `load` to 0

// initialize `int` to a function that calls `blurring` method every 30 milli

// create blurring function
    // increment `load`
    // if statement to stop calling `int` once load hits 100

    // set the text on screen % to be whatever load is. Use template literals
    // set opacity of load-text to calling the scale method
    // set bg filter to `blur()`. Pass scale argument to blur.


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }