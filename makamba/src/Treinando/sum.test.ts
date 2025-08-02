import { expect, test } from 'vitest'
import { sum } from './Sum'

test('adds 20 + 20 to equal 40', () => {
  expect(sum(5, 5)).toBe(10)
})