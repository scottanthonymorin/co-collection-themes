import React from 'react';
import { AfricanGivingTraditionsCard } from '../src';
import { africanGivingTraditionsItem } from './_mocks/item';
import CardContainer from './_helpers/CardContainer';

export default {
  title: 'Cards/African Giving Traditions',
  component: AfricanGivingTraditionsCard,
};

export const Default = () => (
  <CardContainer>
    <AfricanGivingTraditionsCard
      item={africanGivingTraditionsItem}
      itemLink={africanGivingTraditionsItem.link}
    />
  </CardContainer>
);
