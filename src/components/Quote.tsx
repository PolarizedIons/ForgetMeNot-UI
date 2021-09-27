import {
  FC, useCallback, useMemo, MouseEvent,
} from 'react';
import { QuoteInfo } from '../models/responses/QuoteInfo';

type QuoteProps = {
    quote: QuoteInfo;
}

export const Quote: FC<QuoteProps> = (props) => {
  const { quote } = props;

  const quoteUrl = useMemo(() => `https://discord.com/channels/${quote.guildId}/${quote.channelId}/${quote.messageId}`, [quote.channelId, quote.guildId, quote.messageId]);

  const openLink = useCallback((e: MouseEvent) => {
    e.preventDefault();
    window.location.href = quoteUrl.replace('https://', 'discord://');

    setTimeout(() => {
      window.location.href = quoteUrl;
    }, 100);
  }, [quoteUrl]);

  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex gap-4 items-center">
        {quote.author && <img src={quote.author.profileUrl} alt={`${quote.author.username}'s Profile`} className="rounded-full w-16" />}
        <div>
          <div className="text-2xl font-bold">{quote.author?.username || 'Someone'}</div>
          <div>{new Date(quote.createdAt).toLocaleString()}</div>
        </div>
      </div>
      <div className="mt-4 text-xl">{quote.quote}</div>
      <a className="block text-right underline text-slate-gray cursor-pointer" onClick={openLink} href={quoteUrl}>Open in Discord &rarr;</a>
    </div>
  );
};
