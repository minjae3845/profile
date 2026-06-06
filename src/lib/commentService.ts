import { staticComments } from '@/lib/staticData'

const localComments: any[] = [...staticComments]
let nextId = localComments.length + 1

export const fetchCommentsService = async () => [...localComments]

export const likeCommentService = async (id: number, currentLikes: number) => {
  const newLikes = (currentLikes || 0) + 1
  const comment = localComments.find((c) => c.id === id)
  if (comment) comment.likes = newLikes
  return newLikes
}

export const uploadCommentImageService = async (_image: File): Promise<string | null> => {
  return null
}

export const createCommentService = async ({
  name,
  comment,
  imageUrl,
}: {
  name: string
  comment: string
  imageUrl: string | null
}) => {
  const newComment = {
    id: nextId++,
    name,
    comment,
    image_url: imageUrl,
    likes: 0,
    replies: [],
    is_pinned: false,
    created_at: new Date().toISOString(),
  }
  localComments.unshift(newComment)
  return newComment
}
