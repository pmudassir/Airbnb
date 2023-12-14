import { Link } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Booking</Link>
      <Link href={"/listing/122"}>listing Details page</Link>
    </View>
  );
};

export default Page;