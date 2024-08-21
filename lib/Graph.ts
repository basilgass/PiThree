import * as THREE from 'three'
import { CSS2DRenderer, OrbitControls } from 'three/examples/jsm/Addons.js'
import { IPointConfig, Point } from './figures/Point'
import { ILineConfig, Line } from './figures/Line'
import { IPlaneConfig, Plane } from './figures/Plane'
import { IGraphConfig, IGraphConstructorConfig } from './pithree.types'
import { AbstractFigure } from './figures/AbstractFigure'
import { Arc, IArcConfig } from './figures/Arc'

type createConfig = (config: any, name: string) => AbstractFigure


export class Graph {
    #container: HTMLElement
    #config: IGraphConfig
    #renderer: THREE.WebGLRenderer
    #css2DRenderer: CSS2DRenderer
    #controls: OrbitControls
    #camera: THREE.PerspectiveCamera
    #scene: THREE.Scene
    #figures: Record<string, AbstractFigure>

    constructor(id: string | HTMLElement, config?: IGraphConstructorConfig) {

        let wrapper: HTMLElement | null
        if (typeof id === 'string') {
            wrapper = document.getElementById(id)
            if (!wrapper) {
                throw new Error('Container not found')
            }
        } else {
            wrapper = id
        }

        this.#container = document.createElement('div')
        this.#container.style.width = '100%'
        this.#container.style.height = '100%'
        this.#container.style.position = 'relative'
        this.#container.style.overflow = 'hidden'
        wrapper.appendChild(this.#container)

        this.#figures = {}
        this.#config = Object.assign({
            backgroundColor: '#ffffff'
        }, config)

        // Create canvas and initialize:
        // 1. Create renderer, css2renderer, camera, scene, controls
        this.#createCanvas()

