import { InputGroup, Form } from "react-bootstrap";
import { styled } from "styled-components";

export const StyledInputGroup = styled(InputGroup)`

@media(max-width: 767px) {
    height: 40px;
}

@media(min-width: 768px) and (max-width: 1199px)  {
    height: 42px;
}

@media(min-width: 1200px) {
    height: 44px;
}
`;

export const StyledFormControl = styled(Form.Control)`
&:focus {
  border: none;
}
;

  &::placeholder {

    @media (max-width: 767px) {
      font-size: 14px;
    }

    @media(min-width: 768px) and (max-width: 1199px) {
      font-size: 16px;
    }

    @media(min-width: 1200px) {
        font-size: 18px;
    }
  }
`;