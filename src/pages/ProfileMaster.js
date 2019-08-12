import React from 'react';
import PropTypes from 'prop-types';
import FormMaster from '../components/FormMaster';
import '../styles/ProfileMaster.css';


const ProfileMaster = (props) => (
    <div>
        <FormMaster values={props.profileFields} isMaster={true}/>
        <footer/>
    </div>
);

ProfileMaster.propTypes = {
    profileFields: PropTypes.object.isRequired
};

export default ProfileMaster;
