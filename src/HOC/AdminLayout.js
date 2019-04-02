import React from 'react'


function AdminLayout(props) {
    return (
        <div className=''>
            <div className=''>
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;