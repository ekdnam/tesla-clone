import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
                style={styles.image}>
            </ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $70,000</Text>
            </View>
            <StyledButton type="primary" text="Custom Order" onPress={() => console.warn("Custom order was pressed")}/>
            <StyledButton type="secondary" text="Existing Inventory" onPress={() => console.warn("Existing inventory was pressed")}/>
        </View>
    )
}

export default CarItem;
