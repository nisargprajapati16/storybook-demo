import Button from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="green">Success</Button>
export const Danger = () => <Button variant="red">Danger</Button>
