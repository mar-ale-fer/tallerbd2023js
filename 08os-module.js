const os =require ("os")
//info about current user
const user = os.userInfo()
console.log(user)
const uptime = os.uptime()
console.log(`system uptime is ${uptime} seconds`)
console.log("system uptime is "+uptime+" seconds")