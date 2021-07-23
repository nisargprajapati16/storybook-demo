import Input from './Input'

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        size: {
            control: { 
                type: "select", 
                options: ["small", "medium", "large"]
            }
        }
    }
}

const Template = args => <Input {...args} />

export const Small = Template.bind({})
Small.storyName = "Small input"
Small.args = {
    size: "small",
    placeholder: "Small"
}

export const Medium = Template.bind({})
Medium.storyName = "Medium input"
Medium.args = {
    size: "medium",
    placeholder: "Medium"
}

export const Large = Template.bind({})
Large.storyName = "Large input"
Large.args = {
    size: "large",
    placeholder: "Large"
}
