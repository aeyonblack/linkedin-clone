import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PostModal from './PostModal';
import { connect } from 'react-redux';
import { getArticlesAPI } from '../actions';
import ReactPlayer from 'react-player';

function Main(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.getArticles();
    console.log('articles acquired');
  }, [props.loading]);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setShowModal(!showModal);
    }
  };

  return (
    <>
      <Container>
        <ShareBox>
          <div>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <button
              onClick={handleClick}
              disabled={props.loading ? true : false}
            >
              Share a post
            </button>
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
        {props.articles.length > 0 && (
          <Content>
            {props.loading && (
              <img id="spinner" src="/images/loading-spinner.svg" />
            )}

            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.user.photo} alt="" />
                      <div>
                        <span>{article.user.name}</span>
                        <span>{article.user.email}</span>
                        <span>
                          {article.user.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <FontAwesomeIcon icon={faEllipsisH} color="#555" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImage>
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={'100%'} url={article.video} />
                      ) : (
                        article.sharedImg && <img src={article.sharedImg} />
                      )}
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
                        <a>{Math.floor(Math.random() * 10000)}</a>{' '}
                        <span>&#183;</span>
                        <span>
                          <a> {Math.floor(Math.random() * 1000)} comments</a>
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
              ))}
          </Content>
        )}
        <PostModal showModal={showModal} handleClick={setShowModal} />
      </Container>
    </>
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

const Content = styled.div`
  text-align: center;

  img#spinner {
    width: 54px;
  }
`;

const mapStateToProps = (state) => ({
  user: state.userState.user,
  loading: state.articleState.loading,
  articles: state.articleState.articles,
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
