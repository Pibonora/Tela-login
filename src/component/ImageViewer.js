import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ image }) {
  return (
    <Image source={image} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 100,
    borderRadius: 18,
  },
});
