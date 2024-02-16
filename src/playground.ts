import { anyChar } from './premitives'

console.log(`
========================================
`)

const parser = anyChar

const input = 'abc'

console.log('input', [...input])
const result = parser([...input])

console.log('result', result)
