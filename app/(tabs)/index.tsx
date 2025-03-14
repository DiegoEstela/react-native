import { CounterScreen } from "@/src/presentation/screens/CounterScreen";
import { SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function HomeScreen() {
  return (
    <PaperProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
