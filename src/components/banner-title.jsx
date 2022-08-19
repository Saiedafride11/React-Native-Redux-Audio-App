import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import { colors } from '../theme';
import Text from './text/text';

export default function BannerTitle() {
    return (
        <View style={styles.container}>
            <Image style={{height: 50, width: 300}} source={require('../../assets/images/audiophile.png')} />
            {/* <Image resizeMode="cover" style={{height: 180, width: 200}} source={{uri : 'https://picsum.photos/200'}}/> */}
            <Text>HI</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
