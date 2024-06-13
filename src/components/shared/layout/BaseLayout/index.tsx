import { Button, List, ListItem, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar/AppBar';

import GridContainer from 'components/core/layouts/Grid/GridContainer';
import GridItem from 'components/core/layouts/Grid/GridItem';

import RouterWrapper from '../../../../router';
import './index.scss';

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
    <GridItem padding={'0'} height={'100%'}>
      <GridContainer
        direction={'column'}
        width={'100vw'}
        height={'100vh'}
        flexWrap={'nowrap'}
      >
        <GridItem>
          <AppBar position="static">
            <Toolbar variant="dense" disableGutters>
              <GridContainer
                width={'100%'}
                justifyContent={'center'}
                alignContent={'center'}
                boxSizing={'border-box'}
                alignItems={'center'}
                padding={'0 2.25rem 0 1.25rem'}
                flexWrap={'nowrap'}
                minHeight={'4rem'}
              >
                <List>
                  <GridContainer>
                    {menuList.map((item) => (
                      <GridItem key={item.path}>
                        <ListItem key={item.path}>
                          <Button
                            sx={{
                              color: '#fff',

                              border: '2px solid #fff',
                            }}
                          >
                            <Typography>{item.name}</Typography>
                          </Button>
                        </ListItem>
                      </GridItem>
                    ))}
                  </GridContainer>
                </List>
              </GridContainer>
            </Toolbar>
          </AppBar>
        </GridItem>
        <GridItem flex={'1 0 0'}>
          <GridContainer flexWrap={'nowrap'} height={'100%'}>
            <RouterWrapper />
          </GridContainer>
        </GridItem>
      </GridContainer>
    </GridItem>
  );
};

export default BaseLayout;
