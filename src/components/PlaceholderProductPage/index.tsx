import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import {
  Container,
  Content,
  ContentDescription,
  ContentImage,
  ContentBuy,
  Name,
  Categories,
  ParentalRating,
  AddFavorites,
  Description,
  Price,
  AddCart,
  KeepBuying,
} from './styles';
import 'react-placeholder/lib/reactPlaceholder.css';

const PlaceholderProductPage: React.FC = () => (
  <Container>
    <ReactPlaceholder type="rect" ready={false} showLoadingAnimation>
      <>/</>
    </ReactPlaceholder>

    <Content>
      <ContentImage>
        <ReactPlaceholder
          type="rect"
          ready={false}
          color="#E0E0E0"
          showLoadingAnimation
          style={{ width: '100%', height: '100%' }}
        >
          <>/</>
        </ReactPlaceholder>
      </ContentImage>

      <ContentDescription>
        <Name>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%', height: '100%' }}
          >
            <></>
          </ReactPlaceholder>
        </Name>
        <Categories>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </Categories>
        <ParentalRating>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </ParentalRating>
        <AddFavorites>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </AddFavorites>
        <Description>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </Description>
      </ContentDescription>
      <ContentBuy>
        <Price>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </Price>
        <AddCart>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </AddCart>
        <AddCart>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </AddCart>
        <KeepBuying>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            showLoadingAnimation
            style={{ width: '100%' }}
          >
            <>/</>
          </ReactPlaceholder>
        </KeepBuying>
      </ContentBuy>
    </Content>
  </Container>
);

export default PlaceholderProductPage;
