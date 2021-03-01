import React from 'react';
import ReactDom from 'react-dom';

type Props = {
    page: string;
}

const Header: React.FC<Props> = ({page}) => (

    (page==='common') ? 
    <div>
        header
    </div>
    :<div></div>

);

export default Header;
