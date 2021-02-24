import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

interface ArrowProps {
  icon: string;
}

const Arrow: React.FC<ArrowProps> = ({ icon }: ArrowProps) => {
  if (icon === 'left') {
    return (
      <Container>
        <FiArrowLeft color="#fff" />
      </Container>
    );
  }
  if (icon === 'rigth') {
    return (
      <Container>
        <FiArrowRight color="#fff" />
      </Container>
    );
  }
  return <div />;
};

export default Arrow;
