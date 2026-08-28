import React from 'react';
import styles from "./ChallengePage.module.css";

export const ShopCard = () => {
  const handleOpenShop = () => {
    console.log("Shop opened!");
  };

  return (
    <div className={`${styles.bigCard} ${styles.shopBox || ''}`}>
      
      {}
      <h4 className={styles.dailyTitle}>
        <span style={{ color: '#ff9800' }}>Ant Shop</span>
      </h4>
      <span className={styles.dailyCountdown}>
        New customization items available!
      </span>

      {}
      <div className={styles.dailyInfoBar}>
        <div className={styles.dailyInfoBlock}>
          <div className={styles.challengeInfo}>
            <div className={styles.challengeName}>
              <span>Customizations</span>
            </div>
            {}
            <div style={{ color: '#a0aec0', fontSize: '13px', marginTop: '4px' }}>
              Unlock unique ant skins, trail colors, and base themes.
            </div>
          </div>
          
          {}
          <div className={styles.dailyRecords}>
            <div className={styles.challengeWR}>
              Skins: <span style={{ color: '#fff', fontWeight: 'bold' }}>12 Available</span>
            </div>
            <div className={styles.challengePR}>
              Your Balance: <span style={{ color: '#ff9800', fontWeight: 'bold' }}>0 🐜</span>
            </div>
          </div>
        </div>

        {}
        <div className={styles.challengeButtons}>
          <button 
            onClick={handleOpenShop}
            style={{
              background: '#ff9800',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase',
              fontSize: '13px'
            }}
          >
            Enter Shop
          </button>
        </div>
      </div>

      {}
      <div 
        style={{
          height: '60px',
          background: 'linear-gradient(90deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.2) 50%, rgba(255,152,0,0.1) 100%)',
          borderRadius: '4px',
          marginTop: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed rgba(255,152,0,0.3)'
        }}
      >
        <span style={{ fontSize: '20px' }}>MasterOfAWolf was here</span>
      </div>

    </div>
  );
};
