import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Dropdown = ({
  isImage,
  image,
  buttonText,
  className,
  isOverrideClass,
  callback,
  options = [
    {
      label: "Account Settings",
      value: "Account Settings",
      isLink: false,
      isDisabled: true,
      id: 0,
    },
    { label: "Support", value: "Support", isLink: false, id: 1 },
    { label: "License", value: "License", isLink: false, id: 2 },
    { value: "Sign out", label: "Sign out", isLink: false, id: 3 },
  ],
  onChange,
}) => {
  const [open, setopen] = useState(false);

  useEffect(() => {
    if (isImage) {
      if (!image) {
        throw new Error(
          "isImage prop of Dropdown component is true, but image prop is undefined"
        );
      }
    }
  }, [isImage]);

  function handleClickList(value) {
    const isDisabled = value?.isDisabled || false;
    if (isDisabled) return;
    setopen(!open);
    if (typeof onChange === "function") {
      onChange(value, index);
    }
  }

  return (
    <div className="cursor-pointer">
      <div class="relative inline-block text-left">
        {isImage ? (
          <img
            onClick={() => {
              setopen(!open);
              if (typeof callback === "function") {
                callback();
              }
            }}
            className={
              isOverrideClass
                ? className
                : `inline-block size-10 rounded-full ring-2 ring-white cursor-pointer ${className}`
            }
            src={image}
            alt=""
          />
        ) : (
          <button
            onClick={() => {
              setopen(!open);
              if (typeof callback === "function") {
                callback();
              }
            }}
            className={
              isOverrideClass
                ? className
                : `${className} px-5 text-sm font-medium py-1 ring-1 ring-gray-100 rounded cursor-pointer`
            }
          >
            {"Login" || buttonText}
          </button>
        )}

        <div
          className={`transition ${
            open
              ? "duration-100 transform ease-out opacity-100 scale-100"
              : "duration-75 transform ease-in opacity-0 scale-95"
          } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div class="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" --> */}
            {options.map((value, index) => {
              if (
                value.id === undefined ||
                value.id === "" ||
                value.id === null
              ) {
                console.warn("Each child in dropdown must have a uniqe id");
              }
              {
                /* if (
                typeof value.id !== "string" ||
                typeof value.id !== "number" ||
                typeof value.id !== undefined ||
                typeof value.id !== null
              ) {
                throw new Error(
                  "The value of `id` must be a string or a number."
                );
              } */
              }

              return value?.isLink ? (
                <Link
                  key={value.value}
                  to={value.url}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  {value.label}
                </Link>
              ) : (
                <div
                  key={value.value}
                  onClick={() => handleClickList(value)}
                  className={`block px-4 py-2 text-sm  ${
                    value?.isDisabled
                      ? "text-gray-200"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                  }`}
                  role="menuitem"
                  tabIndex="-1"
                  id={value.id + "-" + index}
                >
                  {value.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  isImage: PropTypes.bool,
  image: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  isOverrideClass: PropTypes.bool,
  callback: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
};

export default memo(Dropdown);
