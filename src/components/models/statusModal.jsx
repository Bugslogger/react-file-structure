import React, { memo } from "react";

const VARIANTS = {
  warning: {
    iconBg: "bg-yellow-100",
    iconText: "text-yellow-600",
    buttonBg: "bg-yellow-600 hover:bg-yellow-500",
    title: "Deactivate account",
    content:
      "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
    buttonLabel: "Deactivate",
    iconPath:
      "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
  },
  success: {
    iconBg: "bg-green-100",
    iconText: "text-green-600",
    buttonBg: "bg-green-600 hover:bg-green-500",
    title: "Activate account",
    content:
      "Are you sure you want to activate your account? All of your data will be recovered. This action cannot be undone.",
    buttonLabel: "Activate",
    iconPath: "m4.5 12.75 6 6 9-13.5",
  },
  error: {
    iconBg: "bg-red-100",
    iconText: "text-red-600",
    buttonBg: "bg-red-600 hover:bg-red-500",
    title: "Delete account",
    content:
      "Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.",
    buttonLabel: "Delete",
    iconPath:
      "M12 9v3.75m0 3.75h.007v.008H12v-.008Zm0-12a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
  },
};

const StatusModal = ({
  variant = "warning",
  title,
  content,
  handleClose,
  onClick,
  buttonLabel,
  open,
  isIcon,
  isButton,
  isCloseButton,
}) => {
  const config = VARIANTS[variant] || VARIANTS.warning;

  return (
    <div
      className={`transition ${
        open
          ? "block ease-out duration-300 opacity-100"
          : "hidden ease-in duration-200 opacity-0"
      } relative z-10`}
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`transition ${
          open
            ? "ease-out duration-300 opacity-100"
            : "ease-in duration-200 opacity-0"
        } fixed inset-0 bg-gray-500/75 transition-opacity`}
        aria-hidden="true"
      ></div>

      <div
        className={`transition ${
          open
            ? "ease-out duration-300 opacity-100"
            : "ease-in duration-200 opacity-0"
        } fixed inset-0 z-10 w-screen overflow-y-auto`}
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform opacity-100 translate-y-0 sm:scale-100 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {isIcon && (
                  <div
                    className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${config.iconBg} sm:mx-0 sm:size-10`}
                  >
                    <svg
                      className={`size-6 ${config.iconText}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={config.iconPath}
                      />
                    </svg>
                  </div>
                )}
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-base font-semibold text-gray-900"
                    id="dialog-title"
                  >
                    {title || config.title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {content || config.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {isButton && (
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={onClick}
                  type="button"
                  className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto ${config.buttonBg}`}
                >
                  {buttonLabel || config.buttonLabel}
                </button>
                {isCloseButton && (
                  <button
                    onClick={handleClose}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(StatusModal);
