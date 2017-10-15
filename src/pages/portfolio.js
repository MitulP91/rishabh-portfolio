import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from "../components/Footer";
import StyledContainer from '../components/StyledContainer';
import Films from '../components/Films';

export default class Portfolio extends Component {
    render() {
        return (
            <StyledContainer>
                <Header />
                <Films />
                <Footer />
            </StyledContainer>
        );
   }     
}
