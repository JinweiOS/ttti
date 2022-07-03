const { readFileSync, writeFileSync } = require('fs')
const data = readFileSync('73test.st');
const aimObject = data.toString('utf-8')
    .split('\n')
    .map(keyValuePaire => {
        const arr = keyValuePaire.split('/')
        return { [arr[0]]: arr[1] }
    })
const result = {}
aimObject.forEach(element => {
    Object.assign(result, element)
});
writeFileSync('73.json', JSON.stringify(result, null, 2))
console.log(result)