import { z } from "zod";
import { createMessageProtocol } from "./createMessageProtocol";


const chromeExtenseion = createMessageProtocol({
    events: {
        LOG_IN: {
           username: z.string(),
           password: z.string()
        },
        LOG_OUT: {}
    }
})

const send = chromeExtenseion.createSender(window.postMessage)

const handler = chromeExtenseion.createReceiver((event) =>{})
