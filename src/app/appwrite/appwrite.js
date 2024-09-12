import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c1e09d9c0a5a0c2a94'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
