## 正负浮点数
```
// 0
// -1
// 1
// 2.1
const numReg = /^[-?1-9][0-9]*\.?[0-9]*$/
```

## 二进制
```
// 0b11
const numReg = /^0[bB][01]+$/
```
## 八进制
```
// 0o11
const numReg = /^0[oO][0-7]+$/
```

## 十六进制
```
// 0x11
const numReg = /^0[xX][0-9a-fA-F]+$/
```

## 所有 Number 直接量
```
const numReg = /^[-?1-9][0-9]*\.?[0-9]*$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
```