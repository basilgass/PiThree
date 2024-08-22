import { Pi3Draw } from '../lib';
const { createApp, ref } = Vue;

let draw: Pi3Draw
createApp({
    mounted() {
        draw = new Pi3Draw('root', {
            code: this.code,
            parameters: this.parameters,
            converter: (value: string): string => katex.renderToString(value)
        }).mount()

    },
    setup() {
        const parameters = ref('axis,grid')
        const code = ref(`A(7,2,1)
B(-1,-3,6)
C(-2,3,-2)
d1=AB.->dash
d2=AC.->dash
a=arc B,A,C
p=plane A,B,C->fill=red/0.1
D(3,8,7)
P1=proj D,d2->color=blue
P2=proj D,p->color=red
`)

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
                draw.refresh(code.value)
            }
        }
    }
}).mount('#app')