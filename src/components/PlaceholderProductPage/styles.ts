import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 1050px) {
    height: 75vh;
  }
  @media (max-width: 700px) {
    height: 50vh;
  }
  @media (max-width: 500px) {
    height: 35vh;
  }
`;

export const Content = styled.div`
  position: relative;
  top: -150px;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 40px;
  border-radius: 5px 5px 0px 0px;

  @media (max-width: 1050px) {
    top: 0;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentImage = styled.div`
  width: 30%;
  max-width: 312px;
  height: 312px;
  flex: 1;

  @media (max-width: 1050px) {
    width: 100%;
    max-width: 500px;
    height: 500px;
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 280px;
    height: 280px;
  }
`;
export const ContentDescription = styled.div`
  padding: 0 30px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1050px) {
    margin-top: 25px;
    padding: 0;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ContentBuy = styled.div`
  width: 20%;
  @media (max-width: 1050px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Name = styled.div`
  width: 300px;
  height: 40px;
  @media (max-width: 1050px) {
    margin: 10px 0;
  }
`;

export const Categories = styled.div`
  width: 250px;
  height: 25px;

  @media (max-width: 1050px) {
    margin: 10px 0;
  }
`;

export const ParentalRating = styled.div`
  width: 30px;
  height: 30px;
`;

export const AddFavorites = styled.div`
  width: 200px;
  height: 20px;
  @media (max-width: 1050px) {
    margin: 10px 0;
  }
`;
export const Description = styled.div`
  width: 100%;
  height: 150px;
  @media (max-width: 1050px) {
    margin: 10px 0;
  }
`;

export const Price = styled.div`
  width: 70%;
  height: 35px;

  @media (max-width: 1050px) {
    width: 20%;

    margin: 10px 0;
  }
`;

export const AddCart = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 40px;

  @media (max-width: 1050px) {
    width: 40%;
    margin: 5px 0;
  }
`;

export const KeepBuying = styled.div`
  margin: 10px 0;
  width: 60%;
  height: 20px;

  @media (max-width: 1050px) {
    width: 20%;
    margin: 5px 0;
  }
`;
