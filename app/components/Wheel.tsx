import { useRef, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
  Dimensions,
} from 'react-native';

const wheelArray = [
  'question',
  'skip',
  'battle',
  'task',
  'question',
  'task',
  'battle',
  'skip',
  'question',
  'task',
];

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const NUMBER_OF_SEGMENTS = wheelArray.length;
const SEGMENT_ANGLE = 360 / NUMBER_OF_SEGMENTS;

const Wheel = ({ setSelectedType }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const currentRotation = useRef(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomSegment = Math.floor(Math.random() * NUMBER_OF_SEGMENTS);
    const extraRotation = 360 * 5;
    const targetRotation = currentRotation.current + extraRotation + randomSegment * SEGMENT_ANGLE;

    Animated.timing(spinValue, {
      toValue: targetRotation,
      duration: 3000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      const normalizedAngle = targetRotation % 360;
      const index = Math.round(((360 - normalizedAngle) % 360) / SEGMENT_ANGLE) % NUMBER_OF_SEGMENTS;

      currentRotation.current = targetRotation;
      setTimeout(() => {
        setSelectedType(wheelArray[index]);
        setIsSpinning(false);
      }, 1000)
    });
  };

  const rotate = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'extend',
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/triangle.png')}
        style={{
          width: 65,
          height: 55,
          position: 'absolute',
          left: '50%',
          top: 0,
          transform: [{ translateX: -65 }],
          zIndex: 10,
        }}
      />

      <Animated.Image
        source={require('@/assets/images/wheel.png')}
        style={[
          styles.wheel,
          {
            transform: [{ rotate }],
          },
        ]}
      />

      <TouchableOpacity onPress={spinWheel} disabled={isSpinning}>
        <Image
          source={require('@/assets/images/buttons/spin.png')}
          style={{ width: 139, height: 46, marginTop: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Wheel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wheel: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.9,
  },
});

