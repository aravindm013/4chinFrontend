let asd = `17EGHS01
17EGHS82
17CSPI10
17MEES84
17CSCC18
17CHBS01

`
let subs =`TECHNICAL ENGLISH
PROFESSIONAL COMMUNICATION AND PERSONALITY DEVELOPMENT
MOBILE APPLICATION  DEVELOPMENT
ENGINEERING GRAPHICS (THEORY + PRACTICE)
RICH INTERNET APPLICATION
ENVIRONMENTAL SCIENCE AND ENGINEERING

`
asd=asd.split('\n')
subs = subs.split('\n')
const res = subs.map((x,i)=>{
    return `${subs[i]} - ${asd[i]}`
}) 
console.log(res.join('\n'))