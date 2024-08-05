import React from 'react';
import styled from 'styled-components';
import { Button, Typography, Box, ButtonProps } from '@hero-design/react';

import emptyBanner from './assets/empty-banner.png';

const EmptyImg = styled.img`
  height: 172px;
  margin-bottom: ${({ theme }) => theme.space.small}px;
`;

interface EmptyTableViewProps {
  message: string;
  buttonText: ButtonProps['text'];
  buttonIcon?: ButtonProps['icon'];
  onButtonClick: ButtonProps['onClick'];
}

const EmptyTableView = ({
  message,
  buttonText,
  buttonIcon = 'moneybag-outlined',
  onButtonClick,
}: EmptyTableViewProps) => (
  <Box sx={{ textAlign: 'center' }}>
    <EmptyImg src={emptyBanner} alt="Empty" />
    <Typography.Text
      fontSize={14}
      sx={{ color: 'bodyText', mb: 'xxlarge', whiteSpace: 'pre-wrap', backgroundColour: 'lightPrimary' }} // @snowflake-guard/snowflake-approved-by-andromeda
    >
      {message}
    </Typography.Text>

    <Button
      icon={buttonIcon}
      onClick={onButtonClick}
      text={buttonText}
    />
  </Box>

);

export default EmptyTableView;
