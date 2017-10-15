import React, { Component } from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Footer from "../components/Footer";
import StyledContainer from '../components/StyledContainer';

import "./styles/index.scss";

const baseClassName = 'Home';

export default class Index extends Component {
  render() {
    return (
      <StyledContainer>
        <Header />

        <StyledContainer className={`${baseClassName}__container`} variation="flex-center">
          <div className={`${baseClassName}__title`}>
              <h1>Rishabh Sanjay Patel</h1>
          </div>

          <StyledContainer className={`${baseClassName}__content`} variation="flex-center">
              <div className={`${baseClassName}__content-link`}>
                  <h4 className="after-slash">Film</h4>
              </div>

              <div className={`${baseClassName}__content-link`}>
                  <h4 className="after-slash">Writing</h4>
              </div>

              <div className={`${baseClassName}__content-link`}>
                  <h4>Sound</h4>
              </div>
          </StyledContainer>

          <StyledContainer className={`${baseClassName}__container`} variation="flex-center">
              <a className="about-me-link spread-flex-item" href="./bio">Bio</a>
              <div className="about-me-dot spread-flex-item">&bull;</div>
              <a className="about-me-link spread-flex-item" href="./portfolio">Portfolio</a>
              <div className="about-me-dot spread-flex-item">&bull;</div>
              <a className="about-me-link spread-flex-item" href="./resume">Resume</a>
          </StyledContainer>
        </StyledContainer>

        <Footer />
      </StyledContainer>
    )
  }
}
