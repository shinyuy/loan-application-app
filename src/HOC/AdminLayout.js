import React from 'react'
import AdminNav from '../components/admin/nav/AdminNav';

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