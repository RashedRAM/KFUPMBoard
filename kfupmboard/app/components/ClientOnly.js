'use client';

import { useEffect, useState } from 'react';

//client only component
export default function ClientOnly({ children }) {
    
  //in order to check if client and respond accordingly
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });


  return ( 
    <>
      {isClient ? <div>{children}</div> : null}
    </>
  );
};