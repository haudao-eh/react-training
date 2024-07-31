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
    // Snowflakes using style prop
    <Card style={{ width: 200 }} /> // acceptable
    // Snowflakes using sx prop
    <Badge className="test" sx={{ mt: 10 }} /> {/* @snowflake-guard/none-css-classname */}
  </>;
};

export default Sample;
