import React from 'react';
import MainLayout from "../../pages/MainLayout/MainLayout";

const User = () => {
    return (
        <MainLayout>
        <div className={'app'}>
            <img src={require('./Avatar.jpeg')}/>
            <h2>Taras</h2>
        </div>
        </MainLayout>
    );
};

export default User;