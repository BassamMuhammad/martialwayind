import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./CartAndFavTable.css"

interface Props {
  data: { edge: any; quantity?: number }[]
}

export const CartAndFavTable: React.FC<Props> = ({ data }) => {
  return data.length === 0 ? (
    <div>Nothing in Cart :(</div>
  ) : (
    <table>
      <thead>
        <tr>
          <td>No.</td>
          <td>PRODUCT</td>
          <td>PRICE</td>
          {data[0].quantity && <td>QUANTITY</td>}
          {data[0].quantity && <td>SUBTOTAL</td>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.edge.node.name}>
            <td>{index + 1}</td>
            <td>
              <GatsbyImage
                image={getImage(item.edge.node.image[0])!}
                alt={item.edge.node.name}
              />
              <div>{item.edge.node.name}</div>
            </td>
            <td>${item.edge.node.price}</td>
            {item.quantity && <td>{item.quantity}</td>}
            {item.quantity && <td>${item.edge.node.price * item.quantity}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
