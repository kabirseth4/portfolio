interface FinderNavButtonsProps {
  disableButtons: {
    back: boolean;
    forward: boolean;
  };
  navFuncs: {
    back: () => void;
    forward: () => void;
  };
}

export const FinderNavButtons = ({
  navFuncs,
  disableButtons,
}: FinderNavButtonsProps) => {
  return (
    <div className="flex items-center">
      <button
        className="flex h-7 w-8 items-center justify-center rounded hover:bg-[#45414a] disabled:bg-transparent"
        onClick={navFuncs.back}
        disabled={disableButtons.back}
      >
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.6875 7.35938C0.6875 7.26042 0.705729 7.16927 0.742188 7.08594C0.778646 6.9974 0.833333 6.91667 0.90625 6.84375L7.10156 0.78125C7.24219 0.645833 7.41146 0.578125 7.60938 0.578125C7.74479 0.578125 7.86458 0.609375 7.96875 0.671875C8.07812 0.734375 8.16406 0.820312 8.22656 0.929688C8.29427 1.03385 8.32812 1.15365 8.32812 1.28906C8.32812 1.48177 8.25781 1.65104 8.11719 1.79688L2.42969 7.35938L8.11719 12.9219C8.25781 13.0677 8.32812 13.237 8.32812 13.4297C8.32812 13.5651 8.29427 13.6849 8.22656 13.7891C8.16406 13.8984 8.07812 13.9844 7.96875 14.0469C7.86458 14.1094 7.74479 14.1406 7.60938 14.1406C7.41146 14.1406 7.24219 14.0703 7.10156 13.9297L0.90625 7.875C0.833333 7.80208 0.778646 7.72396 0.742188 7.64062C0.705729 7.55208 0.6875 7.45833 0.6875 7.35938Z"
            fill={disableButtons.back ? "#5d5961" : "#b8b4bd"}
            fillOpacity="0.5"
          />
        </svg>
      </button>
      <button
        className="flex h-7 w-8 items-center justify-center rounded hover:bg-[#45414a] disabled:bg-transparent"
        onClick={navFuncs.forward}
        disabled={disableButtons.forward}
      >
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.3125 7.35938C8.3125 7.26042 8.29427 7.16927 8.25781 7.08594C8.22135 6.9974 8.16667 6.91667 8.09375 6.84375L1.89844 0.78125C1.75781 0.645833 1.58854 0.578125 1.39062 0.578125C1.25521 0.578125 1.13542 0.609375 1.03125 0.671875C0.921875 0.734375 0.835938 0.820312 0.773438 0.929688C0.705729 1.03385 0.671875 1.15365 0.671875 1.28906C0.671875 1.48177 0.742188 1.65104 0.882812 1.79688L6.57031 7.35938L0.882812 12.9219C0.742188 13.0677 0.671875 13.237 0.671875 13.4297C0.671875 13.5651 0.705729 13.6849 0.773438 13.7891C0.835938 13.8984 0.921875 13.9844 1.03125 14.0469C1.13542 14.1094 1.25521 14.1406 1.39062 14.1406C1.58854 14.1406 1.75781 14.0703 1.89844 13.9297L8.09375 7.875C8.16667 7.80208 8.22135 7.72396 8.25781 7.64062C8.29427 7.55208 8.3125 7.45833 8.3125 7.35938Z"
            fill={disableButtons.forward ? "#5d5961" : "#b8b4bd"}
            fillOpacity="0.5"
          />
        </svg>
      </button>
    </div>
  );
};
