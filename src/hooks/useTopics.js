import { useEffect, useState } from 'react'
import { getAllTopics } from '../firebase/content'

export function useTopics() {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function fetchTopics() {
      setLoading(true)
      setError(null)

      try {
        const data = await getAllTopics()
        if (isMounted) {
          setTopics(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch topics')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchTopics()

    return () => {
      isMounted = false
    }
  }, [])

  return { topics, loading, error }
}
