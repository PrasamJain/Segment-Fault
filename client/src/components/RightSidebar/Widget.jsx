import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
const Widget = () => {
  return (
    <div className="widget">
      <h4>Featured Blogs</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>Must-read blogs for current web developer students</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            The Best Programming Languages You Can Use for Web Development
            (2023)
          </p>
        </div>
      </div>
      <h4>Trending</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
            Decoding the impact of a global recession on booming Indian economy
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>Why is market research important for web development?</p>
        </div>
        {/* <div className='right-sidebar-div-2'>
                    <img src={blackLogo} alt="pen" width='18'/>
                    <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
                </div> */}
      </div>
      <h4>FAQs about us</h4>
      <div className=" faq">
        <div className="right-sidebar-div-2 ">
          {/* <p>1</p> */}
          <p>1. How to add question?</p>
        </div>
        <div className="right-sidebar-div-2 ">
          {/* <p>2</p> */}
          <p>
            2. Can one user contribute more than one answwer to same question?
          </p>
        </div>
        <div className="right-sidebar-div-2 ">
          {/* <p>3</p> */}
          <p>3. Can someone else view my profile?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
