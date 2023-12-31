import { Box, Link, ListItem, ListItemText, Typography } from '@mui/material';
import { getYear } from 'date-fns';
import RoomIcon from '@mui/icons-material/Room';
import { RecentSkill } from '../RecentSkillChip';
import { useTranslation } from 'react-i18next';
import { formatInterval } from '@/lib/format';

export interface WorkExperienceItemProps {
  id: string;
  company?: string;
  position: string;
  start: string;
  end?: string | null;
  homepage?: string;
  location?: string;
  stack?: string[];
  disabled?: boolean;
}
export const WorkExperienceItem = (props: WorkExperienceItemProps) => {
  const { company, position, start, end, homepage, location, stack, disabled } =
    props;
  const { t } = useTranslation();
  const isCurrent = !end && getYear(new Date(start)) < getYear(new Date());
  return (
    <ListItem
      disabled={disabled}
      sx={{
        borderStyle: 'solid',
        borderColor: isCurrent ? 'success.main' : 'transparent',
        borderWidth: '0px 0px 0px 2px',
        // paddingLeft: '8px',
      }}
    >
      <ListItemText
        primary={formatInterval(start, end)}
        secondary={
          <span>
            <span>
              {position}
              {company && ` ${t('at')} `}
              {homepage && (
                <Link href={homepage ? homepage : undefined}>{company}</Link>
              )}
              {!homepage && <span>{company}</span>}
            </span>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RoomIcon sx={{ height: '1rem', width: '1rem' }} />
              <Typography variant="caption">{location}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {stack?.map((label) => (
                <RecentSkill key={label} label={label} />
              ))}
            </Box>
          </span>
        }
      />
    </ListItem>
  );
};
