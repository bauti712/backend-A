import Server from "./server/server"
(() => {
    main()
})()
function main() {
    new Server().start()
}