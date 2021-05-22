// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from "@netlify/functions"
import { createClient } from "contentful-management"
import { config } from "dotenv"
config()

const handler: Handler = async event => {
  try {
    const quantity = event.queryStringParameters?.quantity
    const entryId = event.queryStringParameters?.entryId
    const client = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN!,
    })
    client.getSpace(process.env.CONTENTFUL_SPACE_ID!).then(space => {
      space.getEnvironment("master").then(environment => {
        environment
          .getEntry(entryId!)
          .then(entry => {
            entry.fields.sold["en-US"] += quantity

            return entry.update()
          })
          .then(entry => entry.publish())
      })
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Success` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

export { handler }
