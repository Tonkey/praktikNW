import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements';

import TimeRegistration from './src/view/Timeregistration'
import TimeOverview from './src/view/Timeoverview'
import Settings from './src/view/settings';

export const Tabs = TabNavigator({
    TimeRegistration: {
        screen: TimeRegistration,
        navigationOptions: {
            tabBarLabel: 'Tidsregistrering',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor} />
        }
    },
    TimeOverview: {
        screen: TimeOverview,
        navigationOptions: {
            tabBarLabel: 'Tidsoversigt',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor} />
        }
    },
    Setting: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Indstillinger',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor} />
        }
    }
},{tabBarPosition: 'bottom'})