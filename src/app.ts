import Server from "./core/server/server"
(() => {
    main()
})()
function main() {
    new Server().start()
}