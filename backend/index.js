import { Kafka } from 'kafkajs';
import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
const kafka = new Kafka({
  clientId: 'seattlejs-talk',
  brokers: ['kafka1:9092', 'kafka2:9092'],
});
const consumer = kafka.consumer({ groupId: 'seattlejs-group' });
await consumer.connect();
await consumer.subscribe({ topic: 'seattlejs-topic', fromBeginning: false });

wss.on('connection', async (ws) => {
  await consumer.run({
    eachMessage: async ({ message }) => {
      // lets pretend each message the consumer is recieving has a schema of:
      // { price: number }
      ws.send(message.value.toString());
    },
  });
});
