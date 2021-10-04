import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faEllipsisH,
  faPaperPlane,
  faShare,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import PostModal from './PostModal';
import { useState } from 'react';

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setShowModal(!showModal);
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button onClick={handleClick}>Share a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Name</span>
                <span>Title</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <FontAwesomeIcon icon={faEllipsisH} color="#555" />
            </button>
          </SharedActor>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            soluta unde debitis.
          </Description>
          <SharedImage>
            <a>
              <img
                src="https://media-exp1.licdn.com/dms/image/sync/D4D18AQHinE2qzJOnNQ/companyUpdate-article-image-shrink_627_1200/0/1620930583271?e=1635984000&v=beta&t=u05_Ylo5_zZfsB013RtGhsUE5TlScHtX7uSjVGILNnY"
                alt=""
              />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                  alt=""
                />
              </button>
            </li>
            <li>
              <span>
                <a>1,093</a> <span>&#183;</span>
                <span>
                  <a> 128 comments</a>
                </span>
              </span>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/thumbs-up-icon.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-icon.svg" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal showModal={showModal} handleClick={setShowModal} />
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.3); */
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  background: white;
  color: #555;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-weight: 700;
      font-size: 13px;
      line-height: 1.5;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      padding: 10px 25px;
      border-radius: 5px;
      transition: background-color 0.5s;
      cursor: pointer;

      :hover {
        background-color: rgba(0, 0, 0, 0.07);
      }
    }
    :first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        flex-grow: 1;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: #f2f2f2;
        border-radius: 35px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.2s box-shadow 0.15s;

        :hover {
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: white;
        }
      }
    }

    :nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 8px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        :first-child {
          font-size: 13px;
          font-weight: 700;
          color: #444;
        }
        :not(:first-child) {
          font-size: 13px;
          color: #999;
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 8px;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  text-align: left;
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 13px;
  font-weight: 600;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.div`
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  list-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  li {
    font-size: 12px;
    margin-right: 5px;

    button {
      pointer-events: none;
    }

    span {
      font-weight: 600;
      padding: auto 0;

      a {
        cursor: pointer;

        :hover {
          text-decoration: underline;
          color: #3399ff;
        }
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 15px 25px;
    border-radius: 5px;
    transition: background-color 0.5s;
    cursor: pointer;

    span {
      margin-left: 5px;
      font-size: 13px;
      font-weight: 700;
    }

    svg,
    span {
      color: rgba(0, 0, 0, 0.6);
      transition: color 0.5s;
    }

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
      span,
      svg {
        color: #222;
      }
    }
  }
`;

export default Main;
