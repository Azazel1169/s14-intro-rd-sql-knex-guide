const db = require("../../data/db-config");

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};

async function get() {
  // const result = await db.raw('select * from shippers')
  const result = await db("shippers");
  return result;
}

async function getById(shipperId) {
  const [shipper] = await db("shippers").where("shipperid", shipperId);
  return shipper;
}

async function create(shipper) {
  const [shipperId] = await db("shippers").insert(shipper);
  // console.log(shipperId);
  const result = await getById(shipperId);
  // console.log(result);
  return result;
}

async function update(shipperId, changes) {
  await db("shippers").update(changes).where("shipperid", shipperId);
  const result = await getById(shipperId);
  return result;
}

async function remove() {
  return "delete wired";
}
