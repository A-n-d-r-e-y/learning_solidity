let result = sendMessage('AM', 1)
    .then(
        result => { console.log(result) }, 
        //result => { console.log('Error: ' + result) }
    );


//let result = getUser('AM').then((resolve) => { console.log(resolve)});
//let result = getMessage(1).then((resolve) => { console.log(resolve)});
//let result = sendMessage('AM', 1).then((resolve) => { console.log(resolve)});

function sendMessage(userId, messageId)
{
    return new Promise((resolve, reject) => {
        getUser(userId).then(user1 => {
            getMessage(messageId).then(message1 => {
                resolve(user1 + ': ' + message1);
            });
        });
    });
}

function getUser(userId)
{
    if (userId == 'AM') return new Promise((resolve, reject) => resolve('Morozov'));
    else return new Promise((resolve, reject) => resolve('Unknown'));
}

function getMessage(messageId)
{
    if (messageId == 1) return new Promise((resolve, reject) => resolve('hello world'))
    else return new Promise((resolve, reject) => resolve('some message'));
}