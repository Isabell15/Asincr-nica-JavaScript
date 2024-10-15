

function execCallback(callback){
    setTimeout(() => {
        callback()
    }, 2000)
}

function myFunc() {
    console.log('Log after 2s')
}execCallback(myFunc)