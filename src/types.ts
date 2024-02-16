// 入力
export type ParserInput = readonly string[]

// 出力
interface ParseSuccess<T> {
  result: 'success'
  data: T
  rest: ParserInput
}

interface ParseFail {
  result: 'fail'
}

export type ParserOutput<T> = Readonly<ParseSuccess<T> | ParseFail>

// パーサー
export type Parser<T> = (input: ParserInput) => ParserOutput<T>

// utility
export type ParserData<P> = P extends Parser<infer T> ? T : never
