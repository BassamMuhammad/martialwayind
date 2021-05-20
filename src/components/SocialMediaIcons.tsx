import * as React from "react"
import { SocialIcon } from "react-social-icons"

export const SocialMediaIcons = () => {
  return (
    <div>
      {[
        "https://facebook.com",
        "https://twitter.com",
        "https://youtube.com",
        "https://pinterest.com",
      ].map(item => (
        <SocialIcon
          key={item}
          url={item}
          style={{ height: 30, width: 30, marginRight: "10px" }}
        />
      ))}
    </div>
  )
}
