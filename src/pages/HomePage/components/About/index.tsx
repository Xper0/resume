import { Step, StepLabel, Stepper, Typography } from '@mui/material';

import GridContainer from 'components/core/layouts/Grid/GridContainer';
import GridItem from 'components/core/layouts/Grid/GridItem';

const About = () => {
  const steps = [
    {
      label: 'Опыт работы',
      description: `2.5 года, frontend-разработчик`,
    },
    {
      label: 'Место - Unicon Outsourcing ',
      description: `Москва, www.bdo.ru

        Финансовый сектор
        
        -Услуги по ведению бухгалтерского и налогового учета, расчет заработной платы
        -Услуги для бизнеса
        
        -Консалтинговые услуги`,
    },
  ];

  return (
    <GridItem>
      <GridContainer direction={'column'}>
        <GridItem>
          <Typography>Обо мне</Typography>
        </GridItem>
        <GridItem paddingTop={'0.5rem'}>
          <Typography>
            Здравствуйте, меня зовут Александр, я являюсь frontend-developer
          </Typography>
        </GridItem>
      </GridContainer>
      <GridItem>
        <Stepper orientation="vertical" activeStep={-1} nonLinear>
          {steps.map((step) => (
            <Step key={step.label} active expanded>
              <StepLabel
                optional={
                  <Typography variant="caption">{step.description}</Typography>
                }
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </GridItem>
    </GridItem>
  );
};

export default About;
