import { MongoClient, Db } from 'mongodb';

// Connection URI
const uri = "mongodb://localhost:27017/axtravels";

// Create a new MongoClient
const client = new MongoClient(uri);
let dbInstance: Db | null = null;

// Connect to the MongoDB server
export async function connectToDatabase(): Promise<Db> {
  if (dbInstance) return dbInstance;
  
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    
    // Get database name from URI or use default
    const dbName = uri.split('/').pop() || 'axsphere';
    dbInstance = client.db(dbName);
    
    return dbInstance;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// Close the connection
export async function closeDatabaseConnection(): Promise<void> {
  if (client) {
    await client.close();
    dbInstance = null;
    console.log("MongoDB connection closed");
  }
}