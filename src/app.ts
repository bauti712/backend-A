import "reflect-metadata"
import Server from "./server/server"
(() => {
    main()
})()
async function main() {
    new Server().start()
}