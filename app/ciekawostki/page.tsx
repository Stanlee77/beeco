import React, { useEffect, useState } from 'react';
import clientPromise from '@/lib/mongodb';

const Ciekawostka = () => {
  const [content, setContent] = useState('');
  
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const client = await clientPromise;
      const db = client.db('products');
      const toGuess = await db.collection('items').aggregate([{ $sample: { size: 1 } }]).toArray();
      setContent(toGuess[0]?.content || '');
    };

    fetchData();
  }, []);

  return <div className="">{content}</div>;
};

export default Ciekawostka;
