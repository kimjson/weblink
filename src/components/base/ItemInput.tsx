import React from 'react';

interface Props {
  value: string;
  onChange(newValue: string): void;
}

export default function ItemInput({value, onChange}: Props) {
  return <input type="text" autoFocus placeholder="입력 후 Enter를 누르면 추가됩니다" value={value} onChange={e => onChange(e.target.value)} />
}