import React from 'react';
import { Button, Empty, Card, Badge } from '@hero-design/react';
import styled from 'styled-components';

// Snowflakes using styled-components;
const StyledButton = styled(Button)`
  padding: 10px;
`;

const StyledLinkButton = styled(Button.Link)`
  color: red;
`;

const { Link } = Button;
const StyledLink = styled(Link)`
  color: red;
`;

const customBtnStyles = {
  padding: 30,
};

const badgeStyles = {
  pt: 10,
};

const styles = {
  btn: {
    padding: 30,
  },
  badge: {
    pt: 10,
  },
};

const Sample = () => {
  <>
    <StyledButton />
    <StyledLinkButton />
    <StyledLink />
    // Snowflakes using classname
    <Button className="custom-class" />
    <Button.Link className="custom-class" />
    <Link className="custom-class" />
    // Snowflakes using style prop
    <Button style={{ width: 200 }} /> // acceptable
    <Empty style={{ width: 200 }} />
    <Card style={{ width: 200 }} /> // acceptable
    <Card.Header style={{ width: 200 }} />
    <Button style={customBtnStyles} />
    <Button style={{ ...customBtnStyles }} />
    <Button style={styles.btn} />
    <Button style={{ ...styles.btn }} />
    // Snowflakes using sx prop
    <Badge sx={{ mt: 10 }} /> // acceptable
    <Badge.Count sx={{ mt: 10 }} />
    <Badge sx={badgeStyles} />
    <Badge sx={{ ...badgeStyles }} />
    <Badge sx={styles.badge} />
    <Badge sx={{ ...styles.badge }} />
  </>;
};

export default Sample;
