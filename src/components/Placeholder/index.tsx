import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import { Content, Buy, Category, Description, Developer, DeveloperAndCategory, GameInfo, Name, Price } from './styles';

const Placeholder: React.FC = () => {
    return (
        <>
            <ReactPlaceholder
                style={{ width: '98.79vw', height: '100vh' }}
                showLoadingAnimation={true}
                type='rect'
                ready={false}
                color='#E0E0E0'>
            </ReactPlaceholder>

            <Content>
                <ReactPlaceholder
                    style={{ width: 312, height: 312, marginRight: 35 }}
                    showLoadingAnimation={true}
                    type='rect'
                    ready={false}
                    color='#E0E0E0'>
                </ReactPlaceholder>
                <GameInfo>
                    <div>
                        <Name>
                            <ReactPlaceholder
                                style={{ width: 280, height: 40 }}
                                showLoadingAnimation={true}
                                type='rect'
                                ready={false}
                                color='#E0E0E0'>
                            </ReactPlaceholder>
                        </Name>


                        <DeveloperAndCategory>
                            <Developer>
                                <ReactPlaceholder
                                    style={{ width: 100, height: 20, marginTop: 10 }}
                                    showLoadingAnimation={true}
                                    type='rect'
                                    ready={false}
                                    color='#E0E0E0'>
                                </ReactPlaceholder>
                            </Developer>
                            <Category>
                                <ReactPlaceholder
                                    style={{ width: 200, height: 20, marginTop: 10, marginLeft: -10 }}
                                    showLoadingAnimation={true}
                                    type='rect'
                                    ready={false}
                                    color='#E0E0E0'>
                                </ReactPlaceholder>
                            </Category>
                        </DeveloperAndCategory>
                    </div>
                    <ReactPlaceholder
                        style={{ width: 30, height: 30 }}
                        showLoadingAnimation={true}
                        type='rect'
                        ready={false}
                        color='#E0E0E0'>
                    </ReactPlaceholder>
                    <Description>
                        <ReactPlaceholder
                            style={{ width: 500, height: 150 }}
                            showLoadingAnimation={true}
                            type='rect'
                            ready={false}
                            color='#E0E0E0'>
                        </ReactPlaceholder>
                    </Description>
                </GameInfo>
                <Buy>
                    <Price>
                        <ReactPlaceholder
                            style={{ width: 200, height: 30 }}
                            showLoadingAnimation={true}
                            type='rect'
                            ready={false}
                            color='#E0E0E0'>
                        </ReactPlaceholder>
                    </Price>

                    <ReactPlaceholder
                        style={{ width: 200, height: 30, marginTop: 10 }}
                        showLoadingAnimation={true}
                        type='rect'
                        ready={false}
                        color='#E0E0E0'>
                    </ReactPlaceholder>
                    <ReactPlaceholder
                        style={{ width: 140, height: 20, marginTop: 10 }}
                        showLoadingAnimation={true}
                        type='rect'
                        ready={false}
                        color='#E0E0E0'>
                    </ReactPlaceholder>
                </Buy>
            </Content>
        </>
    )
}
export default Placeholder;