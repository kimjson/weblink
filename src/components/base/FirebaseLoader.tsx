import React, {ReactElement} from 'react';

interface Props<T> {
  documentList: T[] | undefined;
  loading: boolean;
  error: Error | undefined;
  children: (documentList: T[]) => ReactElement;
}
export default function FirebaseListLoader<T>({documentList, loading, error, children}: Props<T>) {
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
  if (loading) return <div>로딩 중...</div>;
  return children(documentList as T[]);
}