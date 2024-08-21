import { Pi3Draw } from '../lib';
const { createApp, ref } = Vue;

let draw: Pi3Draw
createApp({
    mounted() {
        draw = new Pi3Draw('root', {
            code: this.code,
            parameters: this.parameters,
        }).mount()

    },
    setup() {
        const parameters = ref('axis,grid')
        const code = ref(`A(5,2,1)
B(-1,-3,6)
C(-2,3,-2)
d1=AB.
d2=AC.
a=arc B,A,C`)

        return {
            parameters,
            code,
            toggle: (value: 'axis' | 'grid') => {
                if (value === 'axis') {
                    draw.toggleAxis()
                } else if (value === 'grid') {
                    draw.toggleGrid()
                }
            },
            refresh: () => {
                draw.refresh(code.value)
            },
            refreshLayout: () => {
                draw.refreshLayout(parameters.value)
            }
        }
    }
}).mount('#app')