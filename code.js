let result = sendMessage(
    'AM', 
    1, 
    (result) => { console.log(result) }
);


function sendMessage(userId, messageId, callback)
{
    getUser(userId, (user1) => {
        getMessage(messageId, (message1) => {
            callback(user1 + ': ' + message1);
        });
    });
}

function getUser(userId, callback)
{
    if (userId == 'AM') callback('Morozov')
    else callback('Unknown');
}

function getMessage(messageId, callback)
{
    if (messageId == 1) callback('hello world')
    else callback('some message');
}