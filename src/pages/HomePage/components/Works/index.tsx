import GridContainer from 'components/core/layouts/Grid/GridContainer';

import Card from 'components/shared/card';

import { cardsInfo } from './fakeData';

const Works = () => {
  return (
    <GridContainer flex={1}>
      {cardsInfo.map((card, index) => (
        <Card key={index} title={card.title} data={card.data} />
      ))}
    </GridContainer>
  );
};

export default Works;
