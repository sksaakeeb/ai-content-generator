import React from "react";
import SerachSection from "./_components/SerachSection";
import TemplateListSection from "./_components/TemplateListSection";

function Dashboard() {
  return (
    <div>
      {/* Search section */}
      <SerachSection />

      {/* Template list section */}
      <TemplateListSection />
    </div>
  );
}

export default Dashboard;
