function calculateArea(width, height) {
    return width + height;
}

let width = 10, height = 5;
let area = calculateArea(width, height);

if(area>100){
    console.log("The area is larger.");
}
else{
    console.log("The area is smaller");
}

if(width + height > 100){
    console.log("the are is grater than or equal to 100");
}