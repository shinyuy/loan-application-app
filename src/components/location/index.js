import React from 'react'

function Location() {
    return (
        <div className='location_wrapper'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.284553461033!2d10.149377014265179!3d5.9554776311591064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f179d2cb21c17%3A0x4ed5980463c007ab!2sNTARINKON+COOPERATIVE+CREDIT+UNION+FOOD+MARKET!5e0!3m2!1sen!2sng!4v1554364921195!5m2!1sen!2sng"
                title='location'
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen>
            </iframe>

            <div className='location_tag'>
                <div>Location</div>
            </div>

        </div>
    )
}

export default Location
