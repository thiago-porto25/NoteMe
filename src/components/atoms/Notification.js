import styled from "styled-components"
import { motion } from "framer-motion"
import { useEffect } from "react"

const NotificationContainer = styled(motion.div)`
  position: fixed;
  z-index: 10;
  bottom: 2rem;
  left: calc(50% - 13rem);
  width: 26rem;
  min-height: 4rem;
  height: fit-content;
  background-color: var(--${({ color }) => color});
  border-radius: 5px;
  display: flex;
  align-items: center;

  p {
    padding: 0 1rem;
    color: white;
    text-align: justify;
  }
`

export default function Notification({ message, setMessage }) {
  useEffect(() => {
    const handleClick = () => setMessage(null)

    document.addEventListener("click", handleClick)

    return () => document.removeEventListener("click", handleClick)
  }, [setMessage])

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 50,
        stiffness: 500
      }
    },
    exit: {
      y: "100vh",
      opacity: 0
    }
  }

  return (
    <NotificationContainer
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      color={message.type}
    >
      <p>{message.text}</p>
    </NotificationContainer>
  )
}
