/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}
export interface UserOption {
  questionId: number;
  chosenOption: string;
}

type UserOptionContextType = {
  userOptions: Array<UserOption>;
  setUserOptions: React.Dispatch<React.SetStateAction<UserOption[]>>;
};

export const UserOptionsContext = createContext<UserOptionContextType | null>(
  null
);

const UserOptionProvider = ({ children }: Props) => {
  const [userOptions, setUserOptions] = useState<UserOption[]>([]);

  return (
    <>
      <UserOptionsContext.Provider value={{ userOptions, setUserOptions }}>
        {children}
      </UserOptionsContext.Provider>
    </>
  );
};

export const useUserOptions = () => {
  const userOptionsContext = useContext(UserOptionsContext);

  if (!userOptionsContext) {
    throw new Error("useUserOptions has to be used within UserOptionProvider");
  }
  return { userOptionsContext };
};

export default UserOptionProvider;
