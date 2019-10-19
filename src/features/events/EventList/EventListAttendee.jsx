import React, { Component } from '../../../../node_modules/react'
import { List, Image } from '../../../../node_modules/semantic-ui-react'

export default class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props;
        return (
           <List.Item>
               <Image as="a" size="mini" circular src={attendee.photoURL}/>
           </List.Item>
        )
    }
}
