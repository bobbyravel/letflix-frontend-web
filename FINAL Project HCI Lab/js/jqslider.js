let next = $('#next')
let prev = $('#prev')
let container = $('#container')

let x = 0

container.css({
    left: x+'%'
})
                
threshold = 200
next.on('click', function(){
    if(x<threshold){
        x = x+100
    }else{
        x = 0
    }

    container.css({
        left: -x+'%'
    })
})

prev.on('click', function(){
    if(x>0){
        x = x-100
    }else{
        x = threshold
    }

    container.css({
        left: -x+'%'
    })
})