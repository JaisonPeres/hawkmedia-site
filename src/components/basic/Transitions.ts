export const SlideOver = {
  enter: 'transform transition ease-in-out duration-500 sm:duration-700',
  enterFrom: 'translate-x-full translate-y-full',
  enterTo: 'translate-x-0',
  leave: 'transform transition ease-in-out duration-500 sm:duration-700',
  leaveFrom: 'translate-x-0',
  leaveTo: 'translate-x-full',
};

export const SlideOverBackgroundOverlay = {
  enter: 'ease-in-out duration-500',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'ease-in-out duration-500',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

export const SelectMenu = {
  leave: 'transition ease-in duration-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

export const FlyOutFromBottom = {
  enter: 'transition ease-out duration-200',
  enterFrom: 'opacity-0 translate-y-1',
  enterTo: 'opacity-100 translate-y-0',
  leave: 'transition ease-in duration-150',
  leaveFrom: 'opacity-100 translate-y-0',
  leaveTo: 'opacity-0 translate-y-1',
};