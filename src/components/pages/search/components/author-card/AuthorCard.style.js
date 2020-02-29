import styled from 'styled-components';

import { Title2 } from '@core/titles/components/title2';

import '../../../../../design/colors.scss';

export const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #FFFFFFE6;
  padding: 20px;
  margin: 20px;
  @media (max-width: 765px) {
    flex-flow: column-reverse;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px 20px;
`;

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  @media (max-width: 765px) {
    width: auto;
  }
`;

export const Name = styled(Title2)`
  color: #495057;
`;

export const City = styled.span`
  color: #495057;
`;