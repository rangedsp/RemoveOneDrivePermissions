# Remove all Shared Items from your OneDrive account

https://onedrive.live.com/?id=root&cid=856030E95E1FF0FB&qt=sharedbyme


No such thing as "shared by me"
https://learn.microsoft.com/en-us/onedrive/developer/rest-api/api/drive_sharedwithme?view=odsp-graph-online

> they don't have a public API to support 'Shared By Me' scenario, and also don't have plan to support it in recent future
https://github.com/microsoftgraph/microsoft-graph-docs/issues/14945


Site makes a call to:
https://api.onedrive.com/v1.0/drive/shared?%24select=*%2CfileSystemInfo%2Cfolder%2Creactions%2Cbundle%2CwebDavUrl

Doc:
https://github.com/OneDrive/onedrive-api-docs/blob/live/docs/rest-api/api/drive_sharedbyme.md

So need to grab token for OneDrive API

1. Register app 

   ![registerApp]('./registerApp.png')

2. Get OneDrive API token

   ![getOnedriveToken]('./getOnedriveToken.png')

3. Get list of shared items with Postman

   ![getSharedItems]('./getSharedItems.png')

4. Get graph token (I used [Graph explorer tool](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/api/permission_delete?view=odsp-graph-online) because I am lazy)
   
   ![getGraphToken]('./getGraphToken.png')
5. Run `./getPermissionIdFromSharedItems.js`
6. Run `./removeAllPermissions.js`


Voila!

![done]('./done.png')