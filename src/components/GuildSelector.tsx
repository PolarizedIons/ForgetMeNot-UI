/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useCallback, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GuildsState } from '../recoil/atoms/Guilds';
import { SelectedGuildIndex } from '../recoil/atoms/SelectedGuildIndex';
import { SelectedGuild } from '../recoil/selectors/SelectedGuild';
import { ChevronDown } from './icons/ChevronDown';

export const GuildSelector: FC = () => {
  const [open, setOpen] = useState(false);

  const guilds = useRecoilValue(GuildsState);
  const setSelectedGuildIndex = useSetRecoilState(SelectedGuildIndex);
  const selectedGuild = useRecoilValue(SelectedGuild);

  const toggleDropdown = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const setIndex = useCallback((index: number) => {
    setSelectedGuildIndex(index);
    setOpen(false);
  }, [setSelectedGuildIndex]);

  if (!guilds) {
    return null;
  }

  return (
    <div className="w-60 bg-slate-gray px-4 py-2 relative">
      <div onClick={toggleDropdown} className="flex items-center gap-4 cursor-pointer">
        <img src={selectedGuild?.iconUrl} alt={`${selectedGuild?.name}'s Icon'`} className="rounded-lg max-h-12" />
        {selectedGuild?.name}
        <ChevronDown className="w-5 h-5 ml-auto" />

      </div>
      {open && (
        <div className="absolute mt-4 flex flex-col gap-4 bg-pewter-blue left-0 right-0">
          {guilds.map((guild, i) => (
            guild.id !== selectedGuild?.id && (
            <div key={guild.id} className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-slate-gray" onClick={() => setIndex(i)}>
              <img src={guild.iconUrl} alt={`${selectedGuild?.name}'s Icon'`} className="rounded-lg max-h-12" />
              {guild.name}
            </div>
            )
          ))}
        </div>

      )}
    </div>
  );
};
