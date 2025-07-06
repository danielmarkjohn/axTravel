import { connectToDatabase } from '../utils/mongodb';
import { Collection } from 'mongodb';

// Generic function to get a collection
export async function getCollection<T>(collectionName: string): Promise<Collection<any>> {
  const db = await connectToDatabase();
  return db.collection<any>(collectionName);
}           

// Example function to insert a document
export async function insertDocument<T>(collectionName: string, document: T): Promise<string | undefined> {
  const collection = await getCollection<T>(collectionName);
  const result = await collection.insertOne(document as any);
  return result.insertedId?.toString();
}

// Example function to find documents
export async function findDocuments<T>(
  collectionName: string, 
  query = {}, 
  options = {}
): Promise<any[]> {
  const collection = await getCollection<T>(collectionName);
  return collection.find(query, options).toArray();
}