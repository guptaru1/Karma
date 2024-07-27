import React, { useState } from 'react';
import './Tabs.css';
import AboutUsSection from './About-Us';
import Products from './Products';
import Merch from './Merch';
import HandwrittenArticle from './Handwritten-blog';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab3');

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab1')}
        >
          Products
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab2')}
        >
          Merch
        </div>
        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab3')}
        >
         About Us
        </div>
        <div
          className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
          onClick={() => setActiveTab('tab4')}
        >
         Art of Ayurveda
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <div>
          <Products/>
          </div>}
        {activeTab === 'tab2' && <div>
          Neighborhood Stop
          <Merch/>
          </div>}
        {activeTab === 'tab3' && (
        <>
          <div></div>
          <section id="light-brown-section" className="light-brown-section">
            <AboutUsSection />
          </section>
        </>
      )}
      {activeTab === 'tab4' && <div>
      <HandwrittenArticle/>
          </div>}
     
      </div>
    </div>
  );
};

export default Tabs;