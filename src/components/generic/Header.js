import React from 'react';
import { Typography } from 'antd';
import '../../assets/css/Header.css';

const { Title } = Typography;

class Header extends React.Component {
    render (){
        return     <Title>
            پنل ادمین
        </Title>
    }
}

export default Header