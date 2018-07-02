Tasks to complete:
* Build mobile NativeScript app:
Created NativeScript app with angular which lists the opportunities created in Salesforce.
I tried using 'Kinvey.DataStore.collection('collection-name')' to use the collection data directly but it didn't have find() method for use, so I used API calls in service instead.
* Configure Kinvey Serverless Cloud for the backend:
Used Kinvey Serverless Cloud to create a service which communicates with Salesforce 'Opportunity' object. Mapped few fields and tested the JSON data with API Console.
Moreover, I used 'onPreFetch' colllection hook to retrieve only those Salesforce opportunies which are linked to my account.
* Create Salesforce Developer Account:
Created the Salesforce account and added new opportunities.
* Configure Kinvey to access and list Salesforce opportunity data and send the push notification to the app when a new opportunity object is created in Salesforce.:
I configured Kinvey to access and list the Salesforce opportunity data. I configured Kinvey for push notifications by setting 'Sender Id' and 'API Key' which was obtained from 'Firebase'. I downloaded 'google-services.json' so that Application can communicate with Kinvey. 
I was not able to implement push notifications as there is bug in kinvey-nativescript-sdk/push library of Nativescript.
Here is the link for the bug report: https://github.com/Kinvey/nativescript-sdk/issues/28 
