import { connect, ConnectionStates } from "mongoose";

let isConnected: ConnectionStates;

export const connectToDb = async () => {
  try {
    if (isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await connect(process.env.MONGO, {
      dbName: "next14tutorial",
    });
    isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
