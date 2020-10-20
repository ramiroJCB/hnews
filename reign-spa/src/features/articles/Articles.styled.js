import styled from "styled-components";

export const Rows = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  margin: 0;
  flex-direction: row;
  background-color: ${({ hover }) => (hover ? "#fafafa" : "fff")};
  border-bottom: 1px solid #e0e0e0;
  cursor: url(${({ src }) => src}) 2 30, pointer;
`;

export const Root = styled.div`
  padding: 0 20px;
`;

export const Hover = styled.div`
  display: none;
`;
export const Author = styled.p`
  color: #999;
  margin: 0 0.3vw;
`;
export const TitleAndTime = styled.p`
  color: #333;
`;

export const TrashIcon = styled.img`
  display: none;
  width: 2vw;
  height: 3.5vh;
  src: url(${({ src }) => src});
`;
