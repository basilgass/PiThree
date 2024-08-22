import * as THREE from "three"
import { CSS2DObject } from "three/examples/jsm/Addons.js"
import { AbstractFigure } from "./AbstractFigure"
import { TeXConverterType } from "../pithree.types"


interface ILabelConfig {
    content?: string,
    asTeX?: boolean,
    converter: TeXConverterType
}
export class Label {
    #parent: THREE.Mesh | THREE.Group
    #config: ILabelConfig
    #mesh: CSS2DObject
    constructor(obj: AbstractFigure, config: ILabelConfig) {

        this.#parent = obj.mesh
        this.#config = config

        this.#mesh = new CSS2DObject(document.createElement('div'))
        this.#parent.add(this.#mesh)

        if (config.asTeX) {
            this.#updateTex(this.text)
        } else {
            this.#updateLabel(this.text)
        }
    }

    get mesh() {
        return this.#mesh
    }
    get text() {
        return this.#config.content ?? this.#parent.name
    }

    update(value: string, asTeX?: boolean): this {
        this.#config.content = value
        if (asTeX !== undefined) {
            this.#config.asTeX = asTeX
        }

        if (this.#config.asTeX) {
            this.#updateTex(value)
        } else {
            this.#updateLabel(value)
        }

        return this
    }



    #updateLabel(value: string) {
        this.#mesh.element.textContent = value
        this.#mesh.element.style.textAlign = 'center'
        this.#mesh.center.set(0, 0)

    }

    #updateTex(value: string) {
        // Maybe there are some texts to display
        this.#mesh.element.innerHTML = this.#config.converter(value)
        this.#mesh.element.classList.add('katex-m-0')
        this.#mesh.center.set(0, 1)
    }
}