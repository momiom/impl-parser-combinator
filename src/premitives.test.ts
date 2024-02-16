import { anyChar, eof } from './premitives'
import { ParserOutput } from './types'

describe('anyChar', () => {
  const parser = anyChar

  test('Empty input', () => {
    const input = [] as const
    const result = parser(input)
    expect(result).toEqual({ result: 'fail' })
  })

  test('1 character input', () => {
    const input = [...'a'] as const
    const output = parser(input)
    expect(output).toEqual<ParserOutput<string>>({
      result: 'success',
      data: 'a',
      rest: [],
    })
  })

  test('Many character input', () => {
    const input = [...'abc'] as const
    const output = parser(input)
    expect(output).toEqual<ParserOutput<string>>({
      result: 'success',
      data: 'a',
      rest: [...'bc'],
    })
  })
})

describe('eof', () => {
  const parser = eof

  test('Empty input', () => {
    const input = [] as const
    const output = parser(input)
    expect(output).toEqual<ParserOutput<null>>({
      result: 'success',
      data: null,
      rest: [],
    })
  })

  test('Non-empty input', () => {
    const input = [...'a']
    const output = parser(input)
    expect(output).toEqual<ParserOutput<null>>({
      result: 'fail',
    })
  })
})
