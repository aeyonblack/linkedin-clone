import React from 'react';
import styled from 'styled-components';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function Home(props) {
  return (
    <Container>
      {/* {!props.user && <Redirect to="/" />} */}
      <Content>
        <Section>
          <h5>
            {props.user ? (
              <a>Hey {props.user.displayName}!</a>
            ) : (
              <a>Hey there!</a>
            )}
          </h5>
          <p>
            I built this with react.js, redux and firebase, it's not mobile
            responsive yet but try posting something!
          </p>
        </Section>
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  min-height: 50px;
  padding: 15px 0px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  h5 {
    color: #3399ff;
    font-size: 14px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 0px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => ({ user: state.userState.user });

export default connect(mapStateToProps)(Home);
