( async () => 
    {
        let result = await sendMessage('AM', 1);
        console.log(result)
    }
)();

async function sendMessage(userId, messageId)
{
    let user1 = await getUser(userId);
    let message1 = await getMessage(messageId);

    return user1 + ': ' + message1;
}

async function getUser(userId)
{
    if (userId == 'AM') return new Promise((resolve, reject) => resolve('Morozov'));
    else return new Promise((resolve, reject) => resolve('Unknown'));
}

async function getMessage(messageId)
{
    if (messageId == 1) return new Promise((resolve, reject) => resolve('hello world'))
    else return new Promise((resolve, reject) => resolve('some message'));
}