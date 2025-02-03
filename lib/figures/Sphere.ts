import {AbstractFigure, IFigureAppearance} from "./AbstractFigure"

import * as THREE from 'three'
import {Point} from "./Point.ts";

interface ISphereShape {
    segments: {
        width: number,
        height: number
    },
}

export interface ISphereConfig {
    shape?: ISphereShape,
    centerRadius?: {
        center: THREE.Vector3,
        radius: number
    },
    appearance?: IFigureAppearance
}

export class Sphere extends AbstractFigure {
    #shape: ISphereShape
    #config: ISphereConfig
    #sphere: THREE.Sphere

    constructor(scene: THREE.Scene, name: string, config: ISphereConfig) {
        super(scene, name)

        // Global config file
        this.#config = config

        this.#sphere = new THREE.Sphere(
            new THREE.Vector3, 1
        )

        // Shape of the plane with default values
        this.#shape = Object.assign({
            segments: {
                width: 16,
                height: 16
            },
        }, config.shape)

        // Appearance of the plane with default values
        this.appearance = Object.assign(
            {
                opacity: 0.8,
                color: 'lightblue'
            }, config.appearance)

        // Create the mesh
        this.#makeMesh()

        return this
    }

    get center(): THREE.Vector3 {
        return this.#sphere.center
    }

    get radius(): number {
        return this.#sphere.radius
    }

    get math(): THREE.Sphere {
        return this.#sphere
    }

    #makeMesh(): void {
        const geom = new THREE.SphereGeometry(1,this.#config.shape?.segments.width ?? 16, this.#config.shape?.segments.height ?? 16)
        const material = new THREE.MeshBasicMaterial({
            color: this.appearance.color,
            side: THREE.DoubleSide,
            wireframe: false,
            transparent: true,
            opacity: this.appearance.opacity,
        })
        this.mesh = new THREE.Mesh(geom, material)
        this.scene.add(this.mesh)

        this.computed()
    }

    computed(): void {
        if (this.#config.centerRadius) {
            const center = new THREE.Vector3(
                this.#config.centerRadius.center.x,
                this.#config.centerRadius.center.y,
                this.#config.centerRadius.center.z,
            )
            const radius = this.#config.centerRadius.radius

            this.mesh.position.set(center.x, center.y, center.z)
            this.mesh.scale.set(radius, radius, radius)
        }
    }
}