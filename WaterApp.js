var kanji = document.querySelector('#kanji');
var hiro = document.querySelector('#hiro');
var barcode20 = document.querySelector('#barcode20');
let date1 = new Date(2021, 11, 7, 9, 0, 0, 0); //original date watered
let now = new Date(); //the current time



//Time since initial watering
var timeDiff = now - date1; //in ms
// strip the ms
timeDiff /= 1000;
//change to seconds
var seconds = Math.round(timeDiff);
//change to hours
var hours = Math.round(seconds /60 /60);

function plantsWatered(){
    if(hours>97){
        date1 = newdate();
    }
}

plantsWatered();


function Rosemary(){ //kanji marker
    if(hours >= 24){
        return "Water Me!"}
    else{
        return `Next Watering: ${24-hours} hours`
    }  
}

function largePlant(){ //hiro marker
    if(hours >= 96){
        return "Water Me!"}
    else if (hours < 24){
        return `Next Watering: ${24-hours} hours`
    }  
    else{
        return `Next Watering: ${Math.trunc((96-hours)/24)} days`   
    }
}

function leafyPlant(){ //barcode marker
    if(hours >= 48){
        return "Water Me!"}
    else if (hours >= 24){
        return `Water me tomorrow`
    }  
    else {
        return `Next Watering: ${Math.round((48-hours)/24)} days`
    }
}



//create the text entity - kanji
var entityEl = document.createElement('a-entity');
entityEl.setAttribute('rotation', '-90 0 0');
entityEl.setAttribute('geometry', "primitive: plane; width: 2; height: auto;");
entityEl.setAttribute("material", "color: green");
entityEl.setAttribute('text', `value:${Rosemary()}; align: center; height:4; width:4;`);
entityEl.setAttribute('position', `0 0 0`);
kanji.appendChild(entityEl);

//create the text entity - hiro
var entityTwo = document.createElement('a-entity');
entityTwo.setAttribute('rotation', '-90 0 0');
entityTwo.setAttribute('geometry', "primitive: plane; width: 2; height: auto")
entityTwo.setAttribute("material", "color: green")
entityTwo.setAttribute('text', `value:${largePlant()}; align: center; height:4; width:4;`);
hiro.appendChild(entityTwo);

//create the text entity - barcode
var entityThree = document.createElement('a-entity');
entityThree.setAttribute('rotation', '-90 0 0');
entityThree.setAttribute('geometry', "primitive: plane; width: 2; height: auto")
entityThree.setAttribute("material", "color: green")
entityThree.setAttribute('text', `value:${leafyPlant()}; align: center; height:4; width:4;`);
barcode20.appendChild(entityThree);


