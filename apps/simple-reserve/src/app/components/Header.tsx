import React from 'react';
import ReactDom from 'react-dom';
import Setting from './Header/Setting'



type Props = {
    page: string;
}

const Header: React.FC<Props> = ({page}) => {

    const HeaderElement = (page) => {

        switch(page) {
            case '/Setting' :
                return <Setting />
            case '/About' :
                return <div>{page}Header</div>
            case '/Home' :
                return <div>{page}Header</div>
            default :
                return <div>{page}</div>
        }

    }

    return (
        <>
            {HeaderElement(page)}
        </>
    );

}







export default Header;
