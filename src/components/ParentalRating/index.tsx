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
          <Value>
            <p>18</p>
          </Value>
        </Container>
      );
    case '16 anos':
      return (
        <Container color="red">
          <Value>
            <p>16</p>
          </Value>
        </Container>
      );

    case '14 anos':
      return (
        <Container color="orange">
          <Value>
            <p>14</p>
          </Value>
        </Container>
      );
    default:
      return (
        <Container color="green">
          <Value>
            <p>L</p>
          </Value>
        </Container>
      );
  }
};

export default ParentalRating;
