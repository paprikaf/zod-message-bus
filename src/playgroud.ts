import { z } from "zod";
import { createMessageProtocol } from "./createMessageProtocol";


const protocol = createMessageProtocol({
    events: {
        LOG_IN: {
           username: z.string(),
           password: z.string()
        },
        LOG_OUT: {}
    }
})

//iframe.ts

const sendToParent = protocol.createHandler(window.parent.postMessage)

const handlParentEvent = protocol.createHandler((event) => {
    console.log(event)
})


window.addEventListener('message', (event) => {
    handlParentEvent(event.data)
})

//parent.ts

const iframe = document.querySelector('iframe') as HTMLIFrameElement
const sendToChild = protocol.createHandler(iframe!.contentWindow!.postMessage)

