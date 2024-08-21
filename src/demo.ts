import { Pi3Graph } from '../lib';
const { createApp, ref } = Vue;

let draw: Pi3Graph
createApp({
    mounted() {
        draw = new Pi3Graph('root', {
            axis: true,
            grid: true
        }).mount()

        const A = draw.create.point(
            { coordinates: { x: 3, y: 1, z: 1 } },
            'point1'
        )
        A.mesh.material['color'].set('red')

        const B = draw.create.point(
            { coordinates: { x: 1, y: 3, z: 4 } },
            'point2'
        )
        const C = draw.create.point(
            { coordinates: { x: 4, y: 2, z: 8 } },
            'point3'
        )

        const l = draw.create.line(
            {
                through: { A, B },
                appearance: { type: 'ray', color: 'purple' }
            },
            'line1'
        )

        const p = draw.create.plane(
            {
                through: { A, B, C },
            },
            'plane1'
        )
        const p2 = draw.create.plane(
            {
                fromLine: { line: l, point: A },
                appearance: { color: 'green' }
            },
            'plane2'
        )
        const p3 = draw.create.plane(
            {
                equation: 'x-y+z=0',
                appearance: { color: 'pink' }
            },
            'plane3'
        )
    },
    setup() {
        return {
            message: ref('Hello vue!'),
            toggle(value: 'axis' | 'grid') {
                if (value === 'axis') {
                    draw.toggleAxis()
                } else if (value === 'grid') {
                    draw.toggleGrid()
                }
            }
        }
    }
}).mount('#app')