import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    height:40px;
    background-color:lightblue;
    display:flex;
    justify-content:center;
    align-items:center;

`

const Announcement = () => {
    return (
        <div>
            <Container>
                Biggest mobile sale of the year ...Starts this october
            </Container>
        </div>
    )
}

export default Announcement
