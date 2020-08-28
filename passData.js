const fs = require('fs')

const passData = (type, title) => {

    const data = fs.readFileSync('./data.json', 'utf-8')
    let tasksList = JSON.parse(data);
    let tasksListJSON = '';

    switch(type){
        case 1:
            const id = tasksList.length + 1;
            tasksList.push({id, title});
            tasksListJSON = JSON.stringify(tasksList)
            fs.writeFileSync('data.json', tasksListJSON)
            break;
        case 2:
            const removeItem = tasksList.findIndex(task => task.title === title)
            if(removeItem === -1){
                return console.log(`Sorry, but task ${title} doesn't exist`.black.bgRed)
            }
            tasksList.splice(removeItem, 1);
            tasksList = tasksList.map((task, index) => ({id: index + 1, title : task.title}))
            tasksListJSON = JSON.stringify(tasksList)
            fs.writeFileSync('data.json', tasksListJSON)
            break;
        case 3: 
            tasksList = tasksList.map((task, index) => ({id: index + 1, title : task.title}))
            console.log('To Do List'.black.bgYellow)
            console.log(tasksList);
            break;    
    }
}

module.exports = passData;