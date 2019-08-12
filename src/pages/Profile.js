import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import '../styles/Profile.css'
const Profile = (props) => (
    <div>
        <Form values={props.profileFields}/>
        <footer/>
    </div>
);

Profile.propTypes = {
    profileFields: PropTypes.object.isRequired
};

export default Profile
