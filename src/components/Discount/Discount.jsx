import { BsBell, BsChevronDown, BsSearch, BsTrash } from 'react-icons/bs'
import './Discount.css';
export default function Discount() {
  const discounts = [
    {
      discount: '5% off on all Orders',
      expired: 'Expired 7th Jan, 2024',
      percent: 5,
    },
    {
      discount: '20% off on all Burgers',
      expired: 'Expired 7th Jan, 2024',
      percent: 20,
    },
    {
      discount: '17% off on Vegetables',
      expired: 'Expired 7th Jan, 2024',
      percent: 17,
    },
    {
      discount: '20% off on Fast Food',
      expired: 'Expired 7th Jan, 2024',
      percent: 20,
    },
    {
      discount: '12% off on Icecream',
      expired: 'Expired 7th Jan, 2024',
      percent: 12,
    }
  ]
  return (
    <main>
      <div className='parent'>
        <div className="search">
          <BsSearch className='searchIcon' />
          <input placeholder='Search' />
        </div>
        <div className="bell">
          <BsBell />
        </div>
        <div className="chickenSection">
          <div className='chicken'></div>
          <p>Chicken Republic</p>
          <BsChevronDown />
        </div>
      </div>
      <p className='discount'>Discount</p>
      <div className='discountTitle'>
        <p className='discounts'>Discounts</p>
        <p className='addDiscounts'>Add Dsicounts</p>
      </div>
      <div className='cardContainer'>
        {discounts.map((data, key) => (
          <div className='discountCard' key={key}>
            <div>
              <p className='off'>{data.discount}</p>
              <p className='expired'>{data.expired}</p>
            </div>
            <p>{data.percent}%</p>
            <div className='actions'>
              <p className='edit'>Edit</p>
              <div className='delete'>
                <BsTrash />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
