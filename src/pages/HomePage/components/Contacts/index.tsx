import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SvgIcon, Typography } from '@mui/material';

import GridContainer from 'components/core/layouts/Grid/GridContainer';
import GridItem from 'components/core/layouts/Grid/GridItem';

const Contacts = () => {
  const contactsInfo = [
    {
      icon: WhatsAppIcon,
      number: '89060733437',
      color: '#008000',
    },
    {
      icon: TelegramIcon,
      number: 'https://t.me/xper0',
      color: '#539eec',
    },
  ];
  return (
    <GridItem>
      <GridContainer width={'100%'}>
        {contactsInfo.map((contact) => (
          <GridItem key={contact.number}>
            <SvgIcon
              component={contact.icon}
              sx={{
                color: contact.color,
              }}
            />
            <Typography>{contact.number ?? ''}</Typography>
          </GridItem>
        ))}
      </GridContainer>
    </GridItem>
  );
};

export default Contacts;
