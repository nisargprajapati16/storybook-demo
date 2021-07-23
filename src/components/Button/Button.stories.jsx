import Button from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { 
                type: "select", 
                options: ["primary", "secondary", "green", "red"]
            }
        }
    }
}

const Template = ({ btnText, ...args }) => <Button {...args}>{btnText}</Button>

export const Primary = Template.bind({})
Primary.args = {
    variant: "primary",
    btnText: "Primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: "secondary",
    btnText: "Secondary"
}

export const Success = Template.bind({})
Success.args = {
    variant: "green",
    btnText: "Success"
}

export const Danger = Template.bind({})
Danger.args = {
    variant: "red",
    btnText: "Danger"
}
