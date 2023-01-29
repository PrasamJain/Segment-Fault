// import React from 'react'

// const ProfileBio = ({currentProfile}) => {
//     return (
//         <div>
//             <div>
//                 {
//                     currentProfile?.tags.length !== 0 ? (
//                         <>
//                             <h4>Tags watched</h4>
//                             {
//                                 currentProfile?.tags.map((tag) => (
//                                     <p key={tag}>{tag}</p>
//                                 ))
//                             }
//                         </>
//                     ) : (
//                         <p>0 tags watched</p>
//                     )
//                 }
//             </div>
//             <div>
//                 {
//                     currentProfile?.about ? (
//                         <>
//                             <h4>About</h4>
//                             <p>{currentProfile?.about}</p>
//                         </>
//                     ) : (
//                         <p>No bio found</p>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }

// export default ProfileBio
import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div className="profile-det">
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>
                &#x2705;
                {tag}
              </p>
            ))}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div className="profile-det">
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>&#x270D; {currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
