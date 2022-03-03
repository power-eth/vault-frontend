import React, { useState } from 'react';
import data2 from '../../data2';
import './UsersCollection.css';

function UsersCollectionInfo() {
    const [userNfts, setUserNfts] = useState(data2);
    return (
        <>
            <h3 className='job'> My NFTs:</h3>
            <div className="collection">
              {userNfts.map((nft) => {
                const { title, number, image, id } = nft;
                return (
                  <article key={id} className='collection-element'>
                      <div className="image-container">
                        <div className="collection-info">
                          <input type='checkbox'/>
                          <h4 className='author'>{id}. {title} #{number}</h4>
                        </div>
                        <img  src={image} alt={title}/> 
                      </div>
                      
                  </article>
                )
            })}
            </div>
            <button>Deposit</button>
            
        </>
        
      );
}

export default UsersCollectionInfo;