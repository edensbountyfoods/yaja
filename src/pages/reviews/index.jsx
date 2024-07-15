import ReviewsScreen from "@/components/screens/reviews/reviews";
import { getAllData } from "@/libs/firebase/firebase";
import supabase from "@/utils/db";
import React, { useEffect, useState } from "react";

const ReviewsPage = ({ session }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await getAllData("reviews");
    setReviews(res);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <ReviewsScreen
      reviews={reviews}
      session={session}
      setReviews={setReviews}
    />
  );
};

export default ReviewsPage;

// export async function getServerSideProps() {
//   // Call the fetch method and passing
//   // the pokeAPI link

//   // Finally we return the result
//   // inside props as allPokemons
//   return {
//     props: { reviews: res?.data || [] },
//   };
// }
