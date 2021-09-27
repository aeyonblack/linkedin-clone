import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} color="#999" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

// main header container
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

// secondary container holding all header content
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

// brand logo
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

// responsive search input field
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 3px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 6px 8px 6px 40px;
      line-height: 1.75;
      font-weight: 300px;
      font-size: 13px;
      transition: box-shadow 1s, width 1.5s, background-color 1s;
    }
    input:focus {
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
      width: 300px;
      background-color: white;
      // figure out a way to make these animations disappear when on mobile
    }
  }
  @media (max-width: 767px) {
    margin: 10px 0;
    div {
      max-width: 200px;
      input {
        transition: box-shadow 1s, width 1s, background-color 1s;
      }
      input:focus {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        width: 250px;
        background-color: white;
      }
    }
  }
`;

// search icon inside the search input field
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 2px;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// the nav bar
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

// A wrapper for the navigation items list
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span {
      color: black;
    }
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid white;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

// The list of navigation items
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
  }
  span {
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
  }

  :hover,
  :active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  transition-duration: 0.5s;
  text-align: center;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  display: none;
`;

const User = styled(NavList)`
  cursor: pointer;
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  :hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
