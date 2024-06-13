import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Chip,
  Divider,
  Paper,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  ImageWithZoom,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

import GridContainer from 'components/core/layouts/Grid/GridContainer';
import GridItem from 'components/core/layouts/Grid/GridItem';

interface ICardProps {
  title: string | number;
  data: {
    imgs?: string[];
    description?: string;
    hubLink?: string;
    projectLink?: string;
    stack?: string[];
  };
}
const Card = (props: ICardProps) => {
  const { title = '', data } = props;
  return (
    <GridItem padding={'1rem'}>
      <Paper>
        <GridContainer
          direction={'column'}
          padding={'1rem'}
          // minHeight={780}
          width={'100%'}
          // overflow={'auto'}
        >
          <GridItem>
            <Typography
              variant="h4"
              sx={{
                fontSize: '30px',
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
          </GridItem>
          <GridItem padding={'1rem 0'}>
            <Divider />
          </GridItem>

          <GridItem width={'100%'}>
            <GridContainer direction={'column'} width={'100%'}>
              {/* <GridItem>
                {data.imgs && (
                  <CarouselProvider
                    naturalSlideWidth={1}
                    naturalSlideHeight={1}
                    totalSlides={data.imgs.length}
                    visibleSlides={3}
                    step={1}
                    orientation="vertical"
                  >
                    <Slider>
                      {data.imgs.map((img, index) => (
                        <Slide key={index} index={index}>
                          <ImageWithZoom src={img} />
                        </Slide>
                      ))}
                    </Slider>
                  </CarouselProvider>
                )}
              </GridItem> */}
              <GridItem>
                {data.imgs && (
                  <CarouselProvider
                    naturalSlideWidth={1000}
                    naturalSlideHeight={500}
                    // isIntrinsicHeight={true}
                    totalSlides={data.imgs.length}
                    visibleSlides={1}
                    step={1}
                    hasMasterSpinner
                  >
                    <Slider>
                      {data.imgs.map((img, index) => (
                        <Slide key={index} index={index}>
                          <ImageWithZoom src={img} />
                        </Slide>
                      ))}
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                  </CarouselProvider>
                )}
                <GridItem paddingTop={'2rem'} maxWidth={'400px'}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    Описание:
                  </Typography>
                  <Tooltip title={data.description}>
                    <Typography
                      display={'block'}
                      maxWidth={'100%'}
                      overflow={'hidden'}
                      textOverflow={'ellipsis'}
                      noWrap
                    >
                      {data.description}
                    </Typography>
                  </Tooltip>
                </GridItem>
                {data.stack && (
                  <GridItem paddingTop={'2rem'}>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                      }}
                    >
                      Используемый стэк:
                    </Typography>
                    <GridContainer maxWidth={400}>
                      {data.stack.map((stack) => (
                        <GridItem key={stack} padding={'1rem 0.6rem 0 0'}>
                          <Chip
                            label={stack}
                            color="success"
                            variant="outlined"
                          />
                        </GridItem>
                      ))}
                    </GridContainer>
                  </GridItem>
                )}

                <GridItem padding={'1rem 0'}>
                  <Divider />
                </GridItem>
                <GridItem justifyContent={'end'} display={'flex'}>
                  {data.hubLink && (
                    <Link
                      to={data.hubLink}
                      style={{
                        margin: '1rem',
                        textDecoration: 'none',
                        color: 'black',
                      }}
                    >
                      <SvgIcon component={GitHubIcon} />
                    </Link>
                  )}
                  {data.projectLink && (
                    <Link
                      to={data.projectLink}
                      style={{
                        margin: '1rem',
                        textDecoration: 'none',
                        color: 'blue',
                      }}
                    >
                      <SvgIcon component={OpenInNewIcon} />
                    </Link>
                  )}
                </GridItem>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </Paper>
    </GridItem>
  );
};

export default Card;
