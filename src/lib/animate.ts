export const animateText = {
  right: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
    delayChildren: 1,
  },
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  down: {},
  left: {},
  appear: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  },
};

export const animateHeader = {
  left: {
    initial: {
      opacity: 0,
      x: 120,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  },
  right: {
    initial: { opacity: 0, x: -120 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  },
};

export const animateFooter = {
  up: {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
};

export const animate = {
  slide: {
    up: {
      opacity: [0, 1],
      y: [60, 0],
      transition: { duration: 0.7 },
    },
    right: {
      opacity: [0, 1],
      x: [-60, 0],
      transition: { duration: 0.7 },
    },
    left: {
      opacity: [0, 1],
      x: [60, 0],
      transition: { duration: 0.7 },
    },
  },
  appear: {
    opacity: [0, 1],
    x: [0, 0],
    transition: { duration: 1, delay: 0.2 },
  },
};
