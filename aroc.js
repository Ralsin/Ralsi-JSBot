//Auto Restart On Crash = AROC
const cp = require('child_process')
function restart(){
    let botp = cp.fork('bot.js')
    botp.on('close', () => {
        console.log('\x1b[36m', 'Suddenly, Bot crashed ;w;\n I gonna restart him!\n                        ~AROC', '\x1b[0m');
        setTimeout(() => {restart()}, 200)
    })
}
restart();