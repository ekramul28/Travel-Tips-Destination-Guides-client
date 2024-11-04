/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
// import Profile from "@/src/components/Ui/Profile/profile";
import { getUserByPost } from "@/src/services/post";
import { getSingleUser } from "@/src/services/user";
import Profile from "../_components/Profile/profile";

export default async function ProfilePage({ params }: any) {
  const { id } = params;
  // Fetch the user and posts data
  const userData = await getSingleUser(id);

  const posts = await getUserByPost(id);

  // Handle if no user data is available
  if (!userData || !userData.data) {
    return <div>No user data available.</div>;
  }

  const profileData = userData.data;
  const postsData = posts?.data || [];

  return (
    <>
      <Profile postsData={postsData} profileData={profileData} />
    </>
  );
}
