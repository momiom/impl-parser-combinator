import { anyChar } from './premitives'

const parser = anyChar

const input = 'abc'

console.log('input', ...input)
const result = parser([...input])

console.log('result', result)
