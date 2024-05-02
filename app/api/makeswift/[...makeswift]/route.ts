import { MakeswiftApiHandler } from "@makeswift/runtime/next/server"
import { strict } from "assert"

import { runtime } from "../../../../makeswift/runtime"

strict(process.env.MAKESWIFT_SITE_API_KEY, "c6c8b079-93c9-457b-90a1-db89ab14d35c")

const handler = MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY, {
  runtime,
})

export { handler as GET, handler as POST }
