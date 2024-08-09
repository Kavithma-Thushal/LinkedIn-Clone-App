import Icon from "react-native-vector-icons/Ionicons"

export default function CustomIcon({ name, size, color, ...props }) {
  return (
    <Icon name={name} size={size} color={color} {...props} />
  )
}