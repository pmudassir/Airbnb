import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import listingsData from "@/assets/data/airbnb-listings.json";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("window");

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing: Listing = (listingsData as any[]).find(
    (item) => item.id === id
  );

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          source={{ uri: listing.xl_picture_url }}
          style={styles.image}
        />
      </Animated.ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 300,
    width,
  },
});
