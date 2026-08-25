import type { MDXComponents } from 'mdx/types'

/**
 * Required by @next/mdx in the App Router. Anchors get target/rel here so
 * individual articles never have to repeat it.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...props }) => {
      const external = typeof href === 'string' && href.startsWith('http')
      return (
        <a href={href} {...(external ? { rel: 'noopener' } : {})} {...props}>
          {children}
        </a>
      )
    },
    table: ({ children, ...props }) => (
      <div className="table-scroll">
        <table {...props}>{children}</table>
      </div>
    ),
    ...components,
  }
}
