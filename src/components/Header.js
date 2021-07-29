import React from "react";
import NavBar from "./NavBar";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
