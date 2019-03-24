import React from 'react'
import money1 from '../../resources/images/money1.jpg';
import money2 from '../../resources/images/money2.jpg';
import { Row, Col } from 'react-materialize';

function Features() {
    return (
        <div>
            <Row>
                <Col s={12} l={6} className='grid-example'>
                    <h2>"Sed ut perspiciatis</h2>
                    <p>
                        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            in ea voluptate velit
                            rehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </Col>
                <Col s={12} l={6} className='grid-example'>
                    <img src={money2} alt='money' />
                </Col>
            </Row>
            <Row>
                <Col s={12} l={6} className='grid-example'>
                    <img src={money1} alt='money' />
                </Col>
                <Col s={12} l={6} className='grid-example'>
                    <h2>"Sed ut perspiciatis</h2>
                    <p>
                        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            in ea voluptate velit
                            rehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </Col>
            </Row>
        </div>

    )
}

export default Features;
