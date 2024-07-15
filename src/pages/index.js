import HomePage from "@/components/screens/home/home";
import { getAllData } from "@/libs/firebase/firebase";
import { useEffect, useState } from "react";

const Home = ({}) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await getAllData("reviews");
    setReviews(res);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return <HomePage reviews={reviews || []} />;
};

export default Home;
