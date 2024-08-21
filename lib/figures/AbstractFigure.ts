import * as THREE from 'three'

export interface IFigureAppearance {
    opacity: number,
    color: string,
    width?: number,
    dashed?: boolean | { dashSize: number, gapSize: number }
    borderColor?: string,

}

export abstract class AbstractFigure {
    #scene: THREE.Scene
    #name: string
    #color = 'black'
    #mesh: THREE.Mesh | THREE.Group
    #label: unknown
    #appearance: IFigureAppearance

    constructor(scene: THREE.Scene, name: string) {
        this.#scene = scene
        this.#name = name

        this.#appearance = {
            opacity: 1,
            color: '#000000'
        }
    }

    get scene() {
        return this.#scene
    }
    set scene(scene: THREE.Scene) {
        this.#scene = scene
    }
    get name() {
        return this.#name
    }
    set name(name: string) {
        this.#name = name
    }
    get appearance() {
        return this.#appearance
    }
    set appearance(appearance: IFigureAppearance) {
        this.#appearance = appearance
    }

    get color() {
        return this.#color
    }
    set color(color: string) {
        this.#color = color
    }
    get mesh() {
        return this.#mesh
    }
    set mesh(mesh: THREE.Mesh | THREE.Group) {
        this.#mesh = mesh
    }
    get label() {
        return this.#label
    }
    set label(label: unknown) {
        this.#label = label
    }

    abstract computed(): void

    update(): this {
        // Update the mesh
        this.computed()

        // Update the label
        // TODO: Implement update label
        // this.updateLabel()

        return this
    }
}