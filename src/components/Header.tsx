"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

type HeaderProps = {};

const Header = ({}: HeaderProps): React.ReactElement => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <header>
      <Button onClick={changeTheme}>Change Theme</Button>
    </header>
  );
};

export default Header;
