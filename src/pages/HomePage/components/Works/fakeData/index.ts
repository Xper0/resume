import calcAdmin from 'assets/calc/main.png';
import calcModel from 'assets/calc/model.png';
import calcResults from 'assets/calc/results.png';
import affiliation from 'assets/counterparty/affilation.png';
import couterpartyCatalog from 'assets/counterparty/counterparty.png';
import factRisk from 'assets/counterparty/fact_risk.png';
import mainHome from 'assets/counterparty/main.png';
import paramsRiskFactor from 'assets/counterparty/params_factor.png';
import lvlRisk from 'assets/counterparty/params_lvl_risk_dialog.png';
import landingHeader from 'assets/landingCounterparty/1.png';
import landingContent from 'assets/landingCounterparty/2.png';
import landingContent_v2 from 'assets/landingCounterparty/3.png';
import landingFooter from 'assets/landingCounterparty/4.png';
import landingForm from 'assets/landingCounterparty/5.png';
import { StackEnum } from 'models/enums';

export const cardsInfo = [
  {
    title: 'Система оценки контрагентов',
    data: {
      imgs: [
        mainHome,
        couterpartyCatalog,
        factRisk,
        paramsRiskFactor,
        lvlRisk,
        affiliation,
      ],
      description:
        'Система предназначена для автоматизации процесса проверок контрагентов',
      stack: [
        StackEnum.REACT,
        StackEnum.TYPESCRIPT,
        StackEnum.GRAPHQL,
        StackEnum.REDUX,
        StackEnum.RTK,
        StackEnum.AXIOS,
        StackEnum.MATERIALUI,
        StackEnum.SCSS,
        StackEnum.ECHARTS,
        StackEnum.FORMIKYUP,
        StackEnum.TABLE,
        StackEnum.I18NEXT,
      ],
      hubLink: 'https://github.com/Xper0/resume',
      projectLink: 'https://check.unicon.ru/',
    },
  },
  {
    title: 'Калькулятор',
    data: {
      imgs: [calcAdmin, calcModel, calcResults],
      description:
        'Целью проекта, было интегрировать загружаемую модель(админом) из файла exel с дополнительным настройками, из БД, для отображения динамического интерфейса, интересующих пунктов клиента, с последующим расчетом суммы , по выбранным категориям.',
      stack: [
        StackEnum.REACT,
        StackEnum.TYPESCRIPT,
        StackEnum.GRAPHQL,
        StackEnum.RTK,
        StackEnum.AXIOS,
        StackEnum.MATERIALUI,
        StackEnum.SCSS,
        StackEnum.ECHARTS,
        StackEnum.I18NEXT,
      ],
      hubLink: 'https://github.com/Xper0/resume',
      projectLink: 'https://check.unicon.ru/',
    },
  },
  {
    title: 'Лендинг',
    data: {
      imgs: [
        landingHeader,
        landingContent,
        landingContent_v2,
        landingFooter,
        landingForm,
      ],
      description: 'Корпоративный лендинг для системы оценки контрагентов',

      hubLink: 'https://github.com/Xper0/resume',
      projectLink: 'https://uniscape.unicon-consulting.ru/',
    },
  },
];
