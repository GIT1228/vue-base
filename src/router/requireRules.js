const modulesFiles = require.context("../router", true, /\.routes\.js/)

const rules = modulesFiles.keys().reduce((prev, cur) => {
    prev.push(modulesFiles(cur).default)
    return prev
}, [])
export default rules
