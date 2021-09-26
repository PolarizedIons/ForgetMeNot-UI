/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SelectedChannelIndex } from '../recoil/atoms/SelectedChannelIndex';
import { SelectedGuild } from '../recoil/selectors/SelectedGuild';
import { SelectedGuildChannels } from '../recoil/selectors/SelectedGuildChanels';

export const ChannelSelector: FC = () => {
  const selectedGuild = useRecoilValue(SelectedGuild);
  const selectedGuildChannels = useRecoilValue(SelectedGuildChannels);
  const [channelIndex, setChannelIndex] = useRecoilState(SelectedChannelIndex);

  useEffect(() => {
    setChannelIndex(0);
  }, [selectedGuild, setChannelIndex]);

  return (
    <div className="flex flex-col gap-4">
      {selectedGuildChannels?.map((channel, i) => (
        <div key={channel.id} onClick={() => setChannelIndex(i)} className={`cursor-pointer hover:text-black ${i === channelIndex ? 'text-black font-bold' : 'text-slate-gray'}`}>
          #
          {channel.name}
        </div>
      ))}
    </div>
  );
};
