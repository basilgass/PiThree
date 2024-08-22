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
        const code = ref('')

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
            updateCode: (value: string) => {
                if (value === 'x') {
                    code.value = `p1=plane x-2=0->fill=red/0.1
p2=plane y-3=0->fill=blue/0.1
p3=plane z-4=0->fill=green/0.1`
                } else if (value === 'xy') {
                    code.value = `p1=plane x+y-1=0->fill=red/0.1
A(1,0,0)
B(0,1,0)
B(.5,.5,4)`
                } else if (value === 'xyz') {
                    code.value = `p1=plane x+y+z-5=0,20,20->fill=red/0.1
A(2,2,1)
B(0,0,5)
C(0,5,0)
D(5,0,0)`
                }

                draw.refresh(code.value)
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