const AirtablePlus = require("airtable-plus");
const airtable = new AirtablePlus({
  baseID: process.env.AIRTABLE_BASE_ID,
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: process.env.AIRTABLE_TABLE_NAME,
});

export default async function handler(req, res) {
  await airtable.create({
    'name': req.body?.name,
    'food': req.body?.food,
    'notes': req.body?.notes,
  });
  res.redirect("/");
}
