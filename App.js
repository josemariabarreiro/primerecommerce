import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Home from "./src/screem/Home";
import Search from "./src/components/Search";
import Products from "./src/screem/Products";

export default function App() {
  return (
    <View>
      {/* <Home /> */}
      {/* <Search /> */}
      <Products category="smartphones" />
    </View>
  );
}

const styles = StyleSheet.create({});
