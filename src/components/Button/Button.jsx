import { MdMessage } from "react-icons/md"
import styles from "./Button.module.css"

export const Button = ({isOutline, icon, text, ...rest }) => {
  
  return (

    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {/* <MdMessage /> */}
        {icon}
        {text}
    </button>
  )
}
