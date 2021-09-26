/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  FC, useCallback, useEffect, useState,
} from 'react';
import { useRecoilValue } from 'recoil';
import { ChannelSelector } from '../components/ChannelSelector';
import { Loader } from '../components/Loader';
import { Quote } from '../components/Quote';
import { QuoteInfo } from '../models/responses/QuoteInfo';
import { SelectedChannelIndex } from '../recoil/atoms/SelectedChannelIndex';
import { SelectedGuild } from '../recoil/selectors/SelectedGuild';
import { QuotesService } from '../services/QuotesService';

const PAGE_SIZE = 15;

export const Quotes:FC = () => {
  const selectedGuild = useRecoilValue(SelectedGuild);
  const selectedChannelIndex = useRecoilValue(SelectedChannelIndex);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageNumber, setPageNumber] = useState(0);
  const [quotes, setQuotes] = useState<QuoteInfo[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    setPageNumber(0);
    setQuotes([]);
    setShowLoadMore(true);
  }, [selectedGuild, selectedChannelIndex]);

  useEffect(() => {
    if (!selectedGuild || !selectedGuild.channels[selectedChannelIndex]) {
      return;
    }

    setLoading(true);
    QuotesService.getQuotes(selectedGuild.id, { channelId: selectedGuild.channels[selectedChannelIndex].id, pageNumber, pageSize: PAGE_SIZE }).then((res) => {
      if (res.length === 0 || res.length < PAGE_SIZE) {
        setShowLoadMore(false);
      }
      if (pageNumber === 0) {
        setQuotes(res);
      } else {
        setQuotes((prev) => [...prev, ...res]);
      }
      setLoading(false);
    });
  }, [pageNumber, selectedChannelIndex, selectedGuild]);

  const loadMore = useCallback(() => {
    setPageNumber((prev) => prev + 1);
  }, []);

  return (
    <div className="flex-grow flex gap-4">
      <div className="w-32 flex-shrink-0">
        <ChannelSelector />
      </div>

      <div className="flex-grow">
        {loading && <Loader />}
        {!loading && quotes.length === 0 && (<div className="h-full flex justify-center items-center text-4xl">There doesn&apos;t seem to be anything here</div>)}
        {!loading && (
        <>
          <div className="grid grid-cols-3 gap-8">{quotes.map((quote) => <Quote key={quote.id} quote={quote} />)}</div>
          {showLoadMore && <div className="text-center underline text-xl font-bold my-4 cursor-pointer" onClick={loadMore}>Load More</div>}
        </>
        )}
      </div>
    </div>
  );
};
