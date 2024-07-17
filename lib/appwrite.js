import { Account,ID, Client } from 'react-native-appwrite';

export const appwriteConfig={
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.react.aora',
    projectId:'6697526f0024f3aa4ce7',
    databaseId:'6697538100085d84b5b3',
    userCollectionId:'669753a4003553f8fc1b',
    videoCollectionId:'669753ba003267ac7b59',
    storageId:'669754bd003be286b909'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;


const account = new Account(client);


export const createUser=()=>{
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}
