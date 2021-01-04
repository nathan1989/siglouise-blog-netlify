import React from "react"
import Instagram from "../assets/instagram-alt.svg"
import config from "../lib/config"

export function SocialList({}) {
  return (
    <div>
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block
        }
        a:not(:last-child) {
          margin-right: 2em
        }
      `}</style>
    </div>
  )
}
