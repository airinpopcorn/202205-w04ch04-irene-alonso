import React from 'react';

export function Key({ item }: { item: string }) {
  return (
    <>
      <button className={item === 'delete' ? 'key big' : 'key'}>{item}</button>
    </>
  );
}
