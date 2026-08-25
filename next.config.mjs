import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

// MDX v3 ships CommonMark only — without remark-gfm the reference tables in
// content/*.mdx render as raw pipe-delimited text.
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)
