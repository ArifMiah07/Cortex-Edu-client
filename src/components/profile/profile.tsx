"use client";

import useUserStore, { IUser } from "@/stores/useStore";

export default function Profile() {
  const { user, setUser } = useUserStore();
  const handleLogin = () => {
    // Simulate a login process
    const newUser: IUser = { name: "John Doe", email: "john.doe@example.com" };
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="w-full min-h-screen items-center ">
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" />
        </form>
      </div>
    </div>
  );
}
