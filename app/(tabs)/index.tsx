import { Link } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Booking</Link>
    </View>
  );
};

export default Page;