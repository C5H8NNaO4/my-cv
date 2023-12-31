import { experience } from '@/lib/util';
import { benefits } from './benefits';
import { projects } from './projects';
import { skills } from './skills';
import { social } from './social';
import { learnings } from './learnings';
import { education } from './education';
import { workHistory } from './workHistory';
import { Skill } from '@/types';

const address = import.meta.env.VITE_ADDRESS;
const name = 'Moritz Roessler';
const phone = '+4917620350106';
const email = 'moritz.roessler@gmail.com';
const position = 'Senior Fullstack Developer';
const salary = 100000;

const city = 'Freiburg';
const country = 'Germany';
const continent = 'Europe';

export const data = {
  address,
  // Comment out "position" to show the position of the last work history entry.
  education,
  social,
  position,
  learnings,
  salary,
  name,
  phone,
  email,
  city,
  country,
  continent,
  benefits,
  skills,
  projects,
  workHistory,
};

/**
 * Precomputes all experiences to provide them to i18n's interpolation.
 * This allows you to reference the experience of a skill in your translated texts.
 * Such as your bio. Reference them using e.g. {{experience.JavaScript}}
 */
export const experienceBySkill = data.skills.reduce(
  (acc: Record<string, number>, cur: Skill): Record<string, number> => {
    acc[cur.name.replace(/\./g, '-')] = Math.round(experience(cur) * 2) / 2;
    return acc;
  },
  {} as Record<string, number>
);
export default data;
