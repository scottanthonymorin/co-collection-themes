import React from 'react';
import { Widget } from '../../src';
import WidgetContainer from '../_decorators/WidgetContainer';

const props = {
  itemsIsArray: true,
  widgetStaticItems: [
    '68cd4f6f5e86d3b99a707a23',
    '68c1de045e86d3b99a705fac',
    '68c1da165e86d3b99a705d8f',
    '68c1da165e86d3b99a705d6e',
    '68c1da155e86d3b99a705d4b',
  ],
  widgetTheme: 'gtrex',
};

export default {
  title: 'Base Components/Gtrex Widget',
  component: Widget,
  decorators: [(Story) => <WidgetContainer>{Story()}</WidgetContainer>],
};

export const Default = () => <Widget {...props} />;
