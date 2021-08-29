import React from "react"

import { StoreProvider } from "./src/context/storeContext"

import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => <StoreProvider>{element}</StoreProvider>

// const wrapRootElement = ({ children }) => (
//   <StoreProvider>
//     {/* <MDXProvider>{element}</MDXProvider> */}
//     {children}
//   </StoreProvider>
// )

// export { wrapRootElement }
