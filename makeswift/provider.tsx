"use client"

import { runtime } from "./runtime"
import {
  ReactRuntimeProvider,
  RootStyleRegistry,
} from "@makeswift/runtime/next"
import "./components"

export function MakeswiftProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactRuntimeProvider runtime={runtime}>
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </ReactRuntimeProvider>
  )
}
