import React, { ReactElement, ReactNode } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
interface Props {
  heading?: string | ReactNode
  title?: string | ReactNode
  content?: any
  footer?: ReactNode
  image?: ReactElement
}
const Card = (props: React.PropsWithChildren<Props>) => {
  const { heading, content, footer, image, title } = props
  return (
    <div className="bg-white p-4 mx-auto max-content-w border rounded-md border-gray-300 shadow-lg">
      {heading && <h1 className="text-center">{heading}</h1>}
      <div className="mt-5 flex justify-between items-start">
        {image && (
          <div className="w-56 mt-10 flex-shrink-0 flex-col  items-center flex justify-center">
            {image}
          </div>
        )}
        <div className="px-5">
          {title && <h2 className="font-bold mb-3">{title}</h2>}
          {content ?? props.children ?? ""}
        </div>
      </div>
      <div className="text-right">{footer}</div>
    </div>
  )
}

export default Card
