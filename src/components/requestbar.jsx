const suggestions = [
    {
      id: 1,
      username: "iamhashiraziz_",
      bio: "Followed by _zaki_butt + 2 more",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      username: "xabbi37",
      bio: "Suggested for you",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      username: "akeelhaidr",
      bio: "Followed by imtiazzafarr + 1 more",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      username: "_hassne",
      bio: "Followed by sherry_s6 + 4 more",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      username: "ismi7810",
      bio: "Suggested for you",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const Suggestions = () => {
    return (
      <div className="text-white p-4 w-80">
        {/* User Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">zaha_rehman10</p>
              <p className="text-gray-400 text-sm">Zaha Rehman</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm font-semibold">Switch</button>
        </div>
        
     
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-400 text-sm font-semibold">Suggested for you</p>
            <button className="text-white text-sm font-semibold">See All</button>
          </div>
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <img
                  src={user.profilePic}
                  alt={user.username}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">{user.username}</p>
                  <p className="text-gray-400 text-xs">{user.bio}</p>
                </div>
              </div>
              <button className="text-blue-500 text-xs font-semibold">Follow</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Suggestions;