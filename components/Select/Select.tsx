'use client';

import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export const MySelect = ({ options }: any) => {
  return (
    <Select
      placeholder="Select a service..."
      unstyled
      className="w-96"
      classNames={{
        control: ({ isFocused }) =>
          `rounded-md border bg-white px-3 py-2 text-sm shadow-sm dark:bg-brand-cloud
               transition-colors
               ${isFocused ? 'border-brand-mint ring-1 ring-blue-500' : 'border-gray-300'}
               `,
        valueContainer: () => 'flex gap-1',
        placeholder: () => 'dark:text-brand-dark text-brand-primary dark:bg-brand-cloud',
        singleValue: () => 'text-gray-700',
        menu: () =>
          'mt-1 rounded-md border border-gray-200 dark:bg-brand-dark/90 shadow-lg text-sm',
        option: ({ isFocused, isSelected }) =>
          `px-3 py-2 cursor-pointer
               ${isSelected ? 'bg-blue-500 text-white' : isFocused ? 'bg-gray-100' : ''}
               `,
      }}
      components={{
        IndicatorSeparator: () => null, // remove divider
      }}
      //   classNamePrefix={'sel'}
      options={options}
    />
  );
};
