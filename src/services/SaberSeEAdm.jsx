import { useSelector } from 'react-redux'
import { saberSeEadm } from './saberSeEadm'

const SaberSeEAdm = () => {
    const userAdm = saberSeEadm(useSelector(state => state.user.currentUser), "tipo")
  return (userAdm)
}

export default SaberSeEAdm