import React, { useState } from "react";
import styles from "./admin.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/libs/firebase/firebase";

const AdminScreen = ({ session }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  console.log(session);

  const handleAdminLogin = async () => {
    //  try{
    setError(null);
    setIsLoading(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(user);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.AdminScreen}>
      <CustomContainer>
        <div className={styles.wrap}>
          {session ? (
            <CustomButton
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
            </CustomButton>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAdminLogin();
              }}
            >
              <h2>Admin Login</h2>
              <CustomInput
                placeholder="Email"
                // type="email"
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
              <CustomInput
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, password: e.target.value }));
                }}
              />
              <CustomButton
                variant={1}
                //   onClick={}
                isLoading={isLoading}
              >
                Sign In
              </CustomButton>
              {error && <p>Error</p>}
            </form>
          )}
        </div>
      </CustomContainer>
    </div>
  );
};

export default AdminScreen;
