import Hero from "../../components/Hero/Hero"
import './Home.css'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
const Home = () => {
  const menuItems=[
    "fruit tea",
    "stormy",
    "milk tea",
    "cheese cream",
    "coffee",
    "yakult",

  ]
  const feeds=[
    {
      type:"image",
      image:"insta_feed_1.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
    {
      type:"image",
      image:"insta_feed_2.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
    {
      type:"image",
      image:"insta_feed_3.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
    {
      type:"video",
      image:"insta_feed_4.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
    {
      type:"image",
      image:"insta_feed_5.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
    {
      type:"image",
      image:"insta_feed_6.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
    {
      type:"video",
      image:"insta_feed_7.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
    {
      type:"image",
      image:"insta_hero_4.png",
      comments:1,
      likes:13,
      caption:"We have two new holiday season drinks available as stormies or hot 🔥! Peppermint chocolate & brown cinnamon sugar chocolate 🍫💕"

    },
  ]
  return (
    <div>
      <Hero/>
      <div className="about_us">
        <h1>About R&B Tea</h1>
        <p>We pride ourselves in sourcing high-quality ingredients from around the world such as premium tea leaves from Taiwan, matcha from Japan and fresh kumquat juice from Vietnam. Each drink is carefully crafted with excellence and always from fresh fruit. Now R&B Tea has more than 1500 stores globally in Taiwan, Singapore, Australia, China, Vietnam and USA.</p>
        <div className="specs_container">
<div className="spec">
    <img src="./images/spec_1.png" alt="" />
</div>
<div className="spec">
    <img src="./images/spec_2.png" alt="" />
</div>
<div className="spec">
    <img src="./images/spec_3.png" alt="" />
</div>





        </div>
      </div>
      <div style={{width:"100%"}} className="flex ">
      <span  className="remove_in_mobile w-20 "></span>
      <div className="explore_menu">
      
      <h1 className="main_heading">Explore our menu</h1>
      <div className="menu_container">
{
menuItems.map((item,index)=>{
  return(
    <div className="menu_item" key={index}>
      <img src={`./images/${item}.png`} alt="" />
      <h2 className="text">{item}</h2>
      <button className="hover_button">SEE MORE </button>
    </div>
  )
})
}
<p></p>
<button className="view_menu_btn">View Menu</button>
      </div>
    </div>
      </div>
    <div className="mobile_app_intro">
    <div className="mobile_app_container flex w-full  justify-center gap-10">

    <img src="./images/mobile_cover.jpg" alt=""  className="flex "/>
    <div className="content  flex-col gap-7 ">
      <h1>R&B USA Mobile App</h1>
      <p className="w-96">We are proud to announce the launch of our new Mobile App coming soon. It’s a convenient way to order ahead and pay right on your phone. Download today on Apple App Store and Google Play Store!</p>
    </div>
    </div>
    </div>
<div className="instafeed">
  <span className="mainHeading">
    <h1>
      #rbtea
    </h1>
    <h1>
      #rbteausa
    </h1>
  </span>
  <div className="feeds">
{
  feeds.map((feed,index)=>{
    return(
      <div className="feed" key={index}>
        <img src={`./images/${feed.image}`} alt="" />
        <div className="content">
          <div className="info">
          <div className="likes">
<span>

<FaRegHeart  className="like_icon"/>
</span>
<span>
  {feed.likes}
</span>


          </div>
          <div className="comments">
          <span>
          <FaRegComment className="comment_icon" />

          </span>
<span>
  {feed.comments}
</span>
            
          </div>
        </div>
        <div className="caption">
          <p>{feed.caption}</p>
        </div>
      </div>
      </div>
    )
  })
}
  </div>
</div>
    <div className="join_us_newsletter">
      <h1>Join our newsletter</h1>
      <p>For the latest launches, exclusive promotions, and insider news!</p>
      <form >

      <input type="email" placeholder="Email" />
      <button>Subscribe</button>
      </form>
    </div>
    </div>
  )
}

export default Home