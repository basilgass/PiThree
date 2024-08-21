import * as THREE from 'three'
import { Line2, LineMaterial } from 'three/examples/jsm/Addons.js'

export interface IFigureAppearance {
    opacity: number,
    color: string,
    width?: number,
    dashed?: boolean | number
    borderColor?: string,

}

export abstract class AbstractFigure {
    #scene: THREE.Scene
    #name: string
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
    get mesh() {
        return this.#mesh
    }
    set mesh(mesh: THREE.Mesh | THREE.Group) {
        this.#mesh = mesh
    }
    get line(): Line2 | undefined {
        return undefined
    }
    get label() {
        return this.#label
    }
    set label(label: unknown) {
        this.#label = label
    }
    get arrow(): THREE.Mesh | undefined {
        return undefined
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

    color(color: string): this {
        this.#mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                const material = child.material as THREE.MeshBasicMaterial
                material.color.set(color)
            }
        })

        return this
    }
    dash(dash: boolean | number): this {
        this.#mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                if (this.line === undefined) { return }
                const material = child.material as LineMaterial
                material.dashed = dash ? true : false

                if (typeof dash !== 'boolean') {
                    material.dashScale = dash
                }

                // Compute the line length
                this.line.computeLineDistances()
            }
        })
        return this
    }

    dot(): this {
        return this.dash(10)
    }

    mark(): this {
        if (this.line === undefined) { return this }

        if (this.arrow === undefined) { return this }

        this.arrow.visible = true

        return this
    }

    lineWidth(width: number): this {
        this.#mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                if (this.line === undefined) { return }

                const material = child.material as LineMaterial
                material.linewidth = width
            }
        })
        return this
    }

    fill(color: string, opacity?: number): this {

        if (opacity === undefined) { opacity = this.#appearance.opacity }

        this.#mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                const material = child.material as THREE.MeshBasicMaterial
                material.color.set(color)
                material.opacity = opacity
            }
        })
        return this
    }

    hide(): this {
        this.#mesh.visible = false
        return this
    }
}