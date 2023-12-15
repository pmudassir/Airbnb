import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");

  const oDataChanged = (category: string) => {};

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={oDataChanged} />,
        }}
      />
      <Listings />
    </View>
  );
};

export default Page;
