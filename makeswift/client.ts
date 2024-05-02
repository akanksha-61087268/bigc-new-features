import { Makeswift } from "@makeswift/runtime/next"
import { strict } from "assert"

import { runtime } from "./runtime"

strict(process.env.MAKESWIFT_SITE_API_KEY, "c6c8b079-93c9-457b-90a1-db89ab14d35c")

export const client = new Makeswift(process.env.MAKESWIFT_SITE_API_KEY, {
  runtime,
})
