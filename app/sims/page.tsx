import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import react from 'react';

const simCountries = ['UK', 'US', 'Canada', 'Australia', 'France'] as const;

// type p = typeof simCountries[number];
type DummyData = { id: number; maskedPhoneNo: string };
type MainData = { [x in (typeof simCountries)[number]]: DummyData[] };
const countryCodes = { UK: '+44', US: '+1', Canada: '+1', Australia: '+61', France: '+33' };
const dummyData: MainData = {
  US: [
    { id: 6, maskedPhoneNo: '918-516-5351' },
    { id: 7, maskedPhoneNo: '775-438-4698' },
    { id: 12, maskedPhoneNo: '208-353-3569' },
    { id: 19, maskedPhoneNo: '626-617-6610' },
    { id: 20, maskedPhoneNo: '936-616-5172' },
    { id: 26, maskedPhoneNo: '916-145-1591' },
    { id: 30, maskedPhoneNo: '559-114-5031' },
    { id: 31, maskedPhoneNo: '319-464-4930' },
    { id: 33, maskedPhoneNo: '918-166-8474' },
    { id: 37, maskedPhoneNo: '215-302-9311' },
    { id: 38, maskedPhoneNo: '413-786-0487' },
    { id: 39, maskedPhoneNo: '206-685-7618' },
    { id: 45, maskedPhoneNo: '254-365-5548' },
    { id: 46, maskedPhoneNo: '410-242-2942' },
    { id: 48, maskedPhoneNo: '702-247-5081' },
  ],
  UK: [
    { id: 25, maskedPhoneNo: '596-863-0518' },
    { id: 43, maskedPhoneNo: '169-608-6416' },
    { id: 53, maskedPhoneNo: '505-251-8830' },
    { id: 51, maskedPhoneNo: '562-767-4535' },
    { id: 52, maskedPhoneNo: '918-935-9301' },
  ],
  France: [
    { id: 3, maskedPhoneNo: '686-148-7839' },
    { id: 8, maskedPhoneNo: '956-470-6958' },
    { id: 9, maskedPhoneNo: '232-697-7472' },
    { id: 11, maskedPhoneNo: '377-313-9769' },
    { id: 14, maskedPhoneNo: '344-230-5586' },
    { id: 15, maskedPhoneNo: '307-893-9369' },
    { id: 18, maskedPhoneNo: '483-578-0614' },
    { id: 21, maskedPhoneNo: '270-468-9921' },
    { id: 22, maskedPhoneNo: '461-675-2881' },
    { id: 23, maskedPhoneNo: '987-920-5380' },
    { id: 27, maskedPhoneNo: '287-769-6904' },
    { id: 32, maskedPhoneNo: '959-832-2189' },
    { id: 35, maskedPhoneNo: '831-513-9650' },
    { id: 40, maskedPhoneNo: '702-439-6082' },
    { id: 42, maskedPhoneNo: '211-499-3789' },
    { id: 47, maskedPhoneNo: '201-665-9943' },
    { id: 49, maskedPhoneNo: '817-497-3529' },
    { id: 50, maskedPhoneNo: '306-966-3935' },
  ],
  Canada: [
    { id: 1, maskedPhoneNo: '225-900-4697' },
    { id: 5, maskedPhoneNo: '186-582-1641' },
    { id: 10, maskedPhoneNo: '591-404-2210' },
    { id: 13, maskedPhoneNo: '428-236-5119' },
    { id: 16, maskedPhoneNo: '158-635-8362' },
    { id: 17, maskedPhoneNo: '706-595-1982' },
    { id: 24, maskedPhoneNo: '958-436-0433' },
    { id: 28, maskedPhoneNo: '560-611-7981' },
    { id: 29, maskedPhoneNo: '952-400-3070' },
    { id: 34, maskedPhoneNo: '632-392-3317' },
    { id: 36, maskedPhoneNo: '465-116-6376' },
    { id: 41, maskedPhoneNo: '191-782-0276' },
    { id: 44, maskedPhoneNo: '615-232-2236' },
  ],
  Australia: [{ id: 2, maskedPhoneNo: '562-767-4535' }],
};

export default function SimsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Available foreign numbers</h1>
      {simCountries.map((country) => (
        <div className="mb-12 w-full flex flex-row flex-wrap items-center gap-2" key={country}>
          {dummyData[country].map(({ id, maskedPhoneNo }) => (
            <Card className="w-full max-w-sm" key={country + id}>
              <CardHeader>
                <CardTitle>{country}</CardTitle>
                <CardDescription>{maskedPhoneNo}</CardDescription>
              </CardHeader>
              <CardContent>{countryCodes[country] + ' ' + maskedPhoneNo}</CardContent>
            </Card>
          ))}
          ,
        </div>
      ))}
    </div>
  );
}
