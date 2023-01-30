// connect with mqtt
var mqtt = require('mqtt')

// connect to mqtt broker
var client = mqtt.connect('mqtt://localhost:1883', {
    username: '',
    password: ''
})

// subscribe to topic
client.on('connect', function () {
  client.subscribe('test')
  console.log('log connect and subscribe to topic test')
})

// listen to mqtt messages
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})

