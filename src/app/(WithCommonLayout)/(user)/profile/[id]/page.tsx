/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */

import Profile from "@/src/components/Ui/Profile/profile";
import { useGetSingleUser } from "@/src/hooks/singleUse";
import { useGetUserPosts } from "@/src/hooks/userPosts";
interface IProps {
  params: {
    id: string;
  };
}
export default function ProfilePage({ params: { id } }: IProps) {
  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,
  } = useGetSingleUser(id as string);

  // Fetch user posts
  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
  } = useGetUserPosts(id as string);

  console.log("seee", postsData);

  // Handle loading states
  if (isUserLoading || isPostsLoading) {
    return <div>Loading...</div>;
  }

  // Handle error states
  if (userError) {
    return <div>Error loading user data.</div>;
  }

  if (postsError) {
    return <div>Error loading posts.</div>;
  }

  // If no user data is available
  if (!userData) {
    return <div>No user data available.</div>;
  }

  const profileData = userData.data;

  return (
    <>
      <Profile profileData={profileData}></Profile>
    </>
  );
}
