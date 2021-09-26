import { FC } from 'react';

export type RouteDefinition = {
    path: string;
    component: FC<any>;
    allowAnonymous?: boolean;
}
