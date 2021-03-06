import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { PostContent, listPostContent } from "../lib/posts";
import Link from "next/link";
import DateComponent from '../components/Date'

type Props = {
  posts: PostContent[];
};

export default function Index({ posts }: Props) {
  const toDate = (d: any) => new Date(d)
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <img 
            src="/images/logo.jpg"
            className={'logo'}
          />
          <h2>Capturing the chapters that make up our story. The real side of motherhood.</h2>
          <h3>Latest post</h3>
          {posts && posts[0] && <>
            <p><Link href={"/posts/" + posts[0].slug}><a>{posts[0].title} | <DateComponent date={toDate(posts[0].date)} /></a></Link></p>
          </>}
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .logo {
          max-width: 100%;
          height: auto;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          .logo {
            max-width: 769px;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, 1);
  return {
    props: {
      posts,
    },
  };
};
