# SeattleJS presentation 2023-02-08
The code snippets for my presentation at the SeattleJS meetup.

## Backend
For the backend, the example includes `ws` and `kafkajs` as dependencies. This is still not ready to run because the Kafka will need a real broker to connect to. You can either run [Kafka locally](https://kafka.apache.org/quickstart) or use a managed Kafka service like [Confluent.io](https://www.confluent.io/), but you might need to add credit card information even though you can try it out for free.

Once you have a broker setup, you *should* just be able to run the following script to get started:

```bash
cd backend
npm i
node index.js
```
### Note: 
Nothing is actually producing any messages to the kafka broker so you may need to make a script to do so. Alternatively, Confluent has a UI where you can produce messages to a topic.

## Frontend
For the frontend, I am using [Vite](https://vitejs.dev/guide/) to create a React app. The example will connect to `ws://localhost:8080` and it will use state to keep track of the messages it recieves over web sockets.

To get the frontend started, you *should* just be able to run the following scripts.

```bash
cd frontend
npm i
npm run vite
```

### Note
I am not comfortable working on the frontend, so this may not actually work out of the box. :) 