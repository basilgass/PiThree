import * as THREE from 'three'
import { Line2 } from 'three/examples/jsm/Addons.js'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { LineGeometry } from 'three/addons/lines/LineGeometry.js'

import { AbstractFigure, IFigureAppearance } from "./AbstractFigure"

export interface IArcConfig {
    radius: number | THREE.Vector3,
    start: THREE.Vector3, // A: XYZ
    center: THREE.Vector3,
    end: THREE.Vector3, // B: XYZ
    mark?: boolean
    appearance?: IFigureAppearance
    arrow?: {
        width: number,
        length: number
    }

}
export class Arc extends AbstractFigure {
    #config: IArcConfig
    #AB: THREE.Vector3
    #AC: THREE.Vector3
    #arrow: THREE.Mesh | undefined
    #line: Line2
    #curve: THREE.EllipseCurve

    constructor(scene: THREE.Scene, name: string, config: IArcConfig) {
        super(scene, name)

        this.#config = Object.assign({}, config)

        this.#AB = this.#config.start.clone().sub(this.#config.center)
        this.#AC = this.#config.end.clone().sub(this.#config.center)


        this.appearance = Object.assign(
            {
                color: 'black',
                width: 1,
                dashed: false
            }, config.appearance)

        this.#makeShape()

        return this
    }

    get start(): THREE.Vector3 {
        return this.#config.start
    }
    get end(): THREE.Vector3 {
        return this.#config.end
    }
    get center(): THREE.Vector3 {
        return this.#config.center
    }
    get config(): IArcConfig {
        return this.#config
    }
    get AB(): THREE.Vector3 {
        return this.#AB
    }
    get AC(): THREE.Vector3 {
        return this.#AC
    }

    get angle(): number {
        return this.#AB.angleTo(this.#AC)
    }
    get radius(): number {
        if (this.#config.radius instanceof THREE.Vector3) {
            return this.#config.radius.clone().sub(this.#config.center).length()
        }

        if (isNaN(this.#config.radius) || this.#config.radius <= 0) { return 1 }
        return this.#config.radius
    }

    get line(): Line2 {
        return this.#line
    }

    get arrow(): THREE.Mesh | undefined {
        return this.#arrow
    }

    #makeShape() {

        // Create a "fat" line
        const lineGeometry = new LineGeometry()

        // Create the array of points on the curve
        this.#curve = new THREE.EllipseCurve(0, 0, this.radius, this.radius, 0, this.angle, false, 0)
        const positions: number[] = []
        this.#curve.getPoints(50).forEach(pt => {
            positions.push(pt.x, pt.y, 0)
        })
        lineGeometry.setPositions(positions)

        // Create the material
        const lineMaterial = new LineMaterial({
            color: this.appearance.color,
            linewidth: this.appearance.width,
            vertexColors: false,
            dashed: this.appearance.dashed ? true : false,
            alphaToCoverage: true
        })

        this.mesh = new THREE.Group()
        this.#line = new Line2(lineGeometry, lineMaterial)

        this.mesh.add(this.#line)
        this.#makeArrow()

        // this.mesh = new Line2(lineGeometry, lineMaterial)

        // Add to the scene.
        this.scene.add(this.mesh)

        // Compute the line position.
        this.computed()

    }

    #makeArrow() {
        const arrowConfig = Object.assign({
            width: .05,
            length: .2
        }, this.#config.arrow)

        this.#arrow = new THREE.Mesh(
            new
                THREE.ConeGeometry(
                    arrowConfig.width,
                    arrowConfig.length,
                    16
                ),
            new THREE.MeshBasicMaterial({
                color: this.appearance.color,
                // transparent: true,
                // opacity: 0.4
            })
        )

        this.#arrow.position.set(this.#curve.getPoint(1).x, this.#curve.getPoint(1).y, 0)
        const length = this.#curve.getLength()
        const ratio = (length - arrowConfig.length / 2) / length
        // Rotate the cone to the direction of the arc
        const tangent = this.#curve.getTangent(ratio)
        this.#arrow.translateX(-tangent.x * arrowConfig.length / 2)
        this.#arrow.translateY(-tangent.y * arrowConfig.length / 2)
        this.#arrow.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(tangent.x, tangent.y, 0)
        )

        this.mesh.add(this.#arrow)

        this.#arrow.visible = this.#config.mark === true
    }

    computed(): void {
        // Move the arc mesh to the center of the arc
        this.mesh.position.set(this.center.x, this.center.y, this.center.z)

        // Align the arc to the plane
        this.mesh.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 0, 1),
            this.AB.clone().cross(this.AC).normalize()
        )

        // Get the starting point of the arc mesh, in the world coordinate
        const startV2 = this.#curve.getPoint(0)
        const start = new THREE.Vector3(startV2.x, startV2.y, 0)
        this.mesh.localToWorld(start)

        this.mesh.rotateZ(this.AB.angleTo(start.clone().sub(this.center)))

        // Compute the line distance
        this.line.computeLineDistances()
    }
}