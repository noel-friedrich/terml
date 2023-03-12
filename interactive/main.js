const fibonacciTermlCode = `DEF "PRINTLN" "n"
    OUT n
    OUT "\\n"

DEF "FIBONACCI" "n"
    NEW "a" 0
    NEW "b" 1
    REPEAT n
        PRINTLN a
        PRINTLN b
        NEW "c" 0
        ADD c a
        ADD c b
        ADD a b
        ADD b c

FIBONACCI 5`

const triangleTermlCode = `DEF "PYRAMID" "height"
    NEW "count"
    NEW "halfheight" height
    DIV halfheight 2
    FLOOR halfheight
    REPEAT height
        ADD count 1
        NEW "padcount" halfheight
        NEW "padsub" count
        DIV padsub 2
        FLOOR padsub
        SUB padcount padsub

        REPEAT padcount
            OUT "  "
        REPEAT count
            OUT "**"
        OUT "\\n"

PYRAMID 20`

const helloworldTermlCode = `OUT "Hello, world!"`

const asciiTermlCode = `DEF "OUT_AS_CHAR" "char"
    NEW_LST "lst"
    PUSH lst char
    OUT lst

DEF "PRINT_LINE_SEP" "length"
    REPEAT length "i"
        MOD i 4
        IF i
            OUT "-"
        IF_NOT i
            OUT "+"

PRINT_LINE_SEP 65
OUT "\\n"
REPEAT 15 "i"
    OUT "| "
    ADD i 1
    REPEAT 16 "j"
        NEW "char" 0
        ADD char i
        MUL char 16
        ADD char j
        OUT_AS_CHAR char
        OUT " | "
    OUT "\\n"
    PRINT_LINE_SEP 65
    OUT "\\n"`

const templates = {
    "fibonacci": fibonacciTermlCode,
    "triangle": triangleTermlCode,
    "helloworld": helloworldTermlCode,
    "ascii": asciiTermlCode
}

const container = document.getElementById("container")
const templateSelect = document.getElementById("template-select")
const addSection = document.getElementById("add-section")

function addEditable(code) {
    const editableContainer = document.createElement("div")
    editableContainer.className = "editable-container"
    container.insertBefore(editableContainer, container.lastChild.previousSibling)
    const editable = document.createElement("div")
    editable.contentEditable = true
    editable.className = "editable"
    if (code) editable.textContent = code
    editableContainer.appendChild(editable)
    const output = document.createElement("div")
    output.className = "editable-output"
    editableContainer.appendChild(output)
    const deleteButton = document.createElement("button")
    deleteButton.className = "delete-button"
    deleteButton.textContent = "remove"
    editableContainer.appendChild(deleteButton)

    let currTimeout = null

    function clearOutput() {
        output.textContent = ""
    }

    function outputText(txt) {
        output.textContent += txt
    }

    function getCode() {
        let code = ""
        for (const child of editable.childNodes) {
            if (child.nodeType === Node.TEXT_NODE) {
                code += child.textContent + "\n"
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                code += child.innerText + "\n"
            }
        }
        return code
    }

    async function run() {
        if (currTimeout) clearTimeout(currTimeout)
        clearOutput()
        await new Promise(resolve => setTimeout(resolve, 100))
        const code = getCode()
        TermlSettings.OUT_FUNC = outputText
        try {
            Terml.run(code)
        } catch (e) {
            outputText(e)
            console.error(e)
        }
    }

    deleteButton.addEventListener("click", () => {
        editableContainer.remove()
    })
    
    editable.addEventListener("keydown", e => {
        if (e.key === "Enter" && e.ctrlKey) {
            run()
            e.preventDefault()
        }
    })

    editable.addEventListener("input", () => {
        if (currTimeout) clearTimeout(currTimeout)
        currTimeout = setTimeout(run, 1000)
    })

    run()
}

window.addEventListener("load", () => {
    addEditable(fibonacciTermlCode)
})

addSection.addEventListener("click", e => {
    if (e.target !== addSection)
        return
    addEditable(templates[templateSelect.value])
})