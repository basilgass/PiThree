import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/Addons.js'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { LineGeometry } from 'three/addons/lines/LineGeometry.js'

import { AbstractFigure, IFigureAppearance } from "./AbstractFigure"

export interface ILineConfig {
    type: 'line' | 'segment' | 'vector' | 'ray',
    arrow?: {
        width: number,
        length: number
    }
    through?: {
        A: THREE.Vector3, // A: XYZ
        B: THREE.Vector3, // B: XYZ
    },
    plane?: {
        point: THREE.Vector3, // XYZ
        normal: THREE.Vector3, // XYZ
    },
    parallel?: {
        point: THREE.Vector3, // XYZ,
        direction: THREE.Vector3, // XYZ
    },
    appearance?: IFigureAppearance
}
export class Line extends AbstractFigure {
    #config: ILineConfig
    #A: THREE.Vector3 // XYZ
    #B: THREE.Vector3 // XYZ
    #arrow: THREE.Mesh

    constructor(scene: THREE.Scene, name: string, config: ILineConfig) {
        super(scene, name)

        this.#A = new THREE.Vector3(0, 0, 0)
        this.#B = new THREE.Vector3(0, 0, 1)

        this.#config = Object.assign({
            type: 'line'
        }, config)

        this.appearance = Object.assign(
            {
                color: 'black',
                width: 1,
                dashed: false
            }, config.appearance)

        this.#makeShape()

        return this
    }

    get A(): THREE.Vector3 {
        return this.#A
    }
    get B(): THREE.Vector3 {
        return this.#B
    }
    get direction(): THREE.Vector3 {
        return this.B.clone().sub(this.A).normalize()
    }
    get config(): ILineConfig {
        return this.#config
    }

    get line(): Line2 {
        return this.mesh as Line2
    }

    get math(): THREE.Line3 {
        return new THREE.Line3(this.A, this.B)
    }

    #makeShape() {

        // Create a "fat" line
        const lineGeometry = new LineGeometry()

        // Create the material
        const lineMaterial = new LineMaterial({
            color: this.appearance.color,
            linewidth: this.appearance.width,
            vertexColors: false,
            dashed: this.appearance.dashed ? true : false,
            alphaToCoverage: true
        })

        // Create the mesh
        this.mesh = new Line2(lineGeometry, lineMaterial)
        this.mesh.scale.set(1, 1, 1)

        // Add a mark to the mesh (and hide it by default)
        if (this.#config.type === 'vector') {
            this.#makeArrow()
        }

        // Add to the scne.
        this.scene.add(this.mesh)

        // Compute the line position.
        this.computed()

    }

    #makeArrow() {
        const arrowConfig = Object.assign({
            width: .2,
            length: .6
        }, this.#config.arrow)

        this.#arrow = new THREE.Mesh(
            new
                THREE.ConeGeometry(
                    arrowConfig.width,
                    arrowConfig.length,
                    16
                ),
            new THREE.MeshBasicMaterial({ color: this.appearance.color })
        )

        this.mesh.add(this.#arrow)
    }

    computed(): void {
        const type = this.#config.type
        const P1 = new THREE.Vector3()
        const P2 = new THREE.Vector3()

        if (this.config.through) {
            P1.set(this.config.through.A.x, this.config.through.A.y, this.config.through.A.z)
            P2.set(this.config.through.B.x, this.config.through.B.y, this.config.through.B.z)
        } else if (this.config.plane) {
            const normal = this.config.plane.normal
            P1.set(this.config.plane.point.x, this.config.plane.point.y, this.config.plane.point.z)
            P2.set(P1.x + normal.x, P1.y + normal.y, P1.z + normal.z)
        } else if (this.config.parallel) {
            const direction = this.config.parallel.direction
            P1.set(this.config.parallel.point.x, this.config.parallel.point.y, this.config.parallel.point.z)
            P2.set(P1.x + direction.x, P1.y + direction.y, P1.z + direction.z)
        }

        // Store the current points
        this.#A = P1.clone()
        this.#B = P2.clone()

        // Depending on the type of line, we need to set the points differently
        if (type === 'ray') {
            P2.sub(P1).normalize().multiplyScalar(1000)
        }

        if (type === 'line') {
            const d = P2.clone().sub(P1).normalize().multiplyScalar(1000)
            P1.sub(d)
            P2.add(d)

            // Move the line to the correct place
            // lineGeometry.translate(pt1.x, pt1.y, pt1.z)
        }

        if (type === 'vector') {
            // Check that the arrow is created
            if (!this.#arrow) { this.#makeArrow() }

            // Get the length of the arrow head
            const length = this.#config.arrow?.length ?? .6


            this.#arrow.translateX(this.B.x)
            this.#arrow.translateY(this.B.y)
            this.#arrow.translateZ(this.B.z)
            this.#arrow.translateOnAxis(this.direction, -length / 2)
            this.#arrow.quaternion.setFromUnitVectors(
                new THREE.Vector3(0, 1, 0),
                this.direction
            )
        }


        // Update the mesh geometry
        this.line.geometry.setPositions([P1.x, P1.y, P1.z, P2.x, P2.y, P2.z])

        // Compute the line distance
        this.line.computeLineDistances()
    }
}