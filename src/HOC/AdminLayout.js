import React from 'react'


function AdminLayout(props) {
    return (
        <div style={{paddingTop: '70px', width: '100%'}}>
            <div className=''>
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;