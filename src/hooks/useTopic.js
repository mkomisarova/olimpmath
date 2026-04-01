import { useEffect, useState } from 'react'
import { getTopicBySlug } from '../firebase/content'

export function useTopic(slug) {
  const [topic, setTopic] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) {
      setTopic(null)
      setLoading(false)
      setError(null)
      return
    }

    let isMounted = true

    async function fetchTopic() {
      setLoading(true)
      setError(null)

      try {
        const data = await getTopicBySlug(slug)
        if (isMounted) {
          setTopic(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch topic')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchTopic()

    return () => {
      isMounted = false
    }
  }, [slug])

  return { topic, loading, error }
}
