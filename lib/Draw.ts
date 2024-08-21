import { Graph } from "./Graph"
import { PiParse } from "piparser/lib/PiParse"
import type { DOMAIN, PARSER } from "piparser/lib/PiParserTypes"
import { IParserConfig, IParserParameters } from "./pithree.types"
import { Point } from "./figures/Point"
import { parser_config } from "./parser/parser.config"
import { AbstractFigure } from "./figures/AbstractFigure"

export const PARSER_PARAMETERS_KEYS = [
    'grid', 'axis', 'camera', 'label', 'tex', 'points', 'no-points'
]


export class Draw extends Graph {
    #code: PARSER[]
    #settings: {
        grid: boolean,
        axis: boolean,
        label: boolean,
        tex: boolean,
        'no-points': boolean
    }
    #parser: PiParse

    constructor(id: string | HTMLElement, config?: IParserConfig) {
        super(id, {
            grid: false,
            axis: false
        })

        this.#parser = new PiParse({
            formatter: (line: string) => this.#parseKeyCode(line),
            keys: PARSER_PARAMETERS_KEYS,
            splitter: {
                main: '->',
                entry: ',',
                parameter: '/'
            }
        })

        this.#settings = {
            grid: false,
            axis: false,
            label: false,
            tex: false
        }

        // Build the layout using the default values or the parameters
        if (config?.parameters) {
            this.refreshLayout(config.parameters)
        }

        // Define the code to display
        this.#code = []
        if (config?.code) {
            this.#build(config.code)
        }
    }

    public refreshLayout(parameters?: string): this {
        // TODO: reformat this!
        const values = this.#parser.parameters(parameters ?? '', PARSER_PARAMETERS_KEYS)
        // this.updateLayout()

        if (values.grid) {
            this.#settings.grid = values.grid.value as boolean
        } else {
            this.#settings.grid = false
        }
        this.toggleGrid(this.#settings.grid)

        if (values.axis) {
            this.#settings.axis = values.axis.value as boolean
        } else {
            this.#settings.axis = false
        }
        this.toggleAxis(this.#settings.axis)

        if (values.label) {
            this.#settings.label = values.label.value as boolean
        } else {
            this.#settings.label = false
        }
        if (values.tex) {
            this.#settings.tex = values.tex.value as boolean
        } else {
            this.#settings.tex = false
        }
        if (values['no-points']) {
            this.#settings['no-points'] = values['no-points'].value as boolean
        } else {
            this.#settings['no-points'] = false
        }
        return this
    }


    public refresh(code: string) {
        // Clear the scene.
        this.clear()

        // Rebuild the code.
        this.#build(code)
    }


    #prepare(input: string): PARSER[] {
        const data: PARSER[] = []

        const lines: string[] = input
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => line.trim() !== '' && !line.startsWith('$'))

        lines.forEach((line) => {
            const parsedLine = this.#parser.parse(line)
            data.push(parsedLine)
        })

        return data
    }

    #uniqueName(name: string): string {
        let newName = name
        let i = 1
        while (this.figures[newName]) {
            newName = `${name}_${i}`
            i++
        }
        return newName
    }
    #build(code: string): this {
        this.#code = this.#prepare(code)
        const pConfig = parser_config
        const graphCreate = this.create

        this.#code.forEach((item) => {

            item.name = this.#uniqueName(item.name)

            let obj: AbstractFigure | undefined
            if (Object.hasOwn(pConfig, item.key)) {

                const { build, create } = pConfig[item.key]

                if (Object.hasOwn(graphCreate, create)) {
                    const config = build(item, this.figures, this.#settings)
                    const objCreate = graphCreate[create]

                    if (config) {
                        obj = objCreate(config, item.name)
                    }
                }
            }

            // The object has been created - apply some specific settings
            if (obj) {
                // Default settings
                if (this.#settings.label) {
                    // Add the label
                } else if (this.#settings.tex) {
                    // Add the tex label
                }

                if (obj instanceof Point && this.#settings['no-points']) {
                    item.parameters['!'] = { value: true, options: [] }
                }

                this.#applyOptions(item.parameters, obj)

            } else {
                console.log('No object created')
                console.log(item)
            }
        })

        return this
    }

    #applyOptions(options: Record<string, IParserParameters>, obj: AbstractFigure) {
        Object.keys(options).forEach((key) => {
            switch (key) {
                case 'w':
                    obj.lineWidth(options[key].value as number)
                    break
                case 'ultrathin':
                    obj.lineWidth(0.5)
                    break
                case 'thin':
                    obj.lineWidth(0.75)
                    break
                case 'thick':
                    obj.lineWidth(2.5)
                    break
                case 'ultrathick':
                    obj.lineWidth(4)
                    break
                case 'color':
                    obj.color(options[key].value as string)
                    break
                case 'fill':
                    obj.fill(
                        options[key].value as string,
                        options[key].options[0] as number
                    )
                    break
                case 'dash':
                    if (options[key].value === true) {
                        obj.dash(true)
                    } else {
                        obj.dash(options[key].value as number)
                    }
                    break
                case 'dot':
                    obj.dot()
                    break
                case 'mark':
                    obj.mark()
                    break

                // Visibility
                case 'hide':
                case '!':
                    obj.hide()
                    break
                // case '?':
                //     obj.label?.hide()
                //     break

                // Placement
                // case 'move':
                //     obj.move(options[key].value as XY)
                //     break

                // Label and text
                // case 'label':
                // case 'tex':
                //     obj.addLabel(
                //         options[key].value === true ? obj.name : options[key].value as string,
                //         key === 'tex',
                //         this.toTex
                //     )

                //     if (obj.label) {
                //         const alignement = options[key].options[0] === false ? 'br' : options[key].options[0] as LABEL_POSITION
                //         const offsetAsUnits = options[key].options[1] as XY | undefined ?? { x: 0, y: 0 }
                //         const offset = {
                //             x: offsetAsUnits.x * this.config.axis.x.x,
                //             y: -offsetAsUnits.y * this.config.axis.y.y
                //         }

                //         obj.label.position(
                //             alignement,
                //             offset
                //         )
                //     }
                // 
                // break
            }
        })
    }

    #parseKeyCode(key_code: string): string {

        // There are 3 possibilities for the key_code:
        // 1. A(3,4) => id='A', key=POINT, code= ['3','4']
        // 2. d=AB => id='AB', key=LINE, code=['A', 'B']
        // 3. d=<key> <code> => id='d', key='<key>' code

        // Extract the point (no = sign). The id is before the '(' and the code is between '(' and ')'
        if (/^[A-Z][0-9]*\(.*\)$/.exec(key_code)) {
            return this.#parseKeyCodePoint(key_code)
        }

        // Extract the line (with = sign). The id is before the '=' and the code is after '='
        // This is a special version (no spaces) and should be checked first
        if (key_code.includes('=') && !key_code.includes(' ')) {
            return this.#parseKeyCodeLine(key_code)
        }

        return key_code
    }
    // TO BE MOVED TO PI_PARSER
    #parseKeyCodePoint(key_code: string): string {
        // Extract the point (no = sign). The id is before the '(' and the code is between '(' and ')'
        const id = key_code.split('(')[0]
        const code = key_code.split('(')[1].split(')')[0].split(',')
        // const parameters = this.#parseParameters(key_code.split(')')[1])

        return `${id}=pt ` + code.join(',')
    }
    // TO BE MOVED TO PI_PARSER
    #parseKeyCodeLine(key_code: string): string {
        // Extract the line (with = sign). The id is before the '=' and the code is after '='
        const [id, ...datas] = key_code.split('=')
        let data = datas.join('=')

        // Determine the shape of the line
        // vAB => vector AB
        // AB. => segment AB
        // [AB] => segment AB
        // [AB[ => half line AB
        // AB[ => half line AB
        // [AB => half line AB
        // AB => line AB

        // prefix can be v or [ or null
        let prefix: string | null = data[0]
        if (prefix !== 'v' && prefix !== '[') { prefix = null }

        // suffix can be ., ], [ or null
        let suffix: string | null = data[data.length - 1]
        if (suffix !== '.' && suffix !== ']' && suffix !== '[') { suffix = null }

        let shape = 'line'
        if (prefix === 'v' && suffix === null) {
            data = data.slice(1)
            shape = 'vec'
        } else if (
            (prefix === null && suffix === '.') ||
            (prefix === '[' && suffix === ']')
        ) {
            if (prefix === '[') { data = data.slice(1) }
            data = data.slice(0, -1)
            shape = 'seg'
        } else if (
            (prefix === '[' && suffix === '[') ||
            (prefix === null && suffix === '[') ||
            (prefix === '[' && suffix === null)
        ) {
            if (prefix === '[') { data = data.slice(1) }
            if (suffix === '[') { data = data.slice(0, -1) }

            shape = 'ray'
        }

        const code = data.split(/(?=[A-Z])/)

        return `${id}=${shape} ${code[0]},${code[1]}`
    }

}