import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

function Leftside(props) {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo>
              {props.user ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/photo.svg" />
              )}
            </Photo>
            <Link>
              Welcome, {props.user ? props.user.displayName : 'there!'}
            </Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow #hashtags</span>
        </a>
        <a>
          <span>Discover More</span>
        </a>
      </CommunityCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 0.5s;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.3); */
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  /* background-image: url('/images/photo.svg'); */

  img {
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
  }
`;

const Link = styled.div`
  line-height: 1.5;
  color: #444;
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #3399ff;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

  a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 500;
    span {
      font-size: 12px;
      line-height: 1.333;
      :first-child {
        color: #666;
      }
    }
  }
`;

const Item = styled.div`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: #222;
    font-weight: 600;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  a {
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    :hover {
      color: #3399ff;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
    }

    :last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      border-top: 1px solid rgba(0, 0, 0, 0.15);
      padding: 12px;

      :hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(Leftside);
