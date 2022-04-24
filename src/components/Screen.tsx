import React from 'react';
import styled from 'styled-components';

const Screen = () => {
    return (
        <ScreenContainer>
            <ScreenDiv />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    perspective: 1000px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ScreenDiv = styled.div`
    background: #fff;
    height: 70px;
    width: 400px;
    margin: 15px 0;
    transform: rotateX(-45deg);
    box-shadow: 0 -3px 10px rgba(255,255,255,0.7);
`

export default Screen;