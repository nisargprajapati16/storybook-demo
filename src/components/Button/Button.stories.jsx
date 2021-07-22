import Center from '../Center/Center'
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
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>


const Template = args => <Button {...args} />

export const PrimaryArg = Template.bind({})
PrimaryArg.args = {
    variant: "primary",
    children: "Primary Arg"
}

export const LongPrimaryArg = Template.bind({})
LongPrimaryArg.args = {
    ...PrimaryArg.args,
    children: "Long Primary Arg"
}