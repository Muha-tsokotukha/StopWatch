let operating
let minutes 
let sec


(   function(){
    sec = 0
    minutes = 0
    operating = false

    setInterval( () => {
        
        if(operating)sec++
        

        if(  sec > 59  ){
            sec = 0
            minutes++
        }

        show_time(sec)  

    }, 1000)  


})()

let watch_time = document.getElementById("watch-time")
let clock_hand = document.getElementById("watch-clock-hand")
let button = document.getElementById("start-stop")
let marked = document.getElementById("marked")

function show_time(sec){
    watch_time.innerHTML = `${minutes} : ${sec}`
    clock_hand.style.transform = "rotate(" + sec* 6+ "deg)" 
}



function start() {
    operating = !operating
    if( operating )
    button.textContent = "Pause"
    else button.textContent = "Start"
 
}

function clear_time(){
    operating = false
    minutes = 0
    sec = 0
    marked.innerHTML = ""
    show_time(0)
    button.textContent = "Start"
}


function mark_time() {
    show_marked(`${minutes} : ${sec}`)
}

function show_marked(b){
    if( marked.innerHTML == ""  )marked.innerHTML = "Marked <hr>"
    marked.innerHTML += `<div>${b}</div> `
}