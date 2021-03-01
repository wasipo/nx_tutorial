import React from 'react';
import Header from './components/Header'
import Form from './components/Form';

const Setting: React.FC = () => {
    
    return (
        <>
            <Header page='Setting' />
            <div>
                設定フォーム
            </div>
            <Form page="setting" />
        </>
    )

};


export default Setting;