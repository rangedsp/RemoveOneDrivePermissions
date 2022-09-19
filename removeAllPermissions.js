const fs = require("fs");

let sharedItemsWithPermissionIds = JSON.parse(
  fs.readFileSync("sharedItemsWithPermissionIds.json")
);

let token = "<your graph token here>";

let process = async (item) => {
  if (!item.permissionIds || item.permissionIds.length < 1) {
    return;
  }
  for (const permissionId of item.permissionIds) {
    let res = await fetch(
      `https://graph.microsoft.com/v1.0/me/drive/items/${item.id}/permissions/${permissionId}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
        method: "DELETE",
      }
    );
    console.log(res.ok);
  }
};

let promises = sharedItemsWithPermissionIds.map(process);

Promise.all(promises);
