import React from 'react'
import money1 from '../../resources/images/money1.jpg';
import money2 from '../../resources/images/money2.jpg';

function Features() {
    return (
            <div>
            <div className='row features'>
                <div className='col s6 textleft'>
                    <h2>"Sed ut perspiciatis</h2>
                    <p>
                        rehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>

                <div className='col s6 textright'>
                    <h2>"Sed ut perspiciatis</h2>
                    <p>
                        
                    </p>
                </div>
               
                
            </div>
             <div className='row' style={{paddingBottom: '300px'}}>
                    <div className='col s6'>
                         <img src={money2} alt='money' className='responsive-img'/>
                    </div>
                   <div className='col s6'>
                       <h2>in ea voluptate velit esse</h2>
                       <p>
                         <br/><br/> rehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                         quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        </p>
                   </div>
             </div>
             </div>

    )
}

export default Features;
