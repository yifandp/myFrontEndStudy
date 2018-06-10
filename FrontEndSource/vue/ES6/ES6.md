### let和const
#### let
* 01 只在当前的代码块中有效
* 02 作用域不会被提升
* 03 不能成重复申明

#### const
* 01 只在当前的代码块中有效
* 02 作用域不会被提升
* 03 不能成重复申明
* 04 声明的常量必须赋值

---

### 解构赋值
1. 基本用法
```
// let name = 'zhangsan', age = 18, sex = '男';
let [name, age, sex] = ['zhangsan',18,'男'];
console.log(name) // 'zhangsan'
console.log(age) // 18
console.log(sex) // '男'
```
2. 对象的解构赋值
```
// let obj = {name: 'zhangsan',age: 20,sex: '男'}
let {name,age,sex} = {name: 'zhangsan',age: 20, sex: '男'}
console.log(name) // zhangsan
console.log(age) // 20
console.log(sex) // 男
```
3. 数组的解构赋值
```
let [name,age, sex] = ['MrFan',18,'男'];
console.log(name, age, sex); // MrFan 18 男

let [a,b,c] = [1,2,3];
console.log(a,b,c) // 1, 2, 3
```

---

### 数据的集合 Set
1. 创建一个集合
```
let set = new Set([1,4,35,3,4,2,1]);
console.log(set) // 1,4,35,3,2 
```
2. 一个属性 
* size 属性 
```
let set = new Set([1,4,35,3,4,2,1]);
console.log(set.size) // 5  
```
3. 是个方法 
* add 方法
```
let set = new Set([1,4,35,3,4,2,1]);
// 支持链式写法
set.add('55'); // 1,4,35,3,2,55
```
* delete 方法
```
let set = new Set([1,4,35,3,4,2,1]);
set.delete(35) // 1,4,3,2
```
* has 方法判断所传内容在数组中是否存在
```
let set = new Set([1,4,35,3,4,2,1]);
console.log(35) // true
console.log(88) // false
```
* clear 方法 清空数组内容
```
let set = new Set([1,4,35,3,4,2,1]);
set.clear();
console.log(set) // '';
```
* keys()  values()

---

### 数据的集合 Map
* 键值对的集合 — Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现
* 常用属性 size
* 常用方法
	1. set 和 get
	2. delete
	3. has
	4. clear
	5. keys()
	6. values()
	7. entries()

---

### Symbol 数据类型
* 保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。
* 它是js 引入的第七中数据类型
* 前六种 Number String Boolean Object undefined null

---

### ES6 模板字符串
> \` 这里写HTML代码 其中变量使用$(变量名) \`

### 数组的扩展
#### Array.from()
* Array.from方法用于将两类对象转为真正的数组
#### Array.of()
* Array.of方法用于将一组值，转换为数组。

---

### 对象的扩展
#### Object.assign()
* Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

