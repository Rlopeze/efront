export const customTheme = {
  colors: {
    rsi: {
      50: '#f7f7ed',
      100: '#f7f7ed',

      500: '#1E293B', // slate-800
      600: '#1E293B', // slate-800
      700: '#1E293B', // slate-800
    },
  },
  components: {
    Button: {
      variants: {
        base: {
          color: 'white',
          bg: 'rsi.500',
          _hover: {
            bg: 'rsi.600',
          },
          _active: {
            bg: 'rsi.700',
          },
        },
        outline: {
          bg: 'black',
          color: 'white',
          _hover: {
            bg: '#3c3c3c',
          },
          _active: {
            bg: '#787878',
          },
        },
      },
      defaultProps: {
        variant: 'base',
      },
    },
    Modal: {
      variants: {
        rsi: {
          mt: '100',

          header: {
            mt: '0',
          },
        },
      },
    },
  },
};
