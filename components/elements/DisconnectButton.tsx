import { useAuth } from 'hooks/useAuth'

export function DisconnectButton() {
  const { logout, isConnected } = useAuth()
  if (!isConnected) return null
  return (
    <button
      className=" hover:text-[#FF89DE]"
      onClick={() => logout()}>
      Disconnect
    </button>
  )
}
