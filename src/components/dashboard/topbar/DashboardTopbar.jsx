import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { FiBell, FiMenu, FiSettings, FiUser } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import TopbarActionButton from "./TopbarActionButton";
import TopbarIconButton from "./TopbarIconButton";
import TopbarSearch from "./TopbarSearch";
import { DASHBOARD_TOPBAR } from "../../../utils/dashboard.config";
import NotificationPopup from "../notifications/NotificationPopup";

const DashboardTopbar = ({ onOpenMenu }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsRef = useRef(null);

  const toggleNotifications = useCallback(() => {
    setIsNotificationsOpen((current) => !current);
  }, []);

  const closeNotifications = useCallback(() => {
    setIsNotificationsOpen(false);
  }, []);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsNotificationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="dashboard-topbar">
      <div className="flex h-full items-center justify-between gap-4 px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMenu}
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-xl border border-[color:var(--dashboard-border)] bg-[color:var(--dashboard-surface)] text-[color:var(--dashboard-text)]"
            aria-label="Open sidebar"
          >
            <FiMenu className="text-base" />
          </button>
          <div className="hidden dashboard-fs-14 dashboard-fw-600 text-[color:var(--dashboard-muted)] lg:block">
            <span>Pages</span>
            <span className="mx-2">/</span>
            <span className="font-semibold text-[color:var(--dashboard-text)]">
              Dashboard
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TopbarSearch placeholder={DASHBOARD_TOPBAR.searchPlaceholder} />
          <TopbarActionButton
            label={DASHBOARD_TOPBAR.builderLabel}
            className="border-pink-500 bg-white text-pink-500 hover:bg-pink-50"
          />
          <TopbarIconButton Icon={FaStar} className="gap-3 px-4">
            <span>{DASHBOARD_TOPBAR.starLabel}</span>
            <span className="rounded-md bg-[rgba(17,24,39,0.06)] px-2 py-0.5 text-xs font-semibold">
              {DASHBOARD_TOPBAR.starCount}
            </span>
          </TopbarIconButton>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-[color:var(--dashboard-border)] bg-[color:var(--dashboard-surface)] text-[color:var(--dashboard-text)]"
            aria-label="Settings"
          >
            <FiSettings />
          </button>
          <div ref={notificationsRef} className="relative">
            <button
              type="button"
              onClick={toggleNotifications}
              className={`inline-flex size-10 items-center justify-center rounded-xl border border-[color:var(--dashboard-border)] bg-[color:var(--dashboard-surface)] text-[color:var(--dashboard-text)] transition ${
                isNotificationsOpen
                  ? "border-pink-300 ring-4 ring-pink-100"
                  : "hover:bg-[color:var(--dashboard-surface-soft)]"
              }`}
              aria-label="Notifications"
              aria-expanded={isNotificationsOpen}
              aria-haspopup="menu"
            >
              <FiBell />
            </button>
            {isNotificationsOpen ? (
              <NotificationPopup className="origin-top-right" />
            ) : null}
          </div>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--dashboard-border)] bg-[color:var(--dashboard-surface)] text-[color:var(--dashboard-text)]"
            aria-label="Account"
          >
            <FiUser />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(DashboardTopbar);
