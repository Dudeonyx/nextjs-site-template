// import { offers } from '@/app/page';

export const offers = [
  'SMS Verification',
  'Account Verification',
  'Boost Accounts',
  'Pre-built accounts',
];

export function OfferSection() {
  return (
    <section className="min-h-[80vh] w-full bg-brand-primary flex-col flex items-stretch justify-center pt-16 gap-6">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h2 className="text-3xl md:text-4xl font-bold">What we offer</h2>
        <p>A quick overview of the services we offer</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12  items-stretch flex-wrap md:items-center justify-center text-center text-xl md:text-2xl">
        {offers.map((offer) => (
          <div
            key={offer}
            className="dark:bg-brand-dark/80 bg-brand-cloud/80 rounded-2xl px-8 h-32 flex items-center justify-center"
          >
            {offer}
          </div>
        ))}
      </div>
    </section>
  );
}
