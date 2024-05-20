import { Button, List, ListItem, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar/AppBar';

import GridContainer from 'components/core/layouts/Grid/GridContainer';
import GridItem from 'components/core/layouts/Grid/GridItem';

import RouterWrapper from '../../../../router';

// import './index.scss';

const BaseLayout = () => {
  const menuList: {
    name: string;
    path: string;
  }[] = [
    {
      name: 'Обо мне',
      path: '/about',
    },
    {
      name: 'Работы',
      path: '/works',
    },
    {
      name: 'Контакты',
      path: '/contacts',
    },
  ];
  return (
    <GridContainer
    // className={'project-root'}
    // flexDirection={'column'}
    // width={'100vw'}
    // height={'100vh'}
    // flexWrap={'nowrap'}
    // overflow={'hidden'}
    >
      {/* <GridItem flex={1}>
        <AppBar>
          <Toolbar>
            <GridContainer width={'100%'}>
              <GridItem></GridItem>
              <GridItem>
                <GridContainer>
                  <List>
                    {menuList.map((item) => (
                      <ListItem key={item.path}>
                        <Button
                          sx={{
                            color: '#fff',
                          }}
                        >
                          <Typography>{item.name}</Typography>
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </Toolbar>
        </AppBar>
      </GridItem> */}
      <GridItem flex={1}>
        <RouterWrapper />
      </GridItem>
    </GridContainer>
  );
};

export default BaseLayout;
