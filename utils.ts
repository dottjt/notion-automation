export async function createPageInJournalDatabase(client: any) {
const JOURNAL_ID="0caa0854dddb42d8bdf743b07ae84f35"

  try {
    const response = await client.pages.create({
      // 1. Specify the parent database
      parent: {
        type: 'database_id',
        database_id: JOURNAL_ID,
      },

      // 2. Define the properties (columns) of the database
      properties: {
        // "Name" is the default title property in most Notion databases.
        // Make sure this matches the exact name of the title column in your DB.
        Name: {
          title: [
            {
              text: {
                content: "My New Page Title",
              },
            },
          ],
        },
        // Example: Adding an optional Select property (e.g., Status)
        // Status: {
        //   select: {
        //     name: "In progress"
        //   }
        // }
      },

      // 3. (Optional) Add content to the inside of the new page
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: "This is the first paragraph inside the new page.",
                },
              },
            ],
          },
        },
      ],
    });

    console.log("Success! Page created with ID:", response.id);

  } catch (error) {
    console.error("Error creating page:", error.body || error);
  }
}

function getTomorrowsFormattedDate() {
  // 1. Create a new Date object and set it to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // 2. Extract and format the day, month, and year (dd, mm, yy)
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
  const yy = String(tomorrow.getFullYear()).slice(-2);

  // 3. Get the full name of the day
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[tomorrow.getDay()];

  // 4. Construct and return the final string
  return `${dd}-${mm}-${yy} ${dayName} [B]`;
}