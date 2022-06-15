
var mode = "light"

//check if str have Uppercase

function hasUpperCase(str) {
    temp = str.toUpperCase()
    return temp == str
}

function hasLowerCase(str) {
    temp = str.toUpperCase()
    return temp !== str
}

function isEven(str){
    length = str.length
    return length % 2 == 0
}


function linkingV2(element) {
    var currentColor = window.getComputedStyle( element ,null).getPropertyValue('background-color');
    var id = element.id;
    var needChange = document.querySelectorAll("#"+id);
    let html = element.innerHTML;
    // console.log(html)
    // console.log(typeof(html))
    // console.log(html.toUpperCase())


    if(hasUpperCase(html)){
        let edge = document.getElementById("edge").innerHTML;
        edge = edge + html
        edge = edge.replace(/\s+/g, ''); //remove all spaces in the str

        if(isEven(edge)){
            spacedEdge = edge.replace(/.{1,2}(?=(.{2})+$)/g, '$& '); // Add spaces between every 2 letter

    
            document.getElementById("edge").innerHTML = spacedEdge;
        }
        else{ // edge is odd numbered letter
            edge = edge + "a"
            spacedEdge = edge.replace(/.{1,2}(?=(.{2})+$)/g, '$& '); // Add spaces between every 2 letter

            spacedEdge = spacedEdge.slice(0, spacedEdge.length - 1)
            
            document.getElementById("edge").innerHTML = spacedEdge;
        }
        


        // var values = "JavaScriptTutorial";
        // var result = values.replace(/.{1,2}(?=(.{2})+$)/g, '$& ');
    }
    else if(hasLowerCase(html)){
        let corner = document.getElementById("corner").innerHTML;
        corner = corner + html
        corner = corner.replace(/\s+/g, ''); //remove all spaces in the str

        if(isEven(corner)){
            spacedCorner = corner.replace(/.{1,2}(?=(.{2})+$)/g, '$& '); // Add spaces between every 2 letter

    
            document.getElementById("corner").innerHTML = spacedCorner;
        }
        else{ // corner is odd numbered letter
            corner = corner + "a"
            spacedCorner = corner.replace(/.{1,2}(?=(.{2})+$)/g, '$& '); // Add spaces between every 2 letter

            spacedCorner = spacedCorner.slice(0, spacedCorner.length - 1)
            
            document.getElementById("corner").innerHTML = spacedCorner;
        }

    }
    

    for (let i = 0; i < needChange.length; i++) {

        if( mode == "light"){
            if(needChange[i].classList.contains('light')) {
                needChange[i].classList.remove('dark')
                needChange[i].classList.remove('light')
                needChange[i].classList.add('green')
            }
            else if(needChange[i].classList.contains('green')) {
                needChange[i].classList.remove('dark')
                needChange[i].classList.remove('green')
                needChange[i].classList.add('yellow')
                
            }
            else if(needChange[i].classList.contains('yellow')) {
                needChange[i].classList.remove('dark')
                needChange[i].classList.remove('yellow')
                needChange[i].classList.add('light')
                
            }  

        }
        else if ( mode == "dark") {
            if(needChange[i].classList.contains('dark')) {
                needChange[i].classList.remove('light')
                needChange[i].classList.remove('dark')
                needChange[i].classList.add('green')
            }
            else if(needChange[i].classList.contains('green')) {
                needChange[i].classList.remove('light')
                needChange[i].classList.remove('green')
                needChange[i].classList.add('yellow')
                
            }
            else if(needChange[i].classList.contains('yellow')) {
                needChange[i].classList.remove('light')
                needChange[i].classList.remove('yellow')
                needChange[i].classList.add('dark')
                
            }  
        }


      }
    
    
}
// End of version 2 of linking

function reset() {
    var elements = document.getElementsByClassName("but");
    len = elements.length;
    for (let i = 0; i < len; i++) {
        resetColor(elements[i]);
    };
    document.getElementById("edge").innerHTML = "";
    document.getElementById("corner").innerHTML = "";

}
function resetColor(element) {
    if( mode == "light"){
        element.classList.remove('green')
        element.classList.remove('yellow')
        element.classList.remove('light')
        element.classList.remove('dark')
        element.classList.add('light')
        

    }
    else if( mode == "dark"){
        element.classList.remove('green')
        element.classList.remove('yellow')
        element.classList.remove('light')
        element.classList.remove('dark')
        element.classList.add('dark')

    }

} 

var img = document.getElementById("img");



function changeMode() {

    reset();

    if( mode == "light"){
        mode = "dark";
        img.src = "cube_logo_dark.png";

        
    }
    else if (mode == "dark"){
        mode = "light";
        img.src = "cube_logo_light.png";

    }
    document.getElementById("edge").innerHTML = "";
    document.getElementById("corner").innerHTML = "";

    // if( mode == "light"){
    //     document.body.style.background = "rgb(0, 0, 0)";
    //     console.log("chaning to dark bg ")
    // }
    // else if( mode == "dark"){
    //     document.body.style.background = "rgb(255, 255, 255)";
    //     console.log("chaning to light bg ")
    // }
    
    reset()
}

