import data from '@/data';
import { Box, Card, CardHeader, List } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WorkExperienceItem } from './WorkExperienceItem';
import { getYear } from 'date-fns';

export const WorkExperienceCard = ({ slice }: { slice: number[] }) => {
  const { t } = useTranslation();
  return (
    <Card square>
      <CardHeader title={t('Work History')} />
      <Box>
        <List>
          {data.workHistory
            .slice()
            .sort((a, b) => a.start.localeCompare(b.start))
            .slice(...slice)
            .map((entry) => {
              return (
                <WorkExperienceItem
                  key={entry.start + '-' + entry.end}
                  {...entry}
                />
              );
            })}
          <WorkExperienceItem
            id="future"
            company={t('your company')}
            position={
              data.position || data.workHistory.at(-1)?.position || 'Freelancer'
            }
            location="Europe (probably Germany)"
            start={getYear(new Date()) + 2 + ''}
            end="?"
          />
        </List>
      </Box>
    </Card>
  );
};