        // 2. Create grid and axis
        if (config?.grid) { this.#sceneGrid() }
        if (config?.axis) { this.#sceneAxis() }

    }

    get container() {
        return this.#container
    }
    get config() {
        return this.#config
    }
    get figures() {
        return this.#figures
    }

    get renderer() {
        return this.#renderer
    }
    get css2DRenderer() {
        return this.#css2DRenderer
    }
    get controls() {
        return this.#controls
    }
    get camera() {
        return this.#camera
    }
    get scene() {
        return this.#scene
    }

    #createCanvas() {
        this.#renderer = new THREE.WebGLRenderer({
            antialias: true
        })
        this.#css2DRenderer = new CSS2DRenderer()
        this.#css2DRenderer.domElement.style.position = 'absolute'
        this.#css2DRenderer.domElement.style.top = '0px'

        // 2. Configurer le rendu et l'ajouter au conteneur
        this.#renderer.setClearColor(this.#config.backgroundColor)
        this.#camera = new THREE.PerspectiveCamera(20, 1, 0.1, 2000)
        this.#camera.up.set(0, 0, 1)
        this.#camera.lookAt(0, 0, 0)
        this.#camera.position.set(25, 15, 30)

        this.#controls = new OrbitControls(
            this.#camera,
            this.#css2DRenderer.domElement
        )
        this.#controls.minDistance = 5
        this.#controls.maxDistance = 500
        this.#controls.enablePan = true
        this.#controls.enableDamping = true
        this.#controls.dampingFactor = 0.05

        this.#scene = new THREE.Scene()
    }

    #sceneGrid(grid = { size: 20, division: 20, color1: 0xdddddd, color2: 0xeeeeee }) {
        const gridXY = new THREE.GridHelper(grid.size, grid.division, grid.color1, grid.color2) // Taille 10, divisions 10, couleur noir
        gridXY.name = 'gridXY'
        gridXY.rotation.x = Math.PI / 2
        gridXY.position.set(grid.size / 2, grid.size / 2, 0) // Positionner à z = 0 pour éviter l'interférence visuelle
        this.#scene.add(gridXY)

        // 2. GridHelper pour le plan YZ (mur)
        const gridYZ = new THREE.GridHelper(grid.size, grid.division, grid.color1, grid.color2)
        gridYZ.name = 'gridYZ'
        gridYZ.position.set(0, grid.size / 2, grid.size / 2) // Positionner à z = -size/2 pour éviter l'interférence visuelle
        gridYZ.rotation.z = Math.PI / 2 // Faire pivoter pour qu'il soit parallèle au plan YZ
        this.#scene.add(gridYZ)

        // 3. GridHelper pour le plan XZ (paroi)
        const gridXZ = new THREE.GridHelper(grid.size, grid.division, grid.color1, grid.color2)
        gridXZ.name = 'gridXZ'
        gridXZ.position.set(grid.size / 2, 0, grid.size / 2) // Positionner à y = -5 pour éviter l'interférence visuelle
        this.#scene.add(gridXZ)
    }

    #sceneAxis(axis = { length: 5, headLength: 0.4, headWidth: 0.2, color: undefined }) {
        const xAxis = new THREE.ArrowHelper(
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(0, 0, 0),
            axis.length,
            axis.color ?? 0xff0000,
            axis.headLength,
            axis.headWidth
        ) // Axe X en rouge
        xAxis.name = 'axisX'

        const yAxis = new THREE.ArrowHelper(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(0, 0, 0),
            axis.length,
            axis.color ?? 0x00ff00,
            axis.headLength,
            axis.headWidth
        ) // Axe Y en vert
        yAxis.name = 'axisY'

        const zAxis = new THREE.ArrowHelper(
            new THREE.Vector3(0, 0, 1),
            new THREE.Vector3(0, 0, 0),
            axis.length,
            axis.color ?? 0x0000ff,
            axis.headLength,
            axis.headWidth
        ) // Axe Z en bleu
        zAxis.name = 'axisZ'

        this.#scene.add(xAxis)
        this.#scene.add(yAxis)
        this.#scene.add(zAxis)
    }


    get create(): Record<string, createConfig> {
        return {
            point: (config: IPointConfig, name: string) => {
                const pt = new Point(this.#scene, name, config)
                this.figures[name] = pt
                return pt
            },
            line: (config: ILineConfig, name: string) => {
                const line = new Line(this.#scene, name, config)
                this.figures[name] = line
                return line
            },
            plane: (config: IPlaneConfig, name: string) => {
                const plane = new Plane(this.#scene, name, config)
                this.figures[name] = plane
                return plane
            },
            arc: (config: IArcConfig, name: string) => {
                const arc = new Arc(this.#scene, name, config)
                this.figures[name] = arc
                return arc
            }
        }
    }

    #animate() {
        this.#controls.update()
        this.#renderer.render(this.#scene, this.#camera)
        this.#css2DRenderer.render(this.#scene, this.#camera)
    }

    public mount(): this {
        this.#container.appendChild(this.#renderer.domElement)
        this.#container.appendChild(this.#css2DRenderer.domElement)

        // Animation
        this.#renderer.setAnimationLoop(() => {
            this.#animate()
        })

        this.onResize()
        return this
    }

    public onResize(): this {
        // Update the renderer size
        const width = this.#container.clientWidth
        const height = this.#container.clientHeight
        this.#renderer.setSize(width, height)
        this.#css2DRenderer.setSize(width, height)

        // Update the camera aspect
        this.#camera.aspect = width / height
        this.#camera.updateProjectionMatrix()

        return this
    }

    public toggleGrid(value?: boolean) {
        const gridXY = this.#scene.getObjectByName('gridXY')
        const gridYZ = this.#scene.getObjectByName('gridYZ')
        const gridXZ = this.#scene.getObjectByName('gridXZ')

        // Default value.
        if (value === undefined) {
            if (gridXY && gridYZ && gridXZ) {
                value = !gridXY.visible
            } else {
                value = false
            }
        }

        if (gridXY && gridYZ && gridXZ) {
            gridXY.visible = value
            gridYZ.visible = value
            gridXZ.visible = value
        } else if (value) {
            this.#sceneGrid()
        }
    }

    public toggleAxis(value?: boolean) {
        const axisX = this.#scene.getObjectByName('axisX')
        const axisY = this.#scene.getObjectByName('axisY')
        const axisZ = this.#scene.getObjectByName('axisZ')

        // Default value.
        if (value === undefined) {
            if (axisX && axisY && axisZ) {
                value = !axisX.visible
            } else {
                value = false
            }
        }


        if (axisX && axisY && axisZ) {
            axisX.visible = value
            axisY.visible = value
            axisZ.visible = value
        } else if (value) {
            this.#sceneAxis()
        }
    }


    public clear() {
        Object.keys(this.figures).forEach((name) => {
            // Remove the mesh from the scene.
            this.scene.remove(this.figures[name].mesh)
        })

        this.#figures = {}
    }

    public updateLayout(): this {
        return this
    }
    public update(): this {
        Object.keys(this.figures)
            .forEach((key) => {
                this.figures[key].update()
            })

        return this
    }
}