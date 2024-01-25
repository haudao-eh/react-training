import styled from 'styled-components';
import { Select } from '@hero-design/react';

import { mediaQueries } from '@ehrocks/hero-theme';

export const Body = styled.div`
  text-align: left;
  padding: ${({ theme }) => theme.space.xxlarge}px
    ${({ theme }) => theme.space.xxlarge}px 0
    ${({ theme }) => theme.space.xxlarge}px;
  table tr td {
    vertical-align: middle;
  }
  .search-select {
    margin-bottom: ${({ theme }) => theme.space.medium}px;
    div[data-popper-reference-hidden] {
      ${mediaQueries.sm} {
        transform: translate(
          ${({ theme }) => theme.space.xxlarge}px,
          241px
        ) !important;
      }

      ${mediaQueries.md} {
        transform: translate(
          ${({ theme }) => theme.space.xxlarge}px,
          219px
        ) !important;
      }
    }
  }
`;

export const StyledSelectField = styled(Select)`
  width: calc(100% - 30px);
  display: inline-block;
  padding: 50px;
`;

export const StyledRemove = styled.a`
  display: inline-block;
  width: 30px;
  text-align: right;
  vertical-align: top;
  height: 36px;
  line-height: 36px;
`;

export const ROLE_OPTIONS = [
  { value: 'employee', text: 'Employee' },
  { value: 'employer', text: 'Admin' },
];
