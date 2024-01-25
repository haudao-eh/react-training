import React from 'react';
import { Intl } from 'redux-intl';
import { connect } from 'react-redux';
import { compose, setDisplayName, withProps } from 'recompose';
import { Grid, Button } from '@hero-design/react';

import { organisationScopePathSelector } from 'eh-utils/scopePathSelectors';

import LinkComponent from './LinkComponent';

const styles = {
  description: {
    // Need to replace by HD color
    // eslint-disable-next-line @ehrocks/eh-linter/avoid-using-absolute-color
    color: 'orangered',
    fontWeight: 600,
  },
  marginButton: {
    marginTop: 15,
  },
};

export const PureTwoFaRequired = ({ accountSecurityPath }: any) => (
  <Grid.Row>
    <Grid.Col span={[24, 24, 24, 24, 24]} className="center">
      <div style={styles.description}>
        {Intl.formatMessage({ id: 'twoFaRequired' })}
      </div>
      {/* @ts-expect-error TS(2739) FIXME: Type '{ children: Element; to: any; }' is missing ... Remove this comment to see the full error message */}
      <LinkComponent to={accountSecurityPath}>
        <Button
          intent="primary"
          text={Intl.formatMessage({ id: 'button.gotoAccountSettings' })}
          style={styles.marginButton}
        />
      </LinkComponent>
    </Grid.Col>
  </Grid.Row>
);

const mapStateToProps = (state: any) => ({
  organisationPath: organisationScopePathSelector(state),
});

// @ts-expect-error TS(2345) FIXME: Argument of type '({ organisationPath }: { organis... Remove this comment to see the full error message
export const prepareProps = withProps(({ organisationPath }) => ({
  accountSecurityPath: `${organisationPath}/account_security`,
}));

export const enhance = compose(
  setDisplayName('TwoFaRequired'),
  connect(mapStateToProps, {}),
  prepareProps
);

export default enhance(PureTwoFaRequired);
