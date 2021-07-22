import { Fragment } from 'react'
import { Primary } from '../Button/Button.stories'
import { Medium } from '../Input/Input.stories'


export default {
    title: "Components/Subscriptions"
}

export const PrimarySubscription = () => (
    <Fragment>
        <Medium />
        <Primary />
    </Fragment>
)