import React from 'react'

function CoverForm({data}) {
  return (
    <div className='formBox'>
        <form>
            <h2>Book a ticket</h2>
            <div className="calling options">
                <h5>Location</h5>
                <a href="#">{data.location}</a>
            </div>
            <div className="seurity options">
                <h5>Weather</h5>
                <p style={{color: data.condition.color}}>{data.weather}</p>
            </div>
            <div className="virtualCare options">
                <h5>Timing</h5>
                <a href="#">{data.timing}</a>
            </div>
            
            {data.condition.available?
                <button>Find an appointment</button> :
                <button>Cannot book appointment</button>}
            
        </form>
    </div>
  )
}

export default CoverForm