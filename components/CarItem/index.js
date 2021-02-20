import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = ({ name, tagline, taglineCTA, image }) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
                style={styles.image}>
            </ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}{' '}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton type="primary" text="Custom Order" onPress={() => console.warn("Custom order was pressed")} />
                <StyledButton type="secondary" text="Existing Inventory" onPress={() => console.warn("Existing inventory was pressed")} />
            </View>
        </View>
    )
}

export default CarItem;
