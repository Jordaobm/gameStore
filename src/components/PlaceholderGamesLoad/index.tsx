import React from 'react';
import ReactPlaceholder from 'react-placeholder/lib';
import { CardGame, Price, Name, GameInfo, LinkGame, Score } from './styles';

const PlaceholderGamesLoad: React.FC = () => {
    return (
        <CardGame>
            <LinkGame>
                <ReactPlaceholder style={{ width: 180, height: 180 }} showLoadingAnimation={true} type='rect' ready={false} color='#E0E0E0'>
                </ReactPlaceholder>
                <GameInfo>
                    <ReactPlaceholder style={{ width: 100, height: 20 }} showLoadingAnimation={true} type='rect' ready={false} color='#E0E0E0'>
                    </ReactPlaceholder>

                    <ReactPlaceholder style={{ width: 150, height: 16, marginTop: 5 }} showLoadingAnimation={true} type='rect' ready={false} color='#E0E0E0'>
                    </ReactPlaceholder>
                    
                    <ReactPlaceholder style={{ width: 80, height: 16, marginTop: 5 }} showLoadingAnimation={true} type='rect' ready={false} color='#E0E0E0'>
                    </ReactPlaceholder>
                </GameInfo>
            </LinkGame>
        </CardGame>
    )
}

export default PlaceholderGamesLoad;