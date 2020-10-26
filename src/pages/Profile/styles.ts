import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    height: 144px;
    background: #28262e;

    > div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 26px;
        height: 26px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
  margin: -170px auto 0;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 24px 0;
      font-size: 20px;
      text-align: left;
    }

    input[name='old_password'] {
      margin-top: 60px;
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  position: relative;

  img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #ff9900;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9900')};
    }
  }
`;
