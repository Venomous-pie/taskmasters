import { styled } from "styled-components";

const VerticalGap = styled.div`
width: 100%;
height: ${(props) => props.gapsize || '8px'};
`

export default VerticalGap;