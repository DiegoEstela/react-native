import { CounterScreen } from "@/src/presentation/screens/CounterScreen";
import IonIcon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function HomeScreen() {
  return (
    <PaperProvider settings={{ icon: (props) => <IonIcon {...props} /> }}>
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
