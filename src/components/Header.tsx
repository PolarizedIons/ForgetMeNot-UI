import { FC } from 'react';
import { GuildSelector } from './GuildSelector';
import Logo from '../assets/forgetmenot-logo.png';

export const Header: FC = () => (
  <div className="bg-pewter-blue flex justify-between items-center p-6">
    <div className="text-4xl flex items-center gap-4">
      <img src={Logo} alt="ForgetMeNotBot's Logo" className="rounded-xl max-h-20" />
      ForgetMeNotBot
    </div>
    <GuildSelector />
  </div>
);
