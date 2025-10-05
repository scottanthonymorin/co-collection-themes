import React from 'react';
import { Widget } from '../../src';
import WidgetContainer from '../_decorators/WidgetContainer';

import item from '../_mocks/gtrex-item-with-widget.json';

const props = {
  items: item.custom_fields['widget_viz-library_items'],
  widgetTheme: 'viz-database-beta',
};

export default {
  title: 'Base Components/Gtrex Widget',
  component: Widget,
  decorators: [(Story) => <WidgetContainer>{Story()}</WidgetContainer>],
};

export const Default = () => <Widget {...props} />;
