import { FC } from 'react';
import { Header } from './components/Header';
import { Router } from './Router';

export const App: FC = () => (
  <div className="w-full min-h-screen bg-off-white text-black font-light flex flex-col">
    <Header />
    <div className="flex-grow py-4 px-6 flex">
      <Router />
    </div>
  </div>
);
