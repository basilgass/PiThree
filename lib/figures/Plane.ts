import { AbstractFigure, IFigureAppearance } from "./AbstractFigure"

import * as THREE from 'three'

interface IPlaneShape {
    rotate: number,
    width: number,
    height: number,
}
export interface IPlaneConfig {
    shape?: IPlaneShape
    through?: {
        A: THREE.Vector3,
        B: THREE.Vector3,
        C: THREE.Vector3
    },
    fromLine?: {
        line: {
            A: THREE.Vector3,
            direction: THREE.Vector3
        },
        point: THREE.Vector3,
    },
    equation?: string,
    appearance?: IFigureAppearance
}

export class Plane extends AbstractFigure {
    #shape: IPlaneShape
    #config: IPlaneConfig
    constructor(scene: THREE.Scene, name: string, config: IPlaneConfig) {
        super(scene, name)

        // Global config file
        this.#config = config

        // Shape of the plane with default values
        this.#shape = Object.assign({
            rotate: 0,
            width: 10,
            height: 10
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

    get width() {
        return this.#shape.width
    }
    set width(width: number) {
        this.#shape.width = width
    }
    get height() {
        return this.#shape.height
    }
    set height(height: number) {
        this.#shape.height = height
    }

    #makeMesh(): void {
        const geom = new THREE.PlaneGeometry(this.width, this.height)
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
        const plane = new THREE.Plane()
        const position = new THREE.Vector3()

        console.log(this.#config)
        if (this.#config.equation) {
            // It's an equation of the plane: ax+by+cz+d=0
            // a, b, c, d : number | "numerator/denominator"
            // Parse the equation to get a, b, c, d
            // 1. split the equation by '='
            // 2. split the right side by '+' or "-"
            // 3. foreach element and assign to a, b, c, d
            const [left] = this.#config.equation.split('=')
            const items = left.split(/(?=[+|-])/)
            let a = 0, b = 0, c = 0, d = 0
            items.forEach(item => {
                if (item.includes('x')) {
                    a = (item === 'x' || item === '+x') ? 1
                        : item === '-x' ? -1
                            : Number(item.replace('x', ''))
                } else if (item.includes('y')) {
                    b = (item === 'y' || item === '+y') ? 1
                        : (item === '-y') ? -1
                            : Number(item.replace('y', ''))
                } else if (item.includes('z')) {
                    c = (item === 'z' || item === '+z') ? 1
                        : (item === '-z') ? -1
                            : Number(item.replace('z', ''))
                } else {
                    d = Number(item)
                }
            })
            console.log(a, b, c, d)
            const normal = new THREE.Vector3(a, b, c)
            plane.setFromNormalAndCoplanarPoint(normal, new THREE.Vector3(0, 0, -d / c))
            position.set(0, 0, -d / c)


        } else if (this.#config.through?.A && this.#config.through.B && this.#config.through.C) {
            // It's a three points
            const pt1 = new THREE.Vector3(this.#config.through.A.x, this.#config.through.A.y, this.#config.through.A.z)
            const pt2 = new THREE.Vector3(this.#config.through.B.x, this.#config.through.B.y, this.#config.through.B.z)
            const pt3 = new THREE.Vector3(this.#config.through.C.x, this.#config.through.C.y, this.#config.through.C.z)
            plane.setFromCoplanarPoints(pt1, pt2, pt3)

            position.set(
                (pt1.x + pt2.x + pt3.x) / 3,
                (pt1.y + pt2.y + pt3.y) / 3,
                (pt1.z + pt2.z + pt3.z) / 3,
            )
        } else if (this.#config.fromLine?.line && this.#config.fromLine.point) {
            const A = new THREE.Vector3(this.#config.fromLine.line.A.x, this.#config.fromLine.line.A.y, this.#config.fromLine.line.A.z)
            const direction = new THREE.Vector3(this.#config.fromLine.line.direction.x, this.#config.fromLine.line.direction.y, this.#config.fromLine.line.direction.z)

            const line = new THREE.Line3(
                A,
                A.clone().add(direction)
            )

            const normal = new THREE.Vector3()
            line.delta(normal).normalize()
            plane.setFromNormalAndCoplanarPoint(
                normal,
                new THREE.Vector3(this.#config.fromLine.point.x, this.#config.fromLine.point.y, this.#config.fromLine.point.z)
            )
            position.set(
                this.#config.fromLine.point.x,
                this.#config.fromLine.point.y,
                this.#config.fromLine.point.z
            )
        }

        this.mesh.position.set(position.x, position.y, position.z)
        this.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), plane.normal)
        if (this.#shape.rotate > 0) { this.mesh.rotateZ(this.#shape.rotate * Math.PI / 180) }
    }
}