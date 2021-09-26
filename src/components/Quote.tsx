import { FC } from 'react';
import { QuoteInfo } from '../models/responses/QuoteInfo';

type QuoteProps = {
    quote: QuoteInfo;
}

export const Quote: FC<QuoteProps> = (props) => {
  const { quote } = props;
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
    </div>
  );
};
