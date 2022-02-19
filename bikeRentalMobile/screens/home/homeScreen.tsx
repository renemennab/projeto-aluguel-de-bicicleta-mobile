import { ScrollView, Text, SafeAreaView, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Lamp from "./lamp";
import Logo from "./logo";
import { getLoggedInUser } from "../../common/utils";
import OptionsList from "./optionsList";

function HomePage(): JSX.Element {
  const isUserLoggedIn = getLoggedInUser();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.HomeScreenContainer}>
        {isUserLoggedIn ? null : (
          <>
            <View style={styles.Banner}>
              <Logo />
            </View>
            <View style={styles.LampContainer}>
              <Lamp />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={styles.LampContainer}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <MaterialIcons name="attach-money" size={84} color="black" />
            </View>
          </>
        )}
        <OptionsList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;
const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  HomeScreenContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  Banner: {
    width: "100%",
    height: 400,
    backgroundColor: "#f7d08a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  LampContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
});
