/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0pe2joiec0ehiql",
    "created": "2024-11-05 02:48:42.874Z",
    "updated": "2024-11-05 02:48:42.874Z",
    "name": "Collection1",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6oifktj6",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0pe2joiec0ehiql");

  return dao.deleteCollection(collection);
})
