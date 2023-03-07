# terml
a really bad programming language for my terminal website  
> also, it doesn't use any dependencies

```py
DEF "PRINTLN" "n"
    OUT n
    OUT "\n"

DEF "FIBONACCI" "n"
    NEW "a" 0
    NEW "b" 1
    REPEAT n
        PRINTLN a
        PRINTLN b
        NEW "c"
        ADD c a
        ADD c b
        ADD a b
        ADD b c

FIBONACCI 10
```

## how to use

*terml* is written purely in javascript. To use it in your favorite Website, simply include it's source .js file (terml.js) somewhere in your html:
`<script src="terml.js"></script>`. Having this, all `<terml>`-HTML Tags will be replaced with their resulting output! See the [example file](https://github.com/noel-friedrich/terml/blob/main/example.html) as inspiration!


Alternatively, you may find it useful to run code via javascript and get it's output back:
```js
// first include it's source file (the same one as before) somewhere!

const code = `
REPEAT 5
    OUT "HELLO"
`

const output = Terml.run(code)
// 'HELLOHELLOHELLOHELLOHELLO'
```

## why though?

I wouldn't really recommend this language to anyone out there. I designed it as a fun exercise for myself and as a side project. Originally, I wanted to use this as an intermediate language for my [homepage](https://github.com/noel-friedrich/terminal), but it doesn't quite make that development easier in its current shape.

## Inbuilt Functions

| Function | Arguments | Descriptions |
| -------- | --------- | ------------ |
| \_\_GLOBAL\_\_ | | execute all substatements |
| NEW | name; ?value | define new variable (number) |
| NEW_LST | name; ?value | define new list (of numbers) |
| PUSH | list; value | push a value to the end of a list |
| POP | list; ?var | pop the last value of a list and put it's value into a given variable. Does nothing if list is empty |
| SHIFT | list; ?var | pop the first value of a list and put it's value into a given variable |
| UNSHIFT | list; value | push a value to the beginning of a list |
| GET_AT | list; index; var | put a value from a list at an index into a var |
| SET_AT | list; index; value | put a value into a list at given index |
| INSERT_AT | name; value; index | insert a value into a list at an index |
| DELETE_AT | list; index | delete a list item at a given index |
| CONCAT | list1; list2 | combine the second list |
| OUT_LST | list | output a list in it's numeric json format | 
| SET | var; value | set the value of an existing variable |
| OUT | value | output a value, no matter which type. Interprets lists as strings of characters with ASCII encoding |
| IN | list | set list content as ascii encoded string of characters |
| ADD | var; value | sum a variable with a value and store the result in the variable |
| SUB | var; value | subtract a variable with a value and store the result in the variable |
| MUL | var; value | multiply a variable with a value and store the result in the variable |
| DIV | var; value | divide a variable with a value and store the result in the variable |
| MOD | var; value | calculate modulus of variable in respect to value and store result in variable |
| POW | var; value | calculate var to the power of the value and store result in variable |
| ROUND | var | round a variable to the nearest integer |
| SQRT | var | calculate square root of variable and store result in the same variable |
| FLOOR | var | floor a variable to the next-lowest integer |
| CEIL | var | ceil a variable to the next-highest integer |
| DEF | name; ?args... | define a new function with given args |
| IS_EQ | val1; val2; var | set var to 1 if val1=val2, else set it to 0 |
| IS_LT | val1; val2; var | set var to 1 if val1 < val2, else set it to 0 |
| IS_GT | val1; val2; var | set var to 1 if val1 > val2, else set it to 0 |
| OR | val1; val2; var | set var to 1 if val1 or val2 is not equal to 0, else set it to 0 |
| XOR | val1; val2; var | set var to 1 if either val1 or val2 is not equal to 0, else set it to 0 |
| AND | val1; val2; var | set var to 1 if val1 and val2 are not equal to 0, else set it to 0 |
| NOT | val; var | set var to 1 if val is not equal to zero, else set it to 0 |
| IF | value | execute all substatements if value is not equal to zero |
| IF_NOT | value | execute all substatements if value is equal to zero |
| WHILE | value | execute all substatements while value is not equal to zero |
| WHILE_NOT | value | execute all substatements while value is equal to zero |
| REPEAT | value; ?name | execute all substatements for value times. If given a variable name, this variable will act as an iteration counter starting with 0 |

> *?something -> optional value*  
> Variables and Lists are scoped to be only defined in current level of indentation and all substatements

### defining functions

```py

# define a new function using the DEF function:
DEF "HELLOWORLD"
    OUT "Hello, World!\n"

# call the new function
HELLOWORLD

# define a function with arguments
DEF "WELCOME" "name"
    OUT "Hello, "
    OUT name
    OUT "!\n"

# call the new function with arguments
WELCOME "noel"

# by default, values are passed as copies
# to pass by reference, begin variable name with &
DEF "INCREMENT" "&n"
    ADD n 1
    
# call the new function with a reference
NEW "num" 0
INCREMENT num
INCREMENT num
OUT num
# prints 2

```

## status

This project is currently being developed and is thus *IN PROGRESS*
