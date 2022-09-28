import background from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';

const Search = ({ handleSubmit, search, setSearch, getIpData }) => {
  return (
    <>
      <div className='absolute w-full -z-10'>
        <img src={background} alt='' className='w-full h-80' />
      </div>
      <div className='max-w-xl mx-auto p-8'>
        <h1 className='font-bold text-2xl lg:text-3xl text-white pb-8 text-center'>
          IP Address Tracker
        </h1>
        <form onSubmit={handleSubmit} className='w-full flex'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search for any IP address '
            className='w-full py-2 px-4 rounded-l-lg'
          />
          <button type='submit' className='bg-black py-2 px-4 rounded-r-lg'>
            <img src={arrow} alt='' />
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
