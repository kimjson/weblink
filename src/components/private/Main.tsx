import React from 'react';

import Layout from '../base/Layout';
import Item from '../base/Item';
import {useItems} from '../../hooks';
import {Item as ItemModel} from '../../types';

import './Main.css';
import FirebaseListLoader from '../base/FirebaseLoader';

interface Props {
  uid: string;
}

function Main({uid}: Props) {
  const [itemList, loading, error] = useItems(uid);
  return (
    <Layout title="리스트">
      <div className="Main">
        <FirebaseListLoader<ItemModel> loading={loading} error={error} documentList={itemList}>
          {(documentList) => (
            <>{documentList.map((document, index) => <Item key={index} {...document} isLast={index === documentList.length - 1} />)}</>
          )}
        </FirebaseListLoader>
      </div>
    </Layout>
  );
}

export default Main;
