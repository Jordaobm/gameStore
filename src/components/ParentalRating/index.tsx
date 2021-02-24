import React from 'react';
import { Container, Value } from './styles';

interface ParentalRatingProps {
  productParentalRating: string;
}

const ParentalRating: React.FC<ParentalRatingProps> = ({
  productParentalRating,
}) => {
  switch (productParentalRating) {
    case '18 anos':
      return (
        <Container color="#000">
          <Value>18</Value>
        </Container>
      );
    case '16 anos':
      return (
        <Container color="red">
          <Value>16</Value>
        </Container>
      );

    case '14 anos':
      return (
        <Container color="orange">
          <Value>14</Value>
        </Container>
      );
    default:
      return (
        <Container color="green">
          <Value>L</Value>
        </Container>
      );
      break;
  }

  return <div />;
};

export default ParentalRating;
