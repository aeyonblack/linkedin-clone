import React from 'react';
import styled from 'styled-components';

function Rightside() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    div {
      display: flex;
      flex-direction: column;
    }

    button {
      background: transparent;
      color: #666;
      font-weight: 600;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      transition: box-shadow 0.35s;
      cursor: pointer;

      :hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

const Avatar = styled.div`
  background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #777;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  padding: 5px;
  cursor: pointer;
  width: 210px;
  border-radius: 4px;
  transition: background-color 0.6s;

  img {
    margin-left: 8px;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const BannerCard = styled(FollowCard)`
  padding: 5px 0;
  img {
  }
`;

export default Rightside;
