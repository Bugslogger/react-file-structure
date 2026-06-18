import React, { memo } from "react";
import { IoMdClose } from "react-icons/io";
import { FiLayers } from "react-icons/fi";
import SurfaceCard from "../shared/SurfaceCard";
import SidebarSection from "./SidebarSection";
import { DASHBOARD_SIDEBAR } from "../../../utils/dashboard.config";

const DashboardSidebar = ({ isMobile = false, onClose }) => {
  return (
    <div className="dashboard-sidebar h-full">
      <SurfaceCard className="h-full overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 pt-4 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl border border-[color:var(--dashboard-border)] bg-[color:var(--dashboard-surface-soft)] text-[color:var(--dashboard-primary)]">
                <FiLayers className="text-lg" />
              </div>
              <div className="dashboard-fs-14 dashboard-fw-600 text-[color:var(--dashboard-text)]">
                {DASHBOARD_SIDEBAR.brand}
              </div>
            </div>
            {isMobile ? (
              <button
                type="button"
                onClick={onClose}
                className="flex size-9 items-center justify-center rounded-full text-[color:var(--dashboard-muted)] transition hover:bg-[rgba(17,24,39,0.06)]"
                aria-label="Close sidebar"
              >
                <IoMdClose />
              </button>
            ) : null}
          </div>

          <div className="flex-1 overflow-y-auto px-3 pb-4">
            <div className="space-y-4">
              {DASHBOARD_SIDEBAR.sections.map((section) => (
                <SidebarSection
                  key={section.title || "primary"}
                  section={section}
                  onNavigate={onClose}
                />
              ))}
            </div>
          </div>
        </div>
      </SurfaceCard>
    </div>
  );
};

export default memo(DashboardSidebar);
