import Loader from './Loader'

export default {
    title: 'Components/Loader',
    component: Loader
}

const Template = args => <Loader {...args} />

export const Small = Template.bind({})
Small.storyName = "Small loader"
Small.args = {
    size: "small"
}

export const Medium = Template.bind({})
Medium.storyName = "Medium loader"
Medium.args = {
    size: "medium"
}

export const Large = Template.bind({})
Large.storyName = "Large loader"
Large.args = {
    size: "large"
}

export const DoubleLoader = Template.bind({})
DoubleLoader.storyName = "Double loader"
DoubleLoader.args = {
    size: "medium",
    isDoubleLoader: true
}
