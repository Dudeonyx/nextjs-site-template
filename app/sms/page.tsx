// 'use client';
// import { use } from 'react';
import { MySelect } from '@/components/Select/Select';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  // Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
// import Selectb from 'react-select';
// import {  } from '@radix-ui/react-select';
// import react from 'react';

// const Select = dynamic(() => Promise.resolve(MySelect), { ssr: false, loading: () => <div /> });

type GetATextPriceResponse = {
  service_name: string;
  api_name: string;
  price: string;
  multiple_sms: boolean;
  ttl: number;
};

export default async function SimsPage() {
  const response = await fetch('http://localhost:3000' + '/api/get-text');
  const prices = (await response.json())?.message?.prices as GetATextPriceResponse[];
  // const filteredPrices = prices.filter()
  const filteredPrices = Object.values(
    prices.reduce((acc, item) => {
      const key = item.api_name;
      const currentPrice = parseFloat(item.price);

      if (!acc[key] || currentPrice > parseFloat(acc[key].price)) {
        const tempPrice = Math.round((parseFloat(item.price) * 1600 + 2000) / 10) * 10;
        const higherItems = ['whatsapp', 'telegram'];
        const price = (
          higherItems.includes(item.api_name) ? tempPrice + 1500 : tempPrice
        ).toLocaleString('en-US');
        acc[key] = {
          ...item,
          value: item.api_name,
          label: (
            <p className="w-full flex justify-between items-center">
              <span>{item.service_name}</span>
              {/* <span> -- </span> */}
              <span className="mr-3">NGN {price}</span>
            </p>
          ),
        };
      }
      // acc.ttl.ttl
      return acc;
    }, {} as { [x: string]: GetATextPriceResponse & { value: string; label: string | ReactElement } }),
  );
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 dark:text-brand-cloud bg-brand-cloud dark:bg-brand-dark text-brand-primary">
      <h1 className="text-4xl font-bold mb-8">Select a service to verify</h1>
      <MySelect options={filteredPrices} />
      {/* <Select>
        <SelectTrigger className="w-[360px]">
          <SelectValue placeholder="Select a service to verify" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Services</SelectLabel>
            {/* <Input className="sticky"></Input> /}
            {filteredPrices.map(({ service_name, price, api_name }) => {
              try {
                return (
                  <SelectItem key={api_name} value={api_name}>{`${service_name} -- N ${(
                    parseFloat(price) * 1600 +
                    2000
                  ).toLocaleString('en-US')}`}</SelectItem>
                );
              } catch (error: any) {
                console.error(error);
                return null;
              }
            })}
          </SelectGroup>
        </SelectContent>
      </Select> */}
    </div>
  );
}
