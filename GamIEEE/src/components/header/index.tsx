import AdmHeader from './admHeader'
import UserHeader from './userHeader'
import React from 'react';

import { useAuth } from '../../contexts/auth'

const Header: React.FC = () => {
    const { user } = useAuth();
    return user?.admin ? <AdmHeader/>:<UserHeader/>
} 

export default Header;