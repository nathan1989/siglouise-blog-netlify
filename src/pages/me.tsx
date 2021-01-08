import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Me() {
  const url = "/me";
  const title = "Who I am";
  const props = { url, title }
  const imageWidth = 690 / 2
  return (
    <Layout>
      <BasicMeta {...props} />
      <OpenGraphMeta {...props} />
      <TwitterCardMeta {...props} />
      <div className="container">
        <div className="about-container">
          <div className="image-container">
            <img 
              src="/images/about.jpg"
              width={imageWidth}
              height={1102 / 2}
            />
          </div>
          <div>
            <p>I’m Sigourney, a twenty-eight year old wife and mama of two boys living in Auckland, NZ.</p>
            <p>Creating memories and documenting them along the way has always been something I’m passionate about.</p>
            <p>I’m a down to earth, loving, caring and sentimental person and marrying the love of my life who gave me the best gift of all, our baby boy Mason has made me the happiest I have ever been.</p>
            <p>Welcome to my space where I save those precious chapters that are filling up my story. This is the raw and real me, the high and lows, the best times and the challenges. I’m one for rambling at the best of times, I’m obsessed with photos and I’m all about being honest, genuine and inspiring others to be the best version of themselves. If my experiences and thoughts can help, inspire or just make someone feel good that makes my heart happy.</p>
            <p>Instagram is where you will find us most, sharing our daily. You will be part of many honest chats, loads of Mason spam, my passion for womens health and our play based learning approach. Inspiring others through simple play ideas. I thoroughly enjoy connecting with other likeminded people.</p>
            <p>I thank you for joining me and welcome you into my journey through motherhood and marriage.</p>
            <p>If you wish to contact me flick me a message via my <a href="https://www.facebook.com/sigourneylouiseblog">Facebook</a> or <a href="https://www.instagram.com/sigourney_louise/">Instagram</a> pages, I would love to hear from you!</p>
          </div>
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
        .image-container {
          text-align: center;
          margin-bottom: 15px;
          height: 200px;
          overflow: hidden;
        }
        @media (min-width: 769px) {
          .about-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .image-container {
            flex: 0 0 ${imageWidth}px;
            height: auto;
            overflow: visible;
            margin-bottom: 0;
            margin-right: 15px;
          }
        }
      `}</style>
    </Layout>
  );
}
