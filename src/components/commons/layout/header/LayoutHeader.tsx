import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 20px;
`;

const Navi = styled.ul`
  display: flex;
  gap: 20px;
`;

const Utils = styled.div`
  display: flex;
`;

export default function LayoutHeader(): JSX.Element {
  return (
    <Wrapper>
      <div>NETFLIX</div>
      <Navi>
        <li>홈</li>
        <li>영화</li>
        <li>내가 찜한 리스트</li>
      </Navi>
      <Utils>
        <div>검색</div>
        <div>로그인</div>
      </Utils>
    </Wrapper>
  );
}
