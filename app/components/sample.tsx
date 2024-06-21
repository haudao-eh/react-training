import React from 'react';
import { Button, Empty, Card, Badge } from '@hero-design/react';

// Snowflakes using styled-components;

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
    // Snowflakes using classname
    <Button className="custom-class" />
    // Snowflakes using style prop
    <Card style={{ width: 200 }} /> // acceptable
    // <Card.Header style={{ width: 200 }} />
    // Snowflakes using sx prop
    <Badge sx={{ mt: 10 }} /> // acceptable
    // <Badge.Count sx={{ mt: 10 }} />
  </>;
};

export default Sample;
