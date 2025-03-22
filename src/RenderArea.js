import React from 'react';
import Forest from './areas/Forest';
import Town from './areas/Town';
import Cave from './areas/Cave';

function RenderArea({ currentArea, setCurrentArea }) {
  switch (currentArea) {
    case 'forest':
      return <Forest setCurrentArea={setCurrentArea} />;
    case 'town':
      return <Town setCurrentArea={setCurrentArea} />;
    case 'cave':
      return <Cave setCurrentArea={setCurrentArea} />;
    default:
      return <Forest setCurrentArea={setCurrentArea} />;
  }
}

export default RenderArea;
