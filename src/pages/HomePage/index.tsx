import GridContainer from 'components/core/layouts/Grid/GridContainer';

import About from './components/About';
import Contacts from './components/Contacts';
import Works from './components/Works';

const HomePage = () => {
  return (
    <GridContainer
      width={'100%'}
      direction={'column'}
      height={'100%'}
      alignItems={'center'}
    >
      <About />
      <Works />
      <Contacts />
    </GridContainer>
  );
};

export default HomePage;
