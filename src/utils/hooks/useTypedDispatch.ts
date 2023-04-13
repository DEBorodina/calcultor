import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/store/types';

export const useTypedDispatch: () => AppDispatch = useDispatch;
