import { WithRouterProps } from '@/hocs/withRouter/types';

export interface ListItemProps {
  to: string;
  children: string;
}

export interface NavBarLinkProps {
  active: string;
}

export type ListItemWithRouterProps = WithRouterProps<ListItemProps>;
