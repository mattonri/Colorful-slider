var R0 = 231;
var G0 = 27;
var B0 = 23;
var R1 = 23;
var G1 = 27;
var B1 = 231;
var Change = document.getElementById('square');

Change.oninput = function sliderchange() {
FR = ((Change.value/(Change.max-Change.min))*(R1-R0))+R0;
FG = ((Change.value/(Change.max-Change.min))*(G1-G0))+G0;
FB = ((Change.value/(Change.max-Change.min))*(B1-B0))+B0;
document.body.style.setProperty('--slider-color','rgb('+FR+','+FG+','+FB+')');
document.body.style.setProperty('--thumb-color','rgb('+ (FR / 1.5) +','+ (FG / 3) +','+ (FB / 1.5) +')');
}
// R0 G0 and B0 is the color on the left and
// the 1 equivilants are the ones on the right
// they can be written to any color prefered
