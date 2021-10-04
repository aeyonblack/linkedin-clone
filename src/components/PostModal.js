import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const PostModal = (props) => {
  const [editorText, setEditorText] = useState('');

  const closePostModal = (e) => {
    setEditorText('');
    props.handleClick(!props.showModal);
  };

  return (
    <>
      {props.showModal && (
        <Container>
          <Content>
            <Header>
              <span>Create a post</span>
              <button onClick={(e) => closePostModal(e)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textArea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeHolder="What do you want to talk about?"
                  autoFocus={true}
                ></textArea>
              </Editor>
            </SharedContent>
            <SharedCreations>
              <AttachAssets>
                <AssetButton>
                  <img src="/images/photo-gray.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/video-gray.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/comment-gray.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!editorText ? true : false}>
                Post
              </PostButton>
            </SharedCreations>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.8s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 18px;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    svg {
      padding: 8px 10px;
      transition: color 250ms, background-color 250ms;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 700;

      :hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 5px;
  }
`;

const SharedCreations = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  cursor: pointer;

  img {
    padding: 6px;
    border-radius: 50%;
    transition: background-color 250ms;
  }

  :hover {
    img {
      background-color: #f2f2f2;
    }
  }
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  ${AssetButton} {
    font-size: 13px;
    font-weight: 500;
    border-radius: 15px;
    padding: 0 10px;
    transition: background-color 250ms;
    img {
      margin-right: 1px;
      padding: 2px;
      width: 18px;
      border-radius: none;
    }
    :hover {
      background-color: #f2f2f2;
      img {
        background-color: none;
      }
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  padding: 0 20px;
  background-color: ${(props) => (props.disabled ? '#f2f2f2' : '#3399ff')};
  font-size: 14px;
  font-weight: 700;
  border-radius: 25px;
  color: ${(props) => (props.disabled ? '#999' : '#fff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.5s, color 0.5s;

  :hover {
    background-color: ${(props) => (props.disabled ? '#f2f2f2' : '#0059b3')};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 14px;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
