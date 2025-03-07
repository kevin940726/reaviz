import React from 'react';
import { storiesOf } from '@storybook/react';
import { VennDiagram } from './VennDiagram';
import { number, object, text, select } from '@storybook/addon-knobs';
import { schemes } from '../common/color';
import { VennSeries } from './VennSeries';
import { VennArc } from './VennArc';
import { Stripes } from '../common/Mask';

storiesOf('Charts/Venn Diagram', module)
  .add('Simple', () => {
    const height = number('Height', 450);
    const width = number('Width', 450);
    const color = select('Color Scheme', schemes, 'cybertron');
    const data = object('Data', [
      { key: ['A'], data: 12 },
      { key: ['B'], data: 12 },
      { key: ['A', 'B'], data: 2 }
    ]);

    return (
      <VennDiagram
        height={height}
        width={width}
        data={data}
        series={<VennSeries colorScheme={color} />}
      />
    );
  })
  .add('Large Offsets', () => (
    <VennDiagram
      height={450}
      width={450}
      data={[
        { key: ['A'], data: 50 },
        { key: ['B'], data: 12 },
        { key: ['A', 'B'], data: 5 }
      ]}
    />
  ))
  .add('Long Text', () => (
    <VennDiagram
      height={250}
      width={250}
      data={[
        { key: ['Department of Defense'], data: 50 },
        { key: ['Office of President'], data: 50 },
        { key: ['Department of Defense', 'Office of President'], data: 25 }
      ]}
    />
  ))
  .add('Many Intersections', () => (
    <VennDiagram
      height={450}
      width={450}
      data={[
        { "key": ["A"], "data": 12 },
        { "key": ["B"], "data": 12 },
        { "key": ["C"], "data": 12 },
        { "key": ["D"], "data": 12 },
        { "key": ["A", "B"], "data": 2 },
        { "key": ["B", "C"], "data": 2 },
        { "key": ["A", "C"], "data": 5 },
        { "key": ["A", "B", "C"], "data": 10 },
        { "key": ["B", "D"], "data": 1 },
        { "key": ["D", "A"], "data": 1 },
        { "key": ["D", "A", "B"], "data": 1 }
      ]}
    />
  ))
  .add('No Intersections', () => (
    <VennDiagram
      height={450}
      width={450}
      data={[
        { key: ['A'], data: 22 },
        { key: ['B'], data: 12 },
        { key: ['C'], data: 13 },
        { key: ['D'], data: 22 }
      ]}
    />
  ))
  .add('Mask', () => (
    <VennDiagram
      height={450}
      width={450}
      series={<VennSeries arc={<VennArc mask={<Stripes />} strokeWidth={1} initialOpacity={.9} activeOpacity={1} />} />}
      data={[
        { key: ['A'], data: 12 },
        { key: ['B'], data: 12 },
        { key: ['A', 'B'], data: 2 }
      ]}
    />
  ))
  .add('No Fill', () => (
    <VennDiagram
      height={450}
      width={450}
      series={<VennSeries arc={<VennArc strokeWidth={5} fill="transparent" />} />}
      data={[
        { key: ['A'], data: 12 },
        { key: ['B'], data: 12 },
        { key: ['A', 'B'], data: 2 }
      ]}
    />
  ))
  .add('No Animation', () => (
    <VennDiagram
      height={450}
      width={450}
      series={<VennSeries animated={false} />}
      data={[
        { key: ['A'], data: 12 },
        { key: ['B'], data: 12 },
        { key: ['A', 'B'], data: 2 }
      ]}
    />
  ))
  .add('Autosize', () => (
    <div style={{ width: '50vw', height: '50vh', border: 'solid 1px red' }}>
      <VennDiagram
        data={[
          { key: ['A'], data: 12 },
          { key: ['B'], data: 12 },
          { key: ['A', 'B'], data: 2 }
        ]}
      />
    </div>
  ));
