import { useNavigate } from 'react-router-dom'

function useOpenWebDelayed(setLeftClicked, setRightClicked) {
  const navigate = useNavigate()

  const openWebDelayed = (url, delay = 1500) => {
    if (url === 'barcelona') setRightClicked(true)
    if (url === 'madrid') setLeftClicked(true)

    setTimeout(() => {
      navigate(`/${url}`)
    }, delay)
  }

  return openWebDelayed
}

export default useOpenWebDelayed
