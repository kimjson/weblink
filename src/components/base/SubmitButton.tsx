import React from 'react';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

export default function SubmitButton({onClick, disabled}: Props) {
  return <button type="submit" onClick={onClick} disabled={disabled}>추가</button>
}