### Redis client reuseable

#### Install

```base
# With yarn
yarn add crm-redis-client
# With npm
npm install crm-redis-client
```

#### Usage

```js
RedisModule.register({
  socket: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
  },
  database: this.redisConfig.dataBase,
});
```
# mattermost
