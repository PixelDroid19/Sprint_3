import React from "react";

export const Modals = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return [isOpen, showModal, hideModal, setIsOpen];
};
