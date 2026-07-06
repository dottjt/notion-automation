const { Client } = require("@notionhq/client")

import { createPageInJournalDatabase } from "./utils"

// Initializing a client
const notion = new Client({
  auth: process.env.CT,
});

createPageInJournalDatabase(notion)



// ;(async () => {
//   const listUsersResponse = await notion.users.list({})
//   console.log(listUsersResponse)
// })()
