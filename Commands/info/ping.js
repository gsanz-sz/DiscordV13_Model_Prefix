module.exports = {
    name: 'ping',
    aliases: ["p"],
    description: 'Mostrar o ping do servidor!',
    run: async(client, message, args) => {
        message.channel.send('Pong!')
    }
}