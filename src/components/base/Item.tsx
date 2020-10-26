import React from 'react';

import {Item as ItemModel} from '../../types';

import './Item.css';

type Props = ItemModel & {isLast: boolean};

function Item({title, priority, isLast}: Props) {
  return (
    <span className={`Item Item-${priority}`}>{title}{isLast ? '' : ' | '}</span>
  );
}

export default Item;
