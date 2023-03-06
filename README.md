# terml
a really bad programming language for my terminal website

```terml
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

## status

This project is currently being developed and is thus *IN PROGRESS*
