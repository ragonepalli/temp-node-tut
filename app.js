const raju = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = raju.flatMapDeep(items)

console.log(newItems)