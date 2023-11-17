import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  durStr,
  experience,
  getExperienceColor,
  recentSkill,
  skill,
} from '@/lib/util';
import data from '@/data';
import { Avatar, Chip, Tooltip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const RecentSkill = ({ label }: { label: string }) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      title={clsx({
        [durStr(experience(skill(data.skills, label)) || 7, true) + '.']:
          experience(skill(data.skills, label)) >= 7,
        [durStr(5, true) + '.']:
          experience(skill(data.skills, label)) >= 5 &&
          experience(skill(data.skills, label)) < 7,
        [t('Recent experience')]: recentSkill(data.workHistory, label),
        [t('Part of my stack')]: data.skills.find((s) => s.name === label)
          ?.stack,
      })}
    >
      <Chip
        size="small"
        avatar={
          recentSkill(data.workHistory, label) ? (
            <Avatar sx={{ background: 'transparent' }}>
              <StarIcon
                sx={{
                  fill: (theme) => getExperienceColor(label, theme),
                }}
              />
            </Avatar>
          ) : undefined
        }
        sx={{
          borderColor: data.skills.find((s) => s.name === label)?.stack
            ? 'warning.light'
            : undefined,
          borderWidth: data.skills.find((s) => s.name === label)?.stack
            ? '0px 0px 2px 0px'
            : '0px',
          borderStyle: 'solid',
        }}
        label={label}
      />
    </Tooltip>
  );
};
