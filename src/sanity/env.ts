export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-15'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
export const useCdn = false
