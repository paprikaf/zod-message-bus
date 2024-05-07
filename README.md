# `zod-message-protocol`

Gives you type-safe message passing (using Zod!) between two different environments.

```ts
// protocol.ts

//Typesafe function!
const Protocol = createMessageProtocol({
    events: {
        LOG_IN: {
           username: z.string(),
           password: z.string()
        },
        LOG_OUT: {}
    }
});

// iframe.ts


//Type safe sender!
const sendToParent = protocol.createHandler(window.parent.postMessage)

//Type safe reciver!
const handlParentEvent = protocol.createHandler((event) => {
    console.log(event)
})


window.addEventListener('message', (event) => {
    handlParentEvent(event.data)
})



```

## Installation

```bash
# Using pnpm
pnpm install @crate.ai/zod-message-protocol

# Using npm
npm install @crate.ai/zod-message-protocol

# Using yarn
yarn add @crate.ai/zod-message-protocol

