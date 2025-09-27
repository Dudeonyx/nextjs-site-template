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
      className="w-96 text-brand-ink "
      classNames={{
        control: ({ isFocused }) =>
          `rounded-md border bg-white px-3 py-2 text-sm shadow-sm dark:bg-brand-cloud
               transition-colors
               ${isFocused ? 'border-brand-mint ring-1 ring-brand-primary' : 'border-gray-300'}
               `,
        valueContainer: () => 'flex gap-1',
        placeholder: () => 'dark:text-brand-dark text-brand-primary dark:bg-brand-cloud',
        singleValue: () => 'text-gray-700',
        menu: () => 'mt-1 rounded-md border border-gray-200 dark:bg-brand-dark shadow-lg text-sm',
        option: ({ isFocused, isSelected }) =>
          `px-3 py-2 cursor-pointer text-brand-ink dark:text-brand-cloud 
               ${
                 isSelected
                   ? 'bg-brand-primary dark:bg-brand-cloud/90 font-bold !text-brand-cloud dark:!text-brand-ink'
                   : isFocused
                   ? 'bg-brand-mint dark:bg-brand-cloud/30 dark:text-brand-cloud'
                   : ''
               }
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
