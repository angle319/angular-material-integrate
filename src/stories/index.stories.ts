import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, number, boolean, array, select, radios, color, date, button, object } from '@storybook/addon-knobs';
import { Welcome, Button } from '@storybook/angular/demo';
import { TableComponent } from 'library/material-lib/src/public-api';
import { TestLibModule } from './common-lib.module';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module).addDecorator(withKnobs)
  .add('with text', () => ({
    component: Button,
    props: {
      text: text('text', 'Hello Button'),
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('MaterialCommonLibModule', module)
  .addDecorator(withKnobs).addParameters({
    backgrounds: [
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ],
  })
  .add('Table', () => {
    return {
      moduleMetadata: {
        declarations: [TableComponent],
        imports: [TestLibModule]
      },
      template: `
      <mvb-list (onRowSelect)="onRowSelect($event)" [total]="total" [columnHeaders]="columnHeaders"
       [dataSource]="dataSource" class="w-100" (onLazyLoad)="onLazyLoad($event)">
        <ng-template mvbCol let-input cell="1" styleClass="a-col">
          <div style="color:wheat;width:50%;">{{input}}</div>
        </ng-template>
        <ng-template mvbCol let-input cell="2">
            <button> <fa-icon icon="edit"></fa-icon>{{input}}</button>
        </ng-template> 
        <ng-template mvbCol let-input cell="4" >
            <div style="color:aqua ;width:50% ;">{{input|date: 'yyyy-MM-dd HH:mm:ss'}}</div>
        </ng-template>
      </mvb-list>
      `,
      props: {
        dataSource: array('dataSource', [{ a: 'abc', b: '45545', c: '12d34', time: new Date() },
        { a: 'abc', b: '45545', c: '1234', time: new Date() }]),
        total: number('total', 20),
        columnHeaders: array('columnHeaders', ['a', 'b', 'c', 'time']),
        onLazyLoad: action(`when data load:`),
        onRowSelect: action(`select row:`)
      }
    };
  }, {
      notes: { markdown: ` ## how to use
${'```'}html
        <mvb-list (onRowSelect)="onRowSelect($event)" [total]="total" [columnHeaders]="columnHeaders"
          [dataSource]="dataSource" class="w-100" (onLazyLoad)="onLazyLoad($event)">
          <ng-template mvbCol let-input cell="1" styleClass="a-col">
            <div style="color:wheat;width:50% ;">{{input}}</div>
          </ng-template>
          <ng-template mvbCol let-input cell="2">
            <button> <fa-icon icon="edit"></fa-icon>{{input}}</button>
          </ng-template> 
          <ng-template mvbCol let-input cell="4" >
            <div style="color:aqua ;width:50% ;">{{input|date: 'yyyy-MM-dd HH:mm:ss'}}</div>
          </ng-template>
        </mvb-list>
${'```'}` }});
