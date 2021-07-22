import Card from './Card'

export default {
    title: 'Components/Card',
    component: Card,
    decorators: [stories => <div class="ui cards">{stories()}</div>]
}

const Template = args => <Card {...args} />

export const AddFriendCard = Template.bind({})

AddFriendCard.storyName = "Card for friend request"
AddFriendCard.args = {
    name: "Elliot Fu",
    description: "Elliot Fu is a film-maker from New York."
}
