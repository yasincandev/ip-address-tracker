const Data = ({ data, location, firstLocation }) => {
  return (
    <div
      className=' bg-white rounded-xl p-8 shadow max-w-6xl mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-10 relative lg:-mb-32'
      style={{
        zIndex: 1,
      }}
    >
      <div className='lg:border-r lg:border-slate-400 p-6'>
        <h2 className='text-sm uppercase text-slate-600'>IP Address</h2>
        <p className='font-bold text-slate-900 text-2xl break-words'>
          {location ? data.ip : firstLocation.ip}
        </p>
      </div>
      <div className='lg:border-r lg:border-slate-400 p-6'>
        <h2 className='text-sm uppercase text-slate-600'>Location</h2>
        <p className='font-bold text-slate-900 text-2xl'>
          {location
            ? `${data.city}, ${data.region_code} `
            : `${firstLocation.city}, ${firstLocation.region_code} `}
        </p>
      </div>
      <div className='lg:border-r lg:border-slate-400 p-6'>
        <h2 className='text-sm uppercase text-slate-600'>Timezone</h2>
        <p className='font-bold text-slate-900 text-xl'>
          {location ? data.timezone : firstLocation.timezone}
        </p>
      </div>
      <div className='p-6'>
        <h2 className='text-sm uppercase text-slate-600'>ISP</h2>
        <p className='font-bold text-slate-900 text-2xl'>
          {location ? data.org : firstLocation.org}
        </p>
      </div>
    </div>
  );
};

export default Data;
