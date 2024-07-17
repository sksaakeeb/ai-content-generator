"use client";
import React, { useState } from "react";
import SerachSection from "./_components/SerachSection";
import TemplateListSection from "./_components/TemplateListSection";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      {/* Search section */}
      <SerachSection onSearchInput={(value: string) => setUserSearchInput(value)} />

      {/* Template list section */}
      <TemplateListSection userSearchInput = {userSearchInput}/>
    </div>
  );
}

export default Dashboard;
