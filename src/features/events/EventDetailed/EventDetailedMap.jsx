import React from 'react'
import { Segment } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import { Icon} from 'semantic-ui-react'

const Marker = () => <Icon name='marker' size='big' color='red' />;

const EventDetailedMap = ({lat, lng}) => {
    const zoom = 14
    return (
        <Segment style={{padding: 0}} attached='bottom'>
            <div style={{ height: '300px', width: '100%' }}>
                <GoogleMapReact
                     bootstrapURLKeys={{ key: 'AIzaSyCZvL4AbP3YGrMCmf5rTIuFSvfjbsAQ21M' }}
                     defaultCenter={{lat, lng}}
                     defaultZoom={zoom}>

          <Marker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
        </Segment>
    )
}

export default EventDetailedMap
