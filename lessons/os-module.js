const os = require('os')

//info about current user
const user = os.userInfo()
// console.log(user)

// method returns system uptime in seconds
console.log(`System uptime is ${os.uptime} seconds`)

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freMem: os.freemem(),
}

console.log(currentOs)
