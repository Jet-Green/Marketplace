import express from "express";
const app = express();

import orderFunctions from './functions/order.js'

app.use(express.json());

// console.log(orders);
app.post("/orders/get-by-user-id", orderFunctions.getByUserId);

export default app;
