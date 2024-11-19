/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0pe2joiec0ehiql")

  collection.name = "tasks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0pe2joiec0ehiql")

  collection.name = "Collection1"

  return dao.saveCollection(collection)
})
