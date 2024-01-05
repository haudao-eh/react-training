import {
  Card,
  SxObject,
  Typography,
  Box,
  Collapse,
  Icon,
  Grid,
  Button,
} from '@hero-design/react';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { AdvancedSearchTypes } from './types';
import AdvancedSearchTextInputField from './fields/AdvancedSearchTextInputField';

type AdvancedSearchSettingsProps = {
  sx?: SxObject;
  initialFilterValues: AdvancedSearchTypes;
  onSearch?: (params: AdvancedSearchTypes) => void;
};

const FilterBanner = styled.div<{ expanded: boolean }>`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
  }
  color: ${({ theme }) => theme.colors.disabledText};
  background-color: ${({ theme }) => theme.colors.defaultBackground};
  padding: ${({ theme }) => theme.space.small}px
    ${({ theme }) => theme.space.medium}px;
  border-top-left-radius: ${({ theme }) => theme.radii.base}px;
  border-top-right-radius: ${({ theme }) => theme.radii.base}px;
  border-bottom-left-radius: ${({ expanded, theme }) =>
    expanded ? 0 : theme.radii.base}px;
  border-bottom-right-radius: ${({ expanded, theme }) =>
    expanded ? 0 : theme.radii.base}px;
  cursor: pointer;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border: ${({ theme }) => theme.borderWidths.base}px solid
    ${({ theme }) => theme.colors.defaultBorder};
`;

const AdvancedSearchSettings = ({
  sx,
  initialFilterValues,
  onSearch,
}: AdvancedSearchSettingsProps) => {
  const [displayAdvancedFilter, setDisplayAdvancedFilter] = useState(true);
  const [advancedSearchValues, setAdvancedSearchValues] =
    useState<AdvancedSearchTypes>(initialFilterValues);

  const onFilterChange = useCallback(
    ({ key, value }: { key: keyof AdvancedSearchTypes; value: string }) => {
      setAdvancedSearchValues(prevValue => ({
        ...prevValue,
        [key]: value,
      }));
    },
    []
  );

  return (
    <Box sx={sx}>
      <FilterBanner
        onClick={() => setDisplayAdvancedFilter(prevValue => !prevValue)}
        expanded={displayAdvancedFilter}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon icon="funnel-filter" size="large" sx={{ mr: 'small' }} />
          <Typography.Text fontSize={16}>Advanced Search</Typography.Text>
        </Box>
        <Icon
          icon={displayAdvancedFilter ? 'single-up-arrow' : 'single-down-arrow'}
          size="large"
        />
      </FilterBanner>
      <Collapse open={displayAdvancedFilter}>
        <Card
          sx={{
            borderTop: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            pl: 'medium',
            pr: 'medium',
            pt: 'small',
            pb: 'small',
            height: 70,
          }}
        >
          <Grid sx={{ mb: 'medium' }}>
            <Grid.Row gutter={['medium', 'medium']}>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  type="number"
                  text="Current Job Title Weight"
                  htmlId="current_job_title"
                  value={advancedSearchValues?.current_job_title}
                  onChange={e =>
                    onFilterChange({
                      key: 'current_job_title',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  type="number"
                  text="Second Job Title Weight"
                  htmlId="second_job_title"
                  value={advancedSearchValues?.second_job_title}
                  onChange={e =>
                    onFilterChange({
                      key: 'second_job_title',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  type="number"
                  text="Applied Job Title Weight"
                  htmlId="applied_job_title"
                  value={advancedSearchValues?.applied_job_title}
                  onChange={e =>
                    onFilterChange({
                      key: 'applied_job_title',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  type="number"
                  text="Job Preference Weight"
                  htmlId="preferences_job_title"
                  value={advancedSearchValues?.preferences_job_title}
                  onChange={e =>
                    onFilterChange({
                      key: 'preferences_job_title',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  type="number"
                  text="Org Interest Weight"
                  htmlId="shown_interest_in_org"
                  value={advancedSearchValues?.shown_interest_in_org}
                  onChange={e =>
                    onFilterChange({
                      key: 'shown_interest_in_org',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  text="Organisation Id"
                  htmlId="organisation_id"
                  value={advancedSearchValues?.organisation_id}
                  onChange={e =>
                    onFilterChange({
                      key: 'organisation_id',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  text="Latitude"
                  htmlId="lat"
                  value={advancedSearchValues?.lat}
                  onChange={e =>
                    onFilterChange({
                      key: 'lat',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  text="Longitude"
                  htmlId="lng"
                  value={advancedSearchValues?.lng}
                  onChange={e =>
                    onFilterChange({
                      key: 'lng',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
              <Grid.Col span={[24, 24, 12, 12, 12]}>
                <AdvancedSearchTextInputField
                  text="Job Title"
                  htmlId="query"
                  value={advancedSearchValues?.query}
                  onChange={e =>
                    onFilterChange({
                      key: 'query',
                      value: e.target.value,
                    })
                  }
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
          <Box sx={{ textAlign: 'right' }}>
            <Button
              variant="text"
              icon="restart"
              text="Resette"
              onClick={() => setAdvancedSearchValues(initialFilterValues)}
            />
            <Button
              text="Search"
              onClick={() => onSearch?.(advancedSearchValues)}
              loading={false}
            />
          </Box>
        </Card>
      </Collapse>
    </Box>
  );
};

export default AdvancedSearchSettings;
