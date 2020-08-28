const fs = require('fs')
const passData = require('./passData')
const colors = require('colors')

const actionType = (type, title) => {
    const data = fs.readFileSync('./data.json', 'utf-8')
    let tasksList = JSON.parse(data);
    const typeArr = ['add', 'a', 'rm', 'remove', 'show', 's']
    if(!typeArr.includes(type)){
        return console.log(`sorry don't know that command try : ${typeArr} `.black.bgRed);
    }
    if(type === typeArr[0] || type === typeArr[1]){
        
        const findItem = tasksList.find(item => item.title === title);
        if(findItem){
            return console.log(`Sorry but task ${title} already exists`.black.bgRed)
        } 
        passData(1, title)
        console.log(`task ${title} added`.black.bgBrightGreen)
    } else if (type === typeArr[2] || type === typeArr[3]){
        const removeItem = tasksList.findIndex(task => task.title === title)
        if(removeItem === -1){
            return console.log(`Sorry, but task ${title} doesn't exist`.black.bgRed)
        }
        passData(2, title)
        console.log(`task ${title} successfully removed`.black.bgBrightBlue)
    } else if (type === typeArr[4] || type === typeArr[5]){
        passData(3, null)
    }
}

module.exports = actionType