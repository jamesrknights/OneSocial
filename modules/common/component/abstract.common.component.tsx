
  /* React Native */
  import React from 'react';
  import { View } from 'react-native';

  /* Common */
  import { CommonComponent } from '@common/component/common.component';
  import { Props } from '@common/component/common.props';
  import { State } from '@common/component/common.state';


    class AbstractCommonComponent extends React.Component<State, Props> implements CommonComponent {

        constructor (props : Props) {
            super(props);
        }

        public setComponentState (state : State) {
            //sets state
        }

    }