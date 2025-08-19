import clsx from 'clsx';

function useProductColor(color) {
  return clsx({
    'uxa-aqua': color === 'aqua',
    'uxa-aquamarine': color === 'aquamarine',
    'uxa-black': color === 'black',
    'uxa-cerulean': color === 'cerulean',
    'uxa-dark-blue': color === 'dark-blue',
    'uxa-forest-green': color === 'forest-green',
    'uxa-lime': color === 'lime',
    'uxa-skyblue': color === 'skyblue',
    'uxa-steelblue': color === 'steelblue'
  });
}

export { useProductColor as u };
