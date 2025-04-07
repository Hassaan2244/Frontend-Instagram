import React from "react";
import userProfile from "../hooks/userProfile";
import Posts from "../components/Posts";
import Sidebar from "../components/sidebar";

// Helper function to get the first letter of the user's first name
const getInitials = (first_name) => {
  if (!first_name) return "";
  return first_name.charAt(0).toUpperCase();
};

const Profile = () => {
  const { profile, loading, error } = userProfile();

  if (loading) return <div className="p-4 text-white">Loading, please wait...</div>;
  if (error) return <div className="p-4 text-white">Error while loading profile...</div>;
  if (!profile) return <div className="p-4 text-white">No profile data available</div>;

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-4">
        <div className="w-full max-w-3xl mx-auto">
          {/* Profile header */}
          <div className="flex items-center space-x-8 mb-8">
            {/* Avatar with initials */}
            <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
              {getInitials(profile.first_name)}
            </div>
            {/* Username and stats */}
            <div>
              <h1 className="text-2xl font-semibold">{profile.first_name}</h1>
              <div className="flex space-x-8 mt-2">
                <p>
                  <span className="font-semibold">{profile.post_count}</span> posts
                </p>
                <p>
                  <span className="font-semibold">{profile.follower_count}</span> followers
                </p>
                <p>
                  <span className="font-semibold">{profile.following_count}</span> following
                </p>
              </div>
              {/* Bio */}
              <div className="mt-2">
                <p className="text-sm text-gray-300">{profile.bio}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="w-full my-6 border-t border-gray-700" />

          {/* Posts Grid */}
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
