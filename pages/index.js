import { auth, login } from "@/firebase/Firebase";
import { setUser } from "@/redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
    const email = 'Wesman687@gmail.com'
    const password = 'Pothead420!'
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (!currentUser) return;
        dispatch(
          setUser({
            username: currentUser.email.split("@")[0],
            name: currentUser.displayName,
            email: currentUser.email,
            uid: currentUser.uid,
            photoUrl: currentUser.photoURL,
          })
        );
      });
      return unsubscribe;
    });
    if (!user.email)
    return (
      <>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button onClick={()=>login(email, password)} className="bg-white p-2 px-4 rounded-lg">
              Login with Google
            </button>
          </div>
        </div>
      </>
    );
    else {
      return (
        <>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          Logged in as {user.email}
        </div>
        </div>
        </>
      )
    }
  }

  

