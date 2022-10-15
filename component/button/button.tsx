import { TouchableOpacity, Text } from "react-native";
import styles from "../button/buttonstyle";
interface TouchableButtonProps {
  text?: string;
  onPress?: () => any;
}
const TouchableButton = ({
  text = "Get Started",
  onPress = () => {},
}: TouchableButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textstyle}>{text}</Text>
    </TouchableOpacity>
  );
};
export default TouchableButton;
