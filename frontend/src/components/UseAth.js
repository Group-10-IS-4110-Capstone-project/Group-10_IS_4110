import { useState, useEffect } from "react";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("hajdgv");
        setAuthenticated(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3001/verifytoken", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });

        if (response.ok) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          // Handle unauthorized access, e.g., redirect to login page
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  return authenticated;
};

export default useAuth;
