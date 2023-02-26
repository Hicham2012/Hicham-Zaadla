var move = document.querySelector('.move')
var pull = document.querySelector('.pull')

move.addEventListener('mousedown', mousedown)

function mousedown() {
    move.addEventListener('mousemove', mousemove)
    move.addEventListener('mouseup', mouseup)


    let dark = true

    function mousemove(e) {
        // var x = e.clientX - 100 + 'px'
        var y = e.clientY - 25 + 'px'
            // this.style.left = x
        this.style.top = y

        console.log(move.style.top)
        if (y >= "90px") {
            // pull.style.animationName = 'hi' 
            move.style.top = '25px'
            console.log(!dark)

        } else {
            return pull.style.animationName = 'fade'
        }
    }


    function mouseup() {
        move.removeEventListener('mousemove', mousemove)
        this.style.top = 24 + 'px'

    }



}