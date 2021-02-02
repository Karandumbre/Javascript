function inventoryList() {
  // write your code here

  const inventoryList = {};
  return {
    add: function (item) {
      if (!inventoryList[item]) {
        inventoryList[item] = 1;
      } else {
        inventoryList[item] = inventoryList[item] + 1;
      }
    },

    remove: function (item) {
      delete inventoryList[item];
    },
    getList: function () {
      return Object.keys(inventoryList);
    },
  };
}
