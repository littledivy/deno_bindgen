// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.4.1/plug.ts"
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}
const opts = {
  name: "deno_bindgen_test",
  url: (new URL("../target/debug", import.meta.url)).toString(),
  policy: CachePolicy.NONE,
}
const _lib = await prepare(opts, {
  sleep: { parameters: ["u64"], result: "void", nonblocking: true },
  test_buf: {
    parameters: ["pointer", "usize"],
    result: "u8",
    nonblocking: false,
  },
  test_str: {
    parameters: ["pointer", "usize"],
    result: "void",
    nonblocking: false,
  },
  test_serde: {
    parameters: ["pointer", "usize"],
    result: "u8",
    nonblocking: false,
  },
  test_mut_buf: {
    parameters: ["pointer", "usize"],
    result: "void",
    nonblocking: false,
  },
  add2: { parameters: ["pointer", "usize"], result: "i32", nonblocking: false },
  test_mixed: {
    parameters: ["isize", "pointer", "usize"],
    result: "i32",
    nonblocking: false,
  },
  test_mixed_order: {
    parameters: ["i32", "pointer", "usize", "i32"],
    result: "i32",
    nonblocking: false,
  },
  test_lifetime: {
    parameters: ["pointer", "usize"],
    result: "usize",
    nonblocking: false,
  },
  add: { parameters: ["i32", "i32"], result: "i32", nonblocking: false },
  test_tag_and_content: {
    parameters: ["pointer", "usize"],
    result: "i32",
    nonblocking: false,
  },
})
export type OptionStruct = {
  maybe: string | undefined | null
}
export type TestLifetimeWrap = {
  _a: TestLifetimeEnums
}
export type TestLifetimeEnums = {
  Text: {
    _text: string
  }
}
export type MyStruct = {
  arr: Array<string>
}
export type PlainEnum =
  | {
    a: {
      _a: string
    }
  }
  | "b"
  | "c"
/**
 * Doc comment for `Input` struct.
 * ...testing multiline
 */
export type Input = {
  /**
   * Doc comments get
   * transformed to JS doc
   * comments.
   */
  a: number
  b: number
}
export type TestLifetimes = {
  text: string
}
export type TagAndContent =
  | { key: "A"; value: { b: number } }
  | { key: "C"; value: { d: number } }
export function sleep(a0: number) {
  return _lib.symbols.sleep(a0) as Promise<null>
}
export function test_buf(a0: Uint8Array) {
  const a0_buf = encode(a0)
  return _lib.symbols.test_buf(a0_buf, a0_buf.byteLength) as number
}
export function test_str(a0: string) {
  const a0_buf = encode(a0)
  return _lib.symbols.test_str(a0_buf, a0_buf.byteLength) as null
}
export function test_serde(a0: MyStruct) {
  const a0_buf = encode(JSON.stringify(a0))
  return _lib.symbols.test_serde(a0_buf, a0_buf.byteLength) as number
}
export function test_mut_buf(a0: Uint8Array) {
  const a0_buf = encode(a0)
  return _lib.symbols.test_mut_buf(a0_buf, a0_buf.byteLength) as null
}
export function add2(a0: Input) {
  const a0_buf = encode(JSON.stringify(a0))
  return _lib.symbols.add2(a0_buf, a0_buf.byteLength) as number
}
export function test_mixed(a0: number, a1: Input) {
  const a1_buf = encode(JSON.stringify(a1))
  return _lib.symbols.test_mixed(a0, a1_buf, a1_buf.byteLength) as number
}
export function test_mixed_order(a0: number, a1: Input, a2: number) {
  const a1_buf = encode(JSON.stringify(a1))
  return _lib.symbols.test_mixed_order(
    a0,
    a1_buf,
    a1_buf.byteLength,
    a2,
  ) as number
}
export function test_lifetime(a0: TestLifetimes) {
  const a0_buf = encode(JSON.stringify(a0))
  return _lib.symbols.test_lifetime(a0_buf, a0_buf.byteLength) as number
}
export function add(a0: number, a1: number) {
  return _lib.symbols.add(a0, a1) as number
}
export function test_tag_and_content(a0: TagAndContent) {
  const a0_buf = encode(JSON.stringify(a0))
  return _lib.symbols.test_tag_and_content(a0_buf, a0_buf.byteLength) as number
}
