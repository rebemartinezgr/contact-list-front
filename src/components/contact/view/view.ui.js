import React from 'react'
import Moment from 'moment'
import { Timeline, Event } from 'react-timeline-scribble'

function ViewUI(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Contact history</h4>
              <hr />
              <div className="history">
                <Timeline>
                {
                  props.contact.first_name && 
                  (
                    <Event interval={"Current"} 
                    title={props.contact.first_name + " " + props.contact.last_name} 
                    subtitle={props.contact.email} >
                    {props.contact.phone}
                    </Event>
                  )           
                }
                {props.history.map(function(elem){
                    return (
                        <Event
                            interval={Moment(elem.created_at).format('DD-MM-YYYY HH:mm:ss')} 
                            title={elem.first_name + " " +  elem.last_name} 
                            subtitle= {elem.email} key={elem.id}>
                            {elem.phone} 
                        </Event>
                    )
                })} 
                </Timeline>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ViewUI;