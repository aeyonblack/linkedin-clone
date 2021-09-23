import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img
            src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt=""
          />
        </Hero>
        <Form>
          <Button>Search for a job</Button>
          <Button>Find a person you know</Button>
          <Button>Learn a new skill</Button>
        </Form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 100px;
    height: 30px;
    @media (max-width: 768) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 15px;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  transition-duration: 1s;
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  font-size: 15px;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px;
  padding: 10px 24px;
  font-weight: 600;
  color: #3399ff;
  transition-duration: 1s;
  :hover {
    color: white;
    background-color: #3399ff;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-weight: 300;
    color: #804200;
    line-height: 70px;
    margin-bottom: 60px;
    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
      font-size: 20px;
      line-height: 2;
    }
  }

  img {
    width: 600px;
    height: 520px;
    position: absolute;
    bottom: 280px;
    right: -100px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      display: none;
      height: initial;
    }
  }
`;

const Form = styled.div``;

const Button = styled.button`
  width: 180%;
  display: block;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 20px 60px 20px 10px;
  text-align: start;
  font-weight: 600;
  color: #444444;
  cursor: pointer;
  transition: box-shadow 0.5s;
  :hover {
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.3);
  }
`;

const Google = styled.button`
  display: none;
`;

export default Login;
