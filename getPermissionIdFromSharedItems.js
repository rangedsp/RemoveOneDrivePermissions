const fs = require("fs");

let sharedItems = JSON.parse(fs.readFileSync("sharedItems.json"));

let sharedItemIds = sharedItems.value.map((item) => item.id);

let token = "<your graph token here>";

let process = async (id) => {
  let res = await fetch(
    `https://graph.microsoft.com/v1.0/me/drive/items/${id}/permissions`,
    {
      headers: {
        Authorization: "Bearer " + token,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  let resData = await res.json();
  if (!resData) {
    return;
  }

  return {
    id: id,
    permissionIds: resData?.value.map((permValue) => permValue.id),
  };
};

let promises = sharedItemIds.map(process);

Promise.all(promises).then((data) => {
  fs.writeFileSync(
    "sharedItemsWithPermissionIds.json",
    JSON.stringify(data, null, 2)
  );
});
