import React from "react";
import userProfile from "../hooks/userProfile";

// Helper function to get the first letter of the username
const getInitials = (username) => {
  if (!username) return "";
  return username.charAt(0).toUpperCase();
};

const Profile = () => {
  const { profile, loading, error } = userProfile();

  if (loading) return <div className="p-4">Loading, please wait...</div>;
  if (error) return <div className="p-4">Error while loading profile...</div>;
  if (!profile) return <div className="p-4">No profile data available</div>;

  return (
    <div className="flex flex-col items-center p-4">
      {/* Top section: avatar, username, stats */}
      <div className="w-full max-w-3xl">
        {/* User info row */}
        <div className="flex items-center space-x-8">
          {/* Avatar with initials */}
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl text-white font-bold">
            {getInitials(profile.username)}
          </div>
          {/* Username and stats */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold">{profile.first_name}</h1>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">
                Edit profile
              </button>
            </div>
            <div className="flex space-x-8">
              <p>
                <span className="font-semibold">{profile.post_count}</span> posts
              </p>
              <p>
                <span className="font-semibold">{profile.follower_count}</span>{" "}
                followers
              </p>
              <p>
                <span className="font-semibold">{profile.following_count}</span>{" "}
                following
              </p>
            </div>
            {/* Bio */}
            <div>
              <p className="font-semibold">{profile.username}</p>
              <p className="text-sm text-gray-700">{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full max-w-3xl my-6 border-t border-gray-300" />

      {/* Posts grid/list */}
      <div className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        {profile.posts && profile.posts.length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {profile.posts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 p-4 flex flex-col items-start"
              >
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{post.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;




// import React from "react";
// import userProfile from "../hooks/userProfile";

// const Profile = () => {
//     const { profile, loading, error } = userProfile();

//     if (loading) return <div>Loading pleas wait...</div>
//     if (error) return <div>Error while loading profile...</div>
//     if (!profile) return <div>No profile Data Available</div>
  
//     return (
//       <>
//         <div>
//           <h1>User Profile</h1>
//           <p>Username: {profile.username}</p>
//           <p>Bio: {profile.bio}</p>
//           <p>Followers: {profile.follower_count}</p>
//           <p>Following: {profile.following_count}</p>
//           <p>Posts: {profile.post_count}</p>
//         </div>
  
//         <div>
//           <h2>User Posts</h2>
//           {profile.posts && profile.posts.length > 0 ? (
//             profile.posts.map(post => (
//               <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//               </div>
//             ))
//           ) : (
//             <p>No posts available.</p>
//           )}
//          </div>
//       </>
//     );
// }

// export default Profile