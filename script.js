
var mode = "light"


function linkingV2(element) {
    var currentColor = window.getComputedStyle( element ,null).getPropertyValue('background-color');
    var id = element.id;
    var needChange = document.querySelectorAll("#"+id);

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

function changeMode() {

    reset();

    if( mode == "light"){
        mode = "dark";
    }
    else if (mode == "dark"){
        mode = "light";
    }
    reset()
}

