const { xmasTree } = require('./index');


test('Xmas tree height 5', () => {
    expect(xmasTree(5, '$')).toBe(`    $
   $$$
  $$$$$
 $$$$$$$
$$$$$$$$$
`)
})

test('1 symbol more "^&*"', () => {
    expect(xmasTree(5, 'e&*')).toBe(`Вы ввели более одного символа! Используем первый символ.
    e
   eee
  eeeee
 eeeeeee
eeeeeeeee
`)
})

test('There is no one symbol', () => {
    expect(xmasTree(5, '')).toBe(`Вы не  ввели символ!`)
})