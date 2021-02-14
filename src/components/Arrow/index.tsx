import React from 'react';
import {Container} from './styles';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';

interface ArrowProps{
    icon:string;
}

const Arrow:React.FC<ArrowProps> = ({icon}) => {
    if(icon === 'left') {
        return (
            <Container>
                <FiArrowLeft color="#fff"/>
            </Container>
        )
    }
    if(icon === 'rigth') {
        return (
            <Container>
                <FiArrowRight color="#fff"/>
            </Container>
        )
    }
    return <div></div>
}

export default Arrow;