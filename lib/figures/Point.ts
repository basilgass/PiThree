import * as THREE from 'three'
import { AbstractFigure } from './AbstractFigure'

export interface IPointConfig {
    coordinates: { x: number, y: number, z: number },
    color?: string,
    size?: number
}

export class Point extends AbstractFigure {
    #x = 0
    #y = 0
    #z = 0
    #config: IPointConfig
    constructor(scene: THREE.Scene, name: string, config: IPointConfig) {
        super(scene, name)

        if (config.color) {
            this.appearance.color = config.color
        }

        this.#config = config


        this.#makeMesh()

        return this
    }

    get v3(): THREE.Vector3 {
        return new THREE.Vector3(this.#x, this.#y, this.#z)
    }

    get x() {
        return this.#x
    }
    set x(x: number) {
        this.#x = x
    }
    get y() {
        return this.#y
    }
    set y(y: number) {
        this.#y = y
    }
    get z() {
        return this.#z
    }
    set z(z: number) {
        this.#z = z
    }
    get config() {
        return this.#config
    }

    #makeMesh(): void {
        const geometry = new THREE.SphereGeometry(0.07, 16, 16)
        const material = new THREE.MeshBasicMaterial({ color: this.appearance.color })
        this.mesh = new THREE.Mesh(geometry, material)

        this.scene.add(this.mesh)

        this.computed()
    }

    computed(): void {
        if (this.config.coordinates) {
            this.#x = this.config.coordinates.x
            this.#y = this.config.coordinates.y
            this.#z = this.config.coordinates.z
        }

        this.mesh.position.set(this.#x, this.#y, this.#z)

        if (this.config.size && this.config.size > 0) {
            this.mesh.scale.set(this.config.size, this.config.size, this.config.size)
        }
    }


}