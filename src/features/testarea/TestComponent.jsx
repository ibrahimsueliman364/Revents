import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementAsync, decrementAsync} from './testActions'
import { Button} from 'semantic-ui-react'
import TestPlaceInput from './TestPlaceInput'
import SimpleMap from './SimpleMap'
import{
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import {openModal,closeModal} from '../modals/modalActions'





const mapState =(state) =>({
    data: state.test.data,
    buttonName: state.async.elementName,
    loading: state.async.loading
})

const actions = {
    incrementAsync,
    decrementAsync,
    openModal,
    closeModal
}

 class TestComponent extends Component {
     state={
         latlng:{
             lat: 59.95,
             lng: 30.33
         }
     }

     handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              this.setState({
                  latlng: latLng
              })
          })
          .catch(error => console.error('Error', error));
      };


    render() {
        const {data, buttonName, loading, incrementAsync, decrementAsync, openModal} = this.props
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3>
                <Button name='increment' loading={buttonName === 'increment' && loading} onClick={(e)=>incrementAsync(e.target.name)} positive content='Increment' />
                <Button name='decrement' loading={buttonName === 'decrement' && loading} onClick={(e)=>decrementAsync(e.target.name)} negative content='decrement' />
                <Button onClick={() => openModal('TestModal', {data: 42})} color='teal' content='Open Modal' />
                <br />
                <br />
                <TestPlaceInput selectAddress={this.handleSelect} />
                <br />
                <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />   
            
            </div>
        )
    }
}


export default connect(mapState, actions)(TestComponent)