import { CounterScreen } from "@/src/presentation/screens/CounterScreen";
import IonIcon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { BoxScreen } from "@/src/presentation/screens/BoxScreen";
import FlexScreen from "@/src/presentation/screens/FlexScreen";

export default function HomeScreen() {
  return (
    <PaperProvider settings={{ icon: (props) => <IonIcon {...props} /> }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlexScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
