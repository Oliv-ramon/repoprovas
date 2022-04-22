import styled from "styled-components";

export default function Separator() {
  return (
    <SeparatorContainer>
      <HorizontalLine/>ou<HorizontalLine/>
    </SeparatorContainer>
  );
}

const SeparatorContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const HorizontalLine = styled.div`
  width: 217px;
  height: 1px;

  background: #C4C4C4;
`;